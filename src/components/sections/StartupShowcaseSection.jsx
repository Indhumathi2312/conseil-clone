"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import startupTimeData from "@/data/startupTimeData";
import Container from "../layout/Container";

import "swiper/css";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Top Section Stopwatch / Timer Icon
function TimerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M12 9v4l2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19.5 5.5l-1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 1. Robust Features Icon (Sparkle / Cube / Shield)
function RobustIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M12 4.5L13.7 10.3L19.5 12L13.7 13.7L12 19.5L10.3 13.7L4.5 12L10.3 10.3L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 2. Communication Icon (Chat Message with Signal)
function CommunicationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z"
        fill="currentColor"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="12.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}

// 3. Fast Speed Page Builder Icon (Lightning / Speed Layers)
function BuilderIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="currentColor"
        opacity="0.22"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Schedule a Call Phone / Calendar Icon
function PhoneCallIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function StartupShowcaseSection() {
  const { heading, features, slides, button, id } = startupTimeData;
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const isMounted = useMounted();

  // Quadruple slides to ensure unbroken infinite looping with partial next slide visibly peeking at all times
  const displaySlides = [...slides, ...slides, ...slides, ...slides];

  const handleSelectSlide = (idx) => {
    setActiveIndex(idx);
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(idx, 600);
    }
  };

  const renderFeatureIcon = (type, className) => {
    switch (type) {
      case "robust":
        return <RobustIcon className={className} />;
      case "communication":
        return <CommunicationIcon className={className} />;
      case "builder":
        return <BuilderIcon className={className} />;
      default:
        return <RobustIcon className={className} />;
    }
  };

  return (
    <section
      id={id || "startup-showcase"}
      className="py-12 sm:py-14 lg:py-16 bg-white border-t border-zinc-100 overflow-hidden select-none"
    >
      <Container className="!max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column — Content */}
          <div className="lg:col-span-4 max-w-lg">
            {/* Top Rounded-Square Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-[#edf2ee] flex items-center justify-center mb-4 sm:mb-5 shadow-xs text-[#1b4332]">
              <TimerIcon className="w-5 h-5" />
            </div>

            {/* Main Heading */}
            <h2 className="font-heading font-bold text-[#1b4332] text-2xl sm:text-3xl md:text-[38px] lg:text-[40px] leading-[1.12] tracking-tight mb-5 sm:mb-6 max-w-[420px]">
              Maximize Your
              <br className="hidden sm:inline" /> Startup Time
            </h2>

            {/* 3 Compact Feature Items */}
            <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7 max-w-[400px]">
              {features.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectSlide(idx)}
                    className={`w-full flex items-center gap-3 sm:gap-3.5 px-3.5 py-2.5 rounded-lg transition-all duration-200 text-left cursor-pointer group ${
                      isActive
                        ? "bg-[#edf2ee] shadow-2xs border border-[#1b4332]/10"
                        : "hover:bg-[#f6f8f6] border border-transparent"
                    }`}
                  >
                    {/* Small Icon Badge */}
                    <div
                      className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-[8px] flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isActive
                          ? "bg-[#1b4332] text-white shadow-2xs"
                          : "bg-[#e4ece5] text-[#1b4332] group-hover:bg-[#d5e2d7]"
                      }`}
                    >
                      {renderFeatureIcon(item.icon, "w-4 h-4")}
                    </div>

                    {/* Feature Title */}
                    <div className="flex-1">
                      <span
                        className={`font-heading font-bold text-sm sm:text-[15px] tracking-tight leading-snug transition-colors ${
                          isActive
                            ? "text-[#1b4332]"
                            : "text-[#2d3f34] group-hover:text-[#1b4332]"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA Button: Schedule a Call */}
            <div className="flex items-center">
              <Link
                href={button.href || "#schedule"}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-7 hover:px-8 py-3 rounded-[10px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md cursor-pointer select-none group"
              >
                <PhoneCallIcon className="w-4 h-4 text-white shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>{button.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Large Rectangular Image Carousel (Wider Width, Sharp Corners) */}
          <div className="lg:col-span-8 w-full overflow-hidden">
            {isMounted ? (
              <Swiper
                modules={[Autoplay]}
                loop={true}
                slidesPerView={1.12}
                spaceBetween={18}
                speed={600}
                grabCursor={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex % slides.length);
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.15,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1.18,
                    spaceBetween: 22,
                  },
                }}
                className="w-full !overflow-hidden p-0.5 rounded-[12px] sm:rounded-[14px]"
              >
                {displaySlides.map((slide, idx) => (
                  <SwiperSlide key={`${slide.id}-${idx}`}>
                    {({ isActive }) => (
                      <div
                        onClick={() => {
                          if (!isActive) {
                            swiperRef.current?.slideNext();
                          }
                        }}
                        className={`relative w-full aspect-[16/10] min-h-[300px] sm:min-h-[370px] md:min-h-[410px] lg:min-h-[450px] rounded-[10px] sm:rounded-[12px] overflow-hidden border border-black/[0.06] cursor-pointer transition-all duration-500 ${
                          isActive
                            ? "opacity-100 scale-100 shadow-[0_14px_32px_rgba(27,67,50,0.09)] ring-1 ring-black/[0.02]"
                            : "opacity-65 scale-[0.98] hover:opacity-90 shadow-sm"
                        }`}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.alt || slide.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 950px"
                          priority={idx === 0}
                          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-102"
                        />

                        {/* Subtle bottom gradient for depth and contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              /* SSR Fallback */
              <div className="flex gap-4 sm:gap-5 overflow-hidden rounded-[10px] sm:rounded-[12px]">
                <div className="w-[85%] shrink-0 relative aspect-[16/10] min-h-[300px] sm:min-h-[370px] md:min-h-[410px] lg:min-h-[450px] rounded-[10px] sm:rounded-[12px] overflow-hidden">
                  <Image
                    src={slides[0].image}
                    alt={slides[0].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="w-[85%] shrink-0 relative aspect-[16/10] min-h-[300px] sm:min-h-[370px] md:min-h-[410px] lg:min-h-[450px] rounded-[10px] sm:rounded-[12px] overflow-hidden opacity-65">
                  <Image
                    src={slides[1].image}
                    alt={slides[1].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Carousel Pagination Indicators (3 Dots) */}
            <div className="flex items-center pt-3 sm:pt-3.5 px-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {slides.map((slide, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => handleSelectSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "w-6 sm:w-7 bg-[#1b4332]"
                          : "w-1.5 sm:w-2 bg-[#d8deda] hover:bg-[#b0beb3]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
