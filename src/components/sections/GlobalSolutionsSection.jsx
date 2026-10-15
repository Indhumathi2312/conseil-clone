"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import globalSolutionsData from "@/data/globalSolutionsData";
import Container from "../layout/Container";

// Gold Star Icon
function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Sparkle Star Icon for Button
function SparkleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2Z" />
    </svg>
  );
}

// 1. Balance: Hollow Circular Ring
function BalanceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle
        cx="16"
        cy="16"
        r="11.5"
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}

// 2. Summit: Rounded Squircle with Cutout Slot
function SummitIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="7" fill="currentColor" />
      <rect x="7" y="7" width="18" height="9" rx="3.5" fill="#ffffff" />
    </svg>
  );
}

// 3. Horizon: 12-Ray Radial Sunburst
const HORIZON_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

function HorizonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      {HORIZON_ANGLES.map((deg) => (
        <rect
          key={deg}
          x="14.3"
          y="1.5"
          width="3.4"
          height="8"
          rx="1.7"
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </svg>
  );
}

// 4. Elevate: 8-Petal Radial Pinwheel Burst
const ELEVATE_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function ElevateIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      {ELEVATE_ANGLES.map((deg) => (
        <polygon
          key={deg}
          points="14.5,2 20.5,2 17.5,10.5 11.5,10.5"
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </svg>
  );
}

// 5. Pioneer: 4-Leaf Quadrants with Central Star Cutout
function PioneerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="13.5" fill="currentColor" />
      <path
        d="M 16 2.5 Q 16 16 2.5 16 Q 16 16 16 29.5 Q 16 16 29.5 16 Q 16 16 16 2.5 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

// 6. Legacy: Slanted Dual Parallelogram Stack
function LegacyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <polygon points="12.5,3.5 27,3.5 19.5,15.5 5,15.5" />
      <polygon points="8.5,15.5 23,15.5 15.5,27.5 1,27.5" opacity="0.88" />
    </svg>
  );
}

function renderLogoIcon(name, className) {
  switch (name) {
    case "Balance":
      return <BalanceIcon className={className} />;
    case "Summit":
      return <SummitIcon className={className} />;
    case "Horizon":
      return <HorizonIcon className={className} />;
    case "Elevate":
      return <ElevateIcon className={className} />;
    case "Pioneer":
      return <PioneerIcon className={className} />;
    case "Legacy":
      return <LegacyIcon className={className} />;
    default:
      return null;
  }
}

