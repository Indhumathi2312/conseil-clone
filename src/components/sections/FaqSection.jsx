"use client";

import { useState } from "react";
import Link from "next/link";
import faqData from "@/data/faqData";
import Container from "../layout/Container";

// Top Badge Consultation / FAQ User Icon
function FaqBadgeIcon({ className = "w-7 h-7" }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="4.2" fill="#183d2c" />
      <path
        d="M3 21.5c0-3.6 2.9-6.5 6.5-6.5h1c2.1 0 3.9.99 5.1 2.53"
        stroke="#183d2c"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="20" cy="8.5" r="3.2" fill="#8ea696" />
    </svg>
  );
}

// Icon 1: Beamed Musical Notes with Sound Waves
function MusicNoteIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <line x1="2.5" y1="8.5" x2="6" y2="8.5" stroke="#183d2c" strokeWidth="2" strokeLinecap="round" />
      <line x1="1.5" y1="12" x2="6.5" y2="12" stroke="#183d2c" strokeWidth="2" strokeLinecap="round" />
      <line x1="2.5" y1="15.5" x2="6" y2="15.5" stroke="#183d2c" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="6" x2="10" y2="15" stroke="#183d2c" strokeWidth="1.8" />
      <ellipse cx="8.5" cy="15.5" rx="2.5" ry="2" fill="#183d2c" />
      <line x1="18" y1="4" x2="18" y2="13" stroke="#183d2c" strokeWidth="1.8" />
      <ellipse cx="16.5" cy="13.5" rx="2.5" ry="2" fill="#183d2c" />
      <polygon points="9.5,4.5 18.5,2.5 18.5,5.5 9.5,7.5" fill="#183d2c" />
    </svg>
  );
}

// Icon 2: Desktop Computer Monitor
function MonitorIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="#183d2c"
        strokeWidth="1.8"
      />
      <line x1="12" y1="16" x2="12" y2="19.5" stroke="#183d2c" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8.5" y1="19.5" x2="15.5" y2="19.5" stroke="#183d2c" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Icon 3: Lifebuoy / Support Ring
function LifebuoyIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="#183d2c" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="#183d2c" strokeWidth="1.8" />
      <path
        d="M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M17.7 6.3l-2.5 2.5M8.8 15.2l-2.5 2.5"
        stroke="#183d2c"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Icon 4: Mobile Phone with Envelope Badge
function MobileMailIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3.5"
        width="10.5"
        height="16"
        rx="2.2"
        stroke="#607367"
        strokeWidth="1.6"
      />
      <line x1="6.5" y1="6" x2="10" y2="6" stroke="#607367" strokeWidth="1.6" strokeLinecap="round" />
      <rect
        x="9.5"
        y="9.5"
        width="11"
        height="8.5"
        rx="1.8"
        fill="#ffffff"
        stroke="#183d2c"
        strokeWidth="1.6"
      />
      <path
        d="M10 11l5.5 3.5L20 11"
        stroke="#183d2c"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Icon 5: User Profile with Security Lock
function SecurityUserIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="8" r="3.2" stroke="#607367" strokeWidth="1.6" />
      <path
        d="M4 17.5c0-2.8 2.5-5 5.5-5 1.2 0 2.3.4 3.2 1"
        stroke="#607367"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="14" y="12.5" width="7" height="6" rx="1.5" fill="#183d2c" />
      <path
        d="M15.5 12.5V10.8a2 2 0 0 1 4 0v1.7"
        stroke="#183d2c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Book Icon for Left Badge
function BookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  );
}

// Support Users Icon for Left Badge
function SupportUsersIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 16v-1a4 4 0 00-2.5-3.7 5.97 5.97 0 011.5 3.7v1h1z" />
    </svg>
  );
}

// Chevron Right Arrow for Buttons with Hover Slide Animation (Matching Smart Tools Section)
function ChevronRightIcon({ className }) {
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
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}


export default function FaqSection() {
  // Start with null so that initially all items are collapsed, matching the reference screenshot exactly
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const renderIcon = (iconKey) => {
    switch (iconKey) {
      case "music":
        return <MusicNoteIcon className="w-5 h-5 shrink-0" />;
      case "desktop":
        return <MonitorIcon className="w-5 h-5 shrink-0" />;
      case "lifebuoy":
        return <LifebuoyIcon className="w-5 h-5 shrink-0" />;
      case "mobileMail":
        return <MobileMailIcon className="w-5 h-5 shrink-0" />;
      case "securityUser":
        return <SecurityUserIcon className="w-5 h-5 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section id={faqData.id} className="py-16 sm:py-24 bg-white scroll-mt-24 overflow-hidden">
      <Container>
        {/* Main Sage Card */}
        <div className="bg-[#edf2ee] rounded-[32px] sm:rounded-[36px] md:rounded-[40px] p-7 sm:p-10 md:p-12 lg:p-14 xl:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                {/* Top Avatar / Consultation Icon Badge */}
                <div className="w-13 h-13 rounded-[16px] bg-[#dce5de] flex items-center justify-center mb-6 sm:mb-8 text-[#183d2c]">
                  <FaqBadgeIcon className="w-7 h-7" />
                </div>

                {/* Heading with Stylized Underline */}
                <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-bold text-[#183d2c] tracking-tight leading-[1.14]">
                  Check Frequently
                  <br />
                  Asked{" "}
                  <span className="relative inline-block">
                    Questions
                    <svg
                      className="absolute -bottom-1.5 left-0 w-8 sm:w-10 h-2 sm:h-2.5 text-[#183d2c]"
                      viewBox="0 0 38 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6.5C8 2 24 2 36 6.5"
                        stroke="currentColor"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                {/* Subtitle Description */}
                <p className="mt-4 sm:mt-5 text-[#5b6c61] text-sm sm:text-[15px] leading-relaxed max-w-[420px]">
                  {faqData.subtitle}
                </p>
              </div>

              {/* Bottom Badges */}
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3">
                {faqData.badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[12px] bg-[#dce5de] hover:bg-[#d5ded7] text-[#183d2c] font-semibold text-xs sm:text-[13px] tracking-tight transition-colors cursor-default select-none"
                  >
                    {badge.icon === "book" && <BookIcon className="w-4 h-4 text-[#183d2c]" />}
                    {badge.icon === "support" && <SupportUsersIcon className="w-4 h-4 text-[#183d2c]" />}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: FAQ Cards + Bottom Banner */}
            <div className="lg:col-span-7">
              <div className="space-y-3 sm:space-y-3.5">
                {faqData.faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div
                      key={faq.id}
                      className="bg-white rounded-[14px] sm:rounded-[16px] shadow-[0_1px_4px_rgba(0,0,0,0.02)] border border-white/80 overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between text-left cursor-pointer group hover:bg-[#fafbfa] transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                          <span className="shrink-0 flex items-center justify-center text-[#183d2c]">
                            {renderIcon(faq.icon)}
                          </span>
                          <span className="font-bold text-[#183d2c] text-sm sm:text-[15px] tracking-tight group-hover:text-[#112d20] transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#5b6c61] leading-relaxed border-t border-zinc-100/60 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Bottom Support Banner */}
                <div className="bg-[#dce5de] rounded-[16px] px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4 mt-4">
                  <span className="text-[#5b6c61] font-medium text-sm sm:text-[15px]">
                    {faqData.banner.prompt}
                  </span>
                  <Link
                    href={faqData.banner.button.href}
                    className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 hover:px-7 sm:hover:px-8 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md cursor-pointer select-none group/btn shrink-0"
                  >
                    <span>{faqData.banner.button.label}</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-white shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
