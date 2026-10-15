"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import platformScaleData from "@/data/platformScaleData";
import Container from "../layout/Container";

// Conseil Duotone Cloud Credit Card Icon
function CloudCardIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="2 2 20 20"
      fill="currentColor"
    >
      <path
        opacity="0.3"
        d="M13.5,5 C16.9110549,5 19.7382666,7.43237206 19.9828364,10.5593451 L19.994,10.754 L20.1482441,10.8608624 C20.7022564,11.2640594 21.1544816,11.7869538 21.4733232,12.3860662 C21.037721,12.1401631 20.5352289,12 20,12 L13,12 C12.1715729,12 11.4215729,12.3357864 10.8786797,12.8786797 C10.3357864,13.4215729 10,14.1715729 10,15 L10,19 L6.5,19 C4.08572667,19 2.11551091,17.0987635 2.00489799,14.7118357 L2,14.5 C2,12.9940078 2.7468449,11.624812 3.93804319,10.7996626 L4.008,10.753 L4,10.5 C4,8.05273428 6.14192698,6.11056857 8.77329416,6.0045588 L9,6 C9.21479011,6 9.4280001,6.01220239 9.63866816,6.03635626 L9.811,6.061 L9.91189498,5.99604538 C10.8836147,5.40084052 12.0151692,5.05577401 13.2021583,5.00620878 Z"
      />
      <path d="M22,17 L22,20 C22,21.1045695 21.1045695,22 20,22 L13,22 C11.8954305,22 11,21.1045695 11,20 L11,17 L22,17 Z M11,15 C11,13.8954305 11.8954305,13 13,13 L20,13 C21.1045695,13 22,13.8954305 22,15 L22,16 L11,16 Z" />
    </svg>
  );
}

// Conseil Chat Smile Icon for Button
function ChatSmileIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="2 2 20 20"
      fill="currentColor"
    >
      <path d="M19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,16.6568542 20.6568542,18 19,18 L9.60555128,18 C9.40812629,18 9.2151186,18.058438 9.05085108,18.1679497 L5.10940039,20.7955835 C4.19034302,21.4082884 2.94860433,21.1599407 2.33589941,20.2408833 C2.11687605,19.9123483 2,19.5263329 2,19.1314829 L2,6 C2,4.34314575 3.34314575,3 5,3 Z M16.8479983,11.2200011 C16.555288,10.7516645 15.9383376,10.6092914 15.4700011,10.9020017 C13.1276047,12.3659994 10.8723953,12.3659994 8.52999894,10.9020017 C8.06166241,10.6092914 7.44471203,10.7516645 7.1520017,11.2200011 C6.85929136,11.6883376 7.00166453,12.305288 7.47000106,12.5979983 C10.460938,14.4673339 13.539062,14.4673339 16.5299989,12.5979983 C16.9983355,12.305288 17.1407086,11.6883376 16.8479983,11.2200011 Z" />
    </svg>
  );
}

// Conseil Duotone Document WWW Icon for Subcard matching user reference image
function GlobeDocIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.5"
        y="3.5"
        width="19"
        height="17"
        rx="4.5"
        fill="#c2d3c7"
      />
      <circle cx="6.5" cy="7" r="1" fill="#1b4332" />
      <circle cx="9.5" cy="7" r="1" fill="#1b4332" />
      <circle cx="12.5" cy="7" r="1" fill="#1b4332" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontSize="5.6"
        fontWeight="800"
        fill="#1b4332"
        letterSpacing="0.4"
      >
        www
      </text>
    </svg>
  );
}

export default function PlatformScaleSection() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const primaryButton = platformScaleData.buttons?.[0] || {
    label: "Launch Your Product",
    href: "#",
  };

  const digitalCard = platformScaleData.digitalCard || {
    title: "Digital Excellence",
    description:
      "Optimized structure ensures fast loading and smooth interactions.",
    button: { label: "Join Our Network", href: "#" },
  };

  return (
    <section
      id={platformScaleData.id || "platform-scale"}
      className="py-12 sm:py-16 lg:py-20 bg-white border-t border-zinc-100 scroll-mt-24 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Fixed (left-to-right translation removed) */}
          <div className="order-2 lg:order-1 flex flex-col gap-4 sm:gap-5">
            {/* Top Container with Balanced Height matching user reference */}
            <div
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full h-[320px] sm:h-[350px] md:h-[370px] rounded-[28px] sm:rounded-[32px] bg-[#edf2ee] p-5 sm:p-7 md:p-8 overflow-hidden flex items-center justify-center select-none cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Single Card: ZOOMS ONLY on hover (card zoom mattum than agum) */}
              <div
                style={{
                  transform: `scale(${isHovered ? 1.08 : 1})`,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
                  willChange: "transform",
                }}
                className={`relative z-10 w-full max-w-[390px] sm:max-w-[410px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-transparent ${
                  isHovered
                    ? "shadow-[0_28px_60px_rgba(27,67,50,0.24)]"
                    : "shadow-[0_16px_36px_rgba(27,67,50,0.12)]"
                }`}
              >
                {/* Credit Card Image */}
                <Image
                  src={platformScaleData.image.src}
                  alt={platformScaleData.image.alt}
                  width={1002}
                  height={634}
                  className="w-full h-auto object-contain block pointer-events-none rounded-[20px] sm:rounded-[24px]"
                  priority
                />
              </div>
            </div>

            {/* Bottom Digital Excellence Subcard (clearly visible right below) */}
            <div className="rounded-[20px] sm:rounded-[24px] bg-white border border-[#e5ebe7] p-4.5 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-md hover:border-[#d5dfd8]">
              <div className="flex items-start sm:items-center gap-4">
                {/* Globe WWW Document Icon Badge matching user reference */}
                <div className="w-12 h-12 rounded-[14px] sm:rounded-[16px] bg-[#dfe7e2] flex items-center justify-center shrink-0">
                  <GlobeDocIcon className="w-7 h-7 text-[#1b4332]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#1b4332] text-lg sm:text-[19px] leading-tight mb-1">
                    {digitalCard.title}
                  </h3>
                  <p className="text-[#55635c] text-xs sm:text-sm leading-relaxed max-w-[430px]">
                    {digitalCard.description}
                  </p>
                </div>
              </div>

              <Link
                href={digitalCard.button?.href || "#"}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#dce6df] hover:bg-[#cfded3] text-[#1b4332] text-xs sm:text-[13px] font-semibold transition-all duration-200 shrink-0 self-end sm:self-center group/btn"
              >
                <span>{digitalCard.button?.label || "Join Our Network"}</span>
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

          {/* Right Column: Text Details */}
          <div className="order-1 lg:order-2 max-w-xl">
            {/* Top Cloud Credit Card Icon Badge */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#edf2ee] flex items-center justify-center mb-6 sm:mb-8 shadow-xs">
              <CloudCardIcon className="w-6 h-6 text-[#1b4332]" />
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-bold text-[#1b4332] text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight mb-6 max-w-[500px]">
              {platformScaleData.heading}
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-[#55635c] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] mb-8 sm:mb-9 max-w-[480px]">
              {platformScaleData.description}
            </p>

            {/* Action Button: Launch Your Product */}
            <div className="flex items-center">
              <Link
                href={primaryButton.href}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-sm sm:text-[15px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer select-none"
              >
                <ChatSmileIcon className="w-4 h-4 text-white shrink-0" />
                <span>{primaryButton.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