export default function GlobalSolutionsSection() {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [activeText, setActiveText] = useState(null);
  const [justClickedText, setJustClickedText] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActiveCompany, setModalActiveCompany] = useState("Balance");

  const handleTextClick = (name) => {
    setActiveText((prev) => (prev === name ? null : name));
    setJustClickedText(name);
    setClickCount((c) => c + 1);
    if (name) {
      setModalActiveCompany(name);
    }
    setTimeout(() => {
      setJustClickedText(null);
    }, 600);
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (activeText) {
      setModalActiveCompany(activeText);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  // Find active company details if one is selected
  const activeCompany = activeText
    ? globalSolutionsData.logos.find((l) => l.name === activeText)
    : null;

  // Find modal company details
  const modalCompany =
    globalSolutionsData.logos.find((l) => l.name === modalActiveCompany) ||
    globalSolutionsData.logos[0];

  return (
    <section
      id={globalSolutionsData.id || "global-solutions"}
      className="py-12 sm:py-14 lg:py-16 bg-[#e9eee9] border-t border-zinc-200/40 scroll-mt-24 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Text & Social Proof Column: Dynamically updates when a company is clicked */}
          <div className="max-w-xl">
            {/* Top Star & Rating */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 sm:mb-8 transition-all duration-300">
              <div className="flex items-center gap-1.5">
                <StarIcon className="w-5 h-5 text-[#f5a623]" />
                <span className="text-xs sm:text-[13px] font-semibold text-[#55635c] tracking-wide">
                  {activeCompany ? activeCompany.rating : globalSolutionsData.rating.text}
                </span>
              </div>
              {activeCompany && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#88d613]/20 text-[#1b4332] animate-fade-in">
                  {activeCompany.metric}
                </span>
              )}
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-bold text-[#1b4332] text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] leading-[1.14] tracking-tight mb-6 max-w-[480px] transition-all duration-300">
              {activeCompany ? activeCompany.headline : globalSolutionsData.heading}
            </h2>

            {/* If a company is clicked: Show that company's specific Testimonial Quote */}
            {activeCompany ? (
              <div className="mb-8 p-5 sm:p-6 bg-white/90 rounded-[20px] border border-black/[0.04] shadow-xs animate-fade-in">
                <p className="text-[#2b3a32] text-[15px] sm:text-[16px] leading-relaxed italic mb-4">
                  &ldquo;{activeCompany.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0">
                    <Image
                      src={activeCompany.avatar}
                      alt={activeCompany.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#1b4332] text-sm leading-tight">
                      {activeCompany.author}
                    </h4>
                    <p className="text-[#65766c] text-xs leading-tight mt-0.5">
                      {activeCompany.role}
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Avatars + Read More Stories Button Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* 3 Overlapping Circular Avatars (shown in default state) */}
              {!activeCompany && (
                <div className="flex items-center -space-x-3 shrink-0">
                  {globalSolutionsData.avatars.map((av) => (
                    <div
                      key={av.id}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
                    >
                      <Image
                        src={av.src}
                        alt={av.alt}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button: Read more stories -> Opens Customer Stories Modal */}
              <button
                type="button"
                onClick={handleOpenModal}
                className="inline-flex items-center gap-3.5 sm:gap-4 px-6 sm:px-7 hover:px-9 sm:hover:px-11 py-3 sm:py-3.5 rounded-[14px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-sm sm:text-[15px] transition-all duration-300 ease-out shadow-xs hover:shadow-lg cursor-pointer select-none group"
              >
                <SparkleIcon className="w-3.5 h-3.5 text-white shrink-0 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                <span className="transition-all duration-300 group-hover:tracking-wide">
                  {globalSolutionsData.button.label}
                </span>
              </button>
            </div>
          </div>

          {/* Right White Card: Trusted by 2,000+ companies & Interactive 3x2 Logo Grid */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] bg-white rounded-[18px] sm:rounded-[22px] p-6 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(27,67,50,0.06)] border border-black/[0.03]">
              {/* Centered Heading: small, dark green text matching reference */}
              <h3 className="font-heading font-semibold text-[#1b4332] text-xs sm:text-[13px] md:text-[14px] text-center mb-7 sm:mb-9 tracking-tight">
                {globalSolutionsData.subtitle}
              </h3>

              {/* Show All Reset Button when a logo is selected */}
              {activeText && (
                <div className="flex justify-center -mt-4 mb-6 animate-fade-in">
                  <button
                    type="button"
                    onClick={() => setActiveText(null)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold text-[#1b4332] bg-[#ebf4e4] hover:bg-[#ddecd4] border border-[#88d613]/30 rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:scale-105 select-none"
                  >
                    <span>✕ Show all</span>
                  </button>
                </div>
              )}

              {/* 3-Column, 2-Row Logo Grid matching reference screenshot alignment */}
              <div
                onMouseLeave={() => setHoveredLogo(null)}
                className="grid grid-cols-3 gap-y-7 sm:gap-y-9 gap-x-3 sm:gap-x-6 md:gap-x-8 items-center justify-items-start pl-2 sm:pl-4 min-h-[140px] sm:min-h-[160px]"
              >
                {globalSolutionsData.logos.map((logo) => {
                  const hasActive = activeText !== null;
                  const isActive = activeText === logo.name;
                  const isOther = hasActive && !isActive;
                  const isJustClicked = justClickedText === logo.name;
                  const isHovered = hoveredLogo === logo.name;
                  const isOtherHovered = hoveredLogo !== null && !isHovered;

                  return (
                    <button
                      key={`${logo.id}-${isJustClicked ? clickCount : "idle"}`}
                      type="button"
                      onClick={() => handleTextClick(logo.name)}
                      onMouseEnter={() => setHoveredLogo(logo.name)}
                      onMouseLeave={() => setHoveredLogo(null)}
                      title={isActive ? "Click to show all" : `Select ${logo.name}`}
                      className={`relative group flex items-center gap-2 sm:gap-2.5 md:gap-3 cursor-pointer select-none rounded-2xl px-2 sm:px-3 py-1.5 transition-all duration-300 ease-out outline-none ${
                        isActive
                          ? "bg-[#ebf4e4] border border-[#88d613]/50 ring-2 ring-[#88d613]/25 shadow-[0_4px_16px_rgba(136,214,19,0.14)] scale-105 z-10 opacity-100 blur-none translate-y-0"
                          : isOther
                          ? "bg-transparent border border-transparent opacity-0 scale-90 -translate-y-1.5 hover:opacity-60 hover:scale-100 hover:translate-y-0"
                          : isHovered
                          ? "bg-transparent border border-transparent scale-105 sm:scale-110 opacity-100 blur-none translate-y-0 z-10"
                          : isOtherHovered
                          ? "bg-transparent border border-transparent opacity-30 blur-[1px] scale-95 translate-y-0"
                          : "bg-transparent border border-transparent opacity-100 scale-100 blur-none translate-y-0 hover:scale-105 sm:hover:scale-110"
                      } ${isJustClicked ? "animate-logo-bounce z-10" : ""}`}
                    >
                      {/* Expanding Pulse Ring on Click */}
                      {isJustClicked && (
                        <span className="absolute inset-0 rounded-2xl border-2 border-[#88d613] animate-ripple pointer-events-none" />
                      )}

                      {/* Logo Icon: Lime green SVG icon */}
                      <div
                        className={`shrink-0 transition-all duration-300 ${
                          isActive || !hasActive
                            ? "text-[#88d613]"
                            : isHovered
                            ? "text-[#88d613]"
                            : "text-[#b0c4b5]"
                        } ${isJustClicked ? "animate-icon-pop" : ""}`}
                      >
                        {renderLogoIcon(
                          logo.name,
                          "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                        )}
                      </div>

                      {/* Logo Text: Bold, dark green text matching reference */}
                      <span
                        className={`font-heading font-extrabold text-[15px] sm:text-[18px] md:text-[20px] tracking-tight leading-none transition-all duration-300 ${
                          isActive || !hasActive
                            ? "text-[#1b4332]"
                            : isHovered
                            ? "text-[#1b4332]"
                            : "text-[#9db0a2]"
                        }`}
                      >
                        {logo.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Customer Success Stories Modal (Triggered by "Read more stories" button) */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl border border-zinc-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-zinc-100 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#ebf4e4] flex items-center justify-center text-[#1b4332]">
                  <SparkleIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#1b4332] text-lg sm:text-xl">
                    Customer Success Stories
                  </h3>
                  <p className="text-xs text-[#65766c]">
                    Real results from 2,000+ leading companies worldwide
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-[#f4f6f4] hover:bg-[#e6ebe6] flex items-center justify-center text-[#1b4332] font-bold text-sm transition-colors cursor-pointer"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Company Tabs Inside Modal */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {globalSolutionsData.logos.map((logo) => {
                const isSelected = modalActiveCompany === logo.name;
                return (
                  <button
                    key={logo.id}
                    type="button"
                    onClick={() => {
                      setModalActiveCompany(logo.name);
                      setActiveText(logo.name);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1b4332] text-white shadow-xs scale-105"
                        : "bg-[#f4f6f4] text-[#4a5a50] hover:bg-[#e9eee9]"
                    }`}
                  >
                    <div className={isSelected ? "text-[#88d613]" : "text-[#88d613]"}>
                      {renderLogoIcon(logo.name, "w-3.5 h-3.5")}
                    </div>
                    <span>{logo.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Company Story Details */}
            <div className="bg-[#f8faf8] rounded-2xl p-6 sm:p-7 border border-[#e5ebe5]">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#f5a623]">
                  <StarIcon className="w-4 h-4 fill-current" />
                  <span className="text-[#1b4332]">{modalCompany.rating}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#88d613]/25 text-[#1b4332]">
                  {modalCompany.metric}
                </span>
              </div>

              <h4 className="font-heading font-bold text-[#1b4332] text-lg sm:text-xl leading-snug mb-4">
                {modalCompany.headline}
              </h4>

              <p className="text-[#3a4d42] text-[15px] sm:text-[16px] leading-relaxed italic mb-6">
                &ldquo;{modalCompany.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0">
                    <Image
                      src={modalCompany.avatar}
                      alt={modalCompany.author}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-[#1b4332] text-sm">
                      {modalCompany.author}
                    </h5>
                    <p className="text-[#65766c] text-xs mt-0.5">
                      {modalCompany.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="text-[#88d613]">
                    {renderLogoIcon(modalCompany.name, "w-5 h-5")}
                  </div>
                  <span className="font-heading font-extrabold text-[#1b4332] text-sm">
                    {modalCompany.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-5 py-2.5 rounded-xl border border-zinc-200 text-[#1b4332] font-semibold text-xs hover:bg-[#f4f6f4] transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href="#pix_section_reviews"
                onClick={handleCloseModal}
                className="px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
              >
                View All Reviews
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
