"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import productivityData from "@/data/productivityData";
import Container from "../layout/Container";

// Microchip / Processor Icon Badge for Section
function ChipIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="3"
        fill="#1b4332"
        fillOpacity="0.18"
        stroke="#1b4332"
        strokeWidth="1.8"
      />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="#1b4332" />
      <line x1="9" y1="2" x2="9" y2="6" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="15" y1="2" x2="15" y2="6" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="18" x2="9" y2="22" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="15" y1="18" x2="15" y2="22" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="9" x2="6" y2="9" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="15" x2="6" y2="15" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18" y1="9" x2="22" y2="9" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18" y1="15" x2="22" y2="15" stroke="#1b4332" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Activity / Pulse Zigzag Icon for Button
function PulseIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="2 12 7 12 10 5 14 19 17 12 22 12" />
    </svg>
  );
}

// Shopping Bag / Tote Icon for Subcard
function BagIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1b4332"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M5 8h14l-1.5 12a2 2 0 0 1-2 1.8H8.5A2 2 0 0 1 6.5 20L5 8z"
        fill="#1b4332"
        fillOpacity="0.18"
      />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <circle cx="12" cy="13.5" r="1.2" fill="#1b4332" stroke="none" />
    </svg>
  );
}

// UK Flag Circular Vector Icon
function UkFlagIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none">
      <clipPath id="uk-flag-circle">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#uk-flag-circle)">
        {/* Blue background */}
        <rect width="60" height="60" fill="#012169" />
        {/* White diagonals */}
        <line x1="0" y1="0" x2="60" y2="60" stroke="#FFFFFF" strokeWidth="11" />
        <line x1="60" y1="0" x2="0" y2="60" stroke="#FFFFFF" strokeWidth="11" />
        {/* Red diagonals */}
        <line x1="0" y1="0" x2="60" y2="60" stroke="#C8102E" strokeWidth="5.5" />
        <line x1="60" y1="0" x2="0" y2="60" stroke="#C8102E" strokeWidth="5.5" />
        {/* White cross */}
        <line x1="30" y1="0" x2="30" y2="60" stroke="#FFFFFF" strokeWidth="18" />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#FFFFFF" strokeWidth="18" />
        {/* Red cross */}
        <line x1="30" y1="0" x2="30" y2="60" stroke="#C8102E" strokeWidth="11" />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#C8102E" strokeWidth="11" />
      </g>
    </svg>
  );
}

// Classical Bank Pillar Icon
function BankIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 22 7" fill="currentColor" fillOpacity="0.2" />
      <line x1="2" y1="7" x2="22" y2="7" />
      <line x1="4" y1="10" x2="4" y2="17" />
      <line x1="9.33" y1="10" x2="9.33" y2="17" />
      <line x1="14.67" y1="10" x2="14.67" y2="17" />
      <line x1="20" y1="10" x2="20" y2="17" />
      <line x1="2" y1="17" x2="22" y2="17" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  );
}

