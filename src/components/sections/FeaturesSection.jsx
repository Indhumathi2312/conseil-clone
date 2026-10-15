"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import featuresData from "@/data/featuresData";
import Container from "../layout/Container";

function ChartIcon({ className }) {
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
      <polyline points="3.5 14.5 6.5 14.5 9.5 9.5 13.5 13.5 19.5 7" />
    </svg>
  );
}

function SlidersIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="7" y1="5" x2="7" y2="11" />
      <line x1="3" y1="16" x2="21" y2="16" />
      <line x1="17" y1="13" x2="17" y2="19" />
    </svg>
  );
}

function PieChartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      {/* Top-Right slice: Forest Green */}
      <path d="M13 11 L13 2.5 A8.5 8.5 0 0 1 21.5 11 Z" fill="#1b4332" />
      {/* Bottom-Right slice */}
      <path d="M12 13 L19.8 13 A8.5 8.5 0 0 1 13 19.8 Z" fill="#9fb6a6" />
      {/* Bottom-Left slice */}
      <path d="M11 13 L11 20.5 A8.5 8.5 0 0 1 3.5 13 Z" fill="#c0d2c6" />
      {/* Top-Left slice */}
      <path d="M11 12 L3.5 12 A8.5 8.5 0 0 1 11 4.2 Z" fill="#dce7e0" />
    </svg>
  );
}

export default function FeaturesSection() {
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

  // When cursor moves, the card SCROLLS inside the container
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const relY = (e.clientY - rect.top) / rect.height; // 0 to 1

    // Cursor position scrolls the zoomed card smoothly inside the container with ample room
    targetRef.current.x = (0.5 - relX) * 40; // ±20px horizontal pan
    targetRef.current.y = (0.5 - relY) * 130; // ±65px vertical scroll
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    targetRef.current.x = 0;
    targetRef.current.y = 0;
  }, []);

  // Mouse wheel scroll inside container
  const handleWheel = useCallback((e) => {
    targetRef.current.y = Math.max(
      -65,
      Math.min(65, targetRef.current.y - e.deltaY * 0.4)
    );
  }, []);

  const primaryButton = featuresData.buttons?.[0] || {
    label: "Start Building",
    href: "#",
  };

  const performanceCard = featuresData.performanceCard || {
    title: "Performance Driven",
    description:
      "Consistent patterns support rapid iteration while maintaining visual and functional coherence.",
    button: { label: "Let's Begin", href: "#" },
  };

  return (
    <section
      id={featuresData.id}
      className="py-20 sm:py-28 lg:py-32 bg-white border-t border-zinc-100 scroll-mt-24"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="max-w-xl">
            {/* Top Chart Trend Icon Badge */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#edf2ee] flex items-center justify-center mb-6 sm:mb-8 shadow-xs">
              <ChartIcon className="w-5 h-5 text-[#1b4332]" />
            </div>

            {/* Main Headline */}
            <h2 className="font-heading font-bold text-[#1b4332] text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] leading-[1.12] tracking-tight mb-6 max-w-[480px]">
              {featuresData.heading}
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-[#55635c] text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] mb-8 sm:mb-9 max-w-[480px]">
              {featuresData.description}
            </p>

            {/* Action Button: Start Building */}
            <div className="flex items-center">
              <Link
                href={primaryButton.href}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-sm sm:text-[15px] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer select-none"
              >
                <SlidersIcon className="w-4 h-4 text-white shrink-0" />
                <span>{primaryButton.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Card Showcase & Performance Card */}
          <div className="flex flex-col gap-6">
            {/* Top Interactive Container with Generous Space and Smooth Scroll */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onWheel={handleWheel}
              className="relative w-full h-[480px] sm:h-[520px] lg:h-[550px] rounded-[32px] bg-[#edf2ee] p-6 sm:p-8 lg:p-10 overflow-hidden flex items-center justify-center select-none cursor-pointer transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Single Card: ZOOMS on hover and SCROLLS inside the container on cursor move */}
              <div
                style={{
                  transform: `translate3d(${scrollPos.x}px, ${scrollPos.y}px, 0px) scale(${isHovered ? 1.08 : 1})`,
                  transition: isHovered
                    ? "box-shadow 0.3s ease"
                    : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
                  willChange: "transform",
                }}
                className={`relative z-10 w-full rounded-2xl overflow-hidden bg-white border border-black/[0.04] ${
                  isHovered
                    ? "shadow-[0_24px_55px_rgba(0,0,0,0.12)]"
                    : "shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
                }`}
              >
                <Image
                  src={featuresData.image.src}
                  alt={featuresData.image.alt}
                  width={1090}
                  height={878}
                  className="w-full h-auto object-cover block pointer-events-none"
                  priority
                />
              </div>
            </div>

            {/* Bottom Performance Driven Card */}
            <div className="rounded-[24px] bg-white border border-[#e5ebe7] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-md hover:border-[#d5dfd8]">
              <div className="flex items-start sm:items-center gap-4">
                {/* Pie Chart Icon Badge */}
                <div className="w-12 h-12 rounded-[16px] bg-[#edf2ee] flex items-center justify-center shrink-0">
                  <PieChartIcon className="w-6 h-6 text-[#1b4332]" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#1b4332] text-lg sm:text-[19px] leading-tight mb-1">
                    {performanceCard.title}
                  </h3>
                  <p className="text-[#55635c] text-xs sm:text-sm leading-relaxed max-w-[430px]">
                    {performanceCard.description}
                  </p>
                </div>
              </div>

              <Link
                href={performanceCard.button?.href || "#"}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#edf2ee] hover:bg-[#e2ebe3] text-[#1b4332] text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 self-end sm:self-center group/btn"
              >
                <span>{performanceCard.button?.label || "Let's Begin"}</span>
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