export default function ProductivityDesignSection() {
  const containerRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 60fps/120fps smooth lerp loop for cursor-driven scroll inside container
  useEffect(() => {
    let animId;
    const factor = 0.12;

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * factor;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * factor;

      setScrollPos({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // When cursor moves inside container, cards scroll smoothly with generous margin
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const relY = (e.clientY - rect.top) / rect.height; // 0 to 1

    targetRef.current.x = (0.5 - relX) * 28; // ±14px horizontal pan
    targetRef.current.y = (0.5 - relY) * 40; // ±20px vertical scroll
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    targetRef.current.x = 0;
    targetRef.current.y = 0;
  }, []);

  // Mouse wheel scroll support inside container
  const handleWheel = useCallback((e) => {
    targetRef.current.y = Math.max(
      -35,
      Math.min(35, targetRef.current.y - e.deltaY * 0.25)
    );
  }, []);

  const primaryButton = productivityData.buttons?.[0] || {
    label: "Get Your Strategy",
    href: "#",
  };

  const modularCard = productivityData.modularCard || {
    title: "Modular by Design",
    description:
      "Build flexible layouts using reusable components designed for scalability.",
    button: { label: "Explore Services", href: "#" },
  };

  return (
    <section
      id={productivityData.id || "productivity-design"}
      className="py-14 sm:py-20 lg:py-24 bg-white border-t border-zinc-100 scroll-mt-24 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="max-w-xl">
            {/* Top Microchip / Processor Icon Badge */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#edf2ee] flex items-center justify-center mb-6 sm:mb-8 shadow-xs">
              <ChipIcon className="w-6 h-6 text-[#1b4332]" />
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-bold text-[#1b4332] text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-[1.12] tracking-tight mb-6 max-w-[480px]">
              {productivityData.heading}
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-[#55635c] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] mb-8 sm:mb-9 max-w-[480px]">
              {productivityData.description}
            </p>

            {/* Action Button: Get Your Strategy */}
            <div className="flex items-center">
              <Link
                href={primaryButton.href || "#"}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-sm sm:text-[15px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer select-none"
              >
                <PulseIcon className="w-4 h-4 text-white shrink-0" />
                <span>{primaryButton.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive 4-Card Bento Showcase & Modular Subcard */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Top Interactive Container: Shows the 4 Separate White Cards on Grey Background */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onWheel={handleWheel}
              className="relative w-full h-[450px] sm:h-[480px] md:h-[510px] rounded-[28px] sm:rounded-[32px] bg-[#edf2ee] p-5 sm:p-7 md:p-9 overflow-hidden flex items-center justify-center select-none cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              {/* 4-Card Bento Grid Wrapper: Zooms on hover and Scrolls on cursor move/wheel */}
              <div
                style={{
                  transform: `translate3d(${scrollPos.x}px, ${scrollPos.y}px, 0px) scale(${isHovered ? 1.04 : 1})`,
                  transition: isHovered
                    ? "box-shadow 0.3s ease"
                    : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                  willChange: "transform",
                }}
                className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] flex flex-col gap-3 sm:gap-3.5"
              >
                {/* 1. Jenny Arthur Full-Width Top Card */}
                <div className="w-full bg-white rounded-[22px] sm:rounded-[26px] p-3.5 sm:p-4 md:p-4.5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] border border-black/[0.02] flex items-center justify-between transition-shadow duration-200 hover:shadow-md">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    {/* Circle Icon with up arrow + clock badge */}
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#e5ebe7] flex items-center justify-center shrink-0 shadow-2xs">
                      <svg
                        className="w-4 h-4 text-[#1a2e22]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                      </svg>
                      {/* Yellow clock badge */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#f6b738] border-2 border-white flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-[#5e4100]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="12 7 12 12 15 12" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-[#1a2e22] text-sm sm:text-[15px] leading-tight">
                        Jenny Arthur
                      </h4>
                      <p className="text-[#697870] text-xs sm:text-[13px] leading-tight mt-0.5">
                        Pending
                      </p>
                    </div>
                  </div>

                  <div className="font-heading font-bold text-[#1a2e22] text-sm sm:text-[15px] tracking-tight">
                    2.64 GBP
                  </div>
                </div>

                {/* 2 & 3. Middle Row: Two Cards Side by Side */}
                <div className="grid grid-cols-2 gap-3 sm:gap-3.5 w-full">
                  {/* Left: GBP 0.00 Card */}
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] border border-black/[0.02] flex flex-col justify-between h-[150px] sm:h-[165px] transition-shadow duration-200 hover:shadow-md">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 shadow-2xs">
                        <UkFlagIcon className="w-full h-full" />
                      </div>
                      <span className="font-heading font-bold text-[#1a2e22] text-sm sm:text-base">
                        GBP
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-[#697870] text-xs sm:text-[13px] mb-1">
                        <BankIcon className="w-3.5 h-3.5" />
                        <span className="tracking-wider">.. 59459</span>
                      </div>
                      <div className="font-heading font-extrabold text-[#1a2e22] text-2xl sm:text-[28px] tracking-tight leading-none">
                        0.00
                      </div>
                    </div>
                  </div>

                  {/* Right: Jen Wolf Avatar Card */}
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] border border-black/[0.02] flex flex-col items-center justify-center h-[150px] sm:h-[165px] transition-shadow duration-200 hover:shadow-md">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-2">
                      <Image
                        src="/assets/images/circles-image-1.webp"
                        alt="Jen Wolf"
                        width={64}
                        height={64}
                        className="w-full h-full rounded-full object-cover shadow-2xs"
                      />
                      {/* Flag badge */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 rounded-full border-2 border-white overflow-hidden shadow-2xs">
                        <UkFlagIcon className="w-full h-full" />
                      </div>
                    </div>
                    <h4 className="font-heading font-bold text-[#1a2e22] text-sm sm:text-[14px] text-center">
                      Jen Wolf
                    </h4>
                  </div>
                </div>

                {/* 4. Joint Account Full-Width Bottom Card */}
                <div className="w-full bg-white rounded-[22px] sm:rounded-[26px] p-3.5 sm:p-4 md:p-4.5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] border border-black/[0.02] flex items-center justify-between transition-shadow duration-200 hover:shadow-md">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    {/* Overlapping circular avatars */}
                    <div className="relative flex items-center w-11 h-9">
                      <div className="absolute left-0 top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-2xs">
                        <Image
                          src="/assets/images/circles-image-2.webp"
                          alt="Account member"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute left-4 bottom-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-2xs z-10">
                        <Image
                          src="/assets/images/circles-image-3.webp"
                          alt="Account member"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-[#1a2e22] text-sm sm:text-[15px] leading-tight">
                        Joint account
                      </h4>
                      <p className="text-[#697870] text-xs sm:text-[13px] leading-tight mt-0.5">
                        Received
                      </p>
                    </div>
                  </div>

                  <div className="font-heading font-bold text-[#236338] text-sm sm:text-[15px] tracking-tight">
                    + 200 GBP
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Modular by Design Subcard */}
            <div className="rounded-[20px] sm:rounded-[24px] bg-white border border-[#e5ebe7] p-4.5 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-md hover:border-[#d5dfd8]">
              <div className="flex items-start sm:items-center gap-4">
                {/* Bag / Tote Icon Badge matching user reference */}
                <div className="w-12 h-12 rounded-[14px] sm:rounded-[16px] bg-[#dfe7e2] flex items-center justify-center shrink-0">
                  <BagIcon className="w-6 h-6 text-[#1b4332]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#1b4332] text-lg sm:text-[19px] leading-tight mb-1">
                    {modularCard.title}
                  </h3>
                  <p className="text-[#55635c] text-xs sm:text-sm leading-relaxed max-w-[430px]">
                    {modularCard.description}
                  </p>
                </div>
              </div>

              <Link
                href={modularCard.button?.href || "#"}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#dce6df] hover:bg-[#cfded3] text-[#1b4332] text-xs sm:text-[13px] font-semibold transition-all duration-200 shrink-0 self-end sm:self-center group/btn"
              >
                <span>{modularCard.button?.label || "Explore Services"}</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
