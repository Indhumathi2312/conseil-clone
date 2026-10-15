"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import pricingData from "@/data/pricingData";
import Container from "../layout/Container";

// Animated Rolling Number Counter for Premium Plan Price ($159)
function RollingPrice() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Automatically trigger on page load / refresh
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 200);

    // Also trigger when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Rolling sequences ending with target digits 1, 5, 9
  const digit1Seq = [0, 4, 8, 2, 7, 3, 9, 5, 0, 1];
  const digit5Seq = [0, 2, 6, 9, 1, 4, 8, 3, 7, 0, 5];
  const digit9Seq = [0, 3, 7, 1, 6, 2, 8, 4, 0, 5, 9];

  // Optional hover re-trigger for interactive play
  const handleReplay = () => {
    setHasAnimated(false);
    setTimeout(() => setHasAnimated(true), 40);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleReplay}
      aria-label="$159"
      className="inline-flex items-baseline font-extrabold text-[54px] sm:text-[62px] text-[#183d2c] tracking-tight leading-none select-none cursor-default"
      title="Click or hover to replay number scroll"
    >
      <span className="mr-0.5">$</span>

      {/* Digit 1 */}
      <span className="inline-flex overflow-hidden h-[1.1em] leading-none align-baseline">
        <span
          className="flex flex-col will-change-transform"
          style={{
            transform: hasAnimated
              ? `translateY(-${((digit1Seq.length - 1) / digit1Seq.length) * 100}%)`
              : "translateY(0%)",
            transition: "transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0ms",
          }}
        >
          {digit1Seq.map((num, idx) => (
            <span
              key={idx}
              className="h-[1.1em] flex items-center justify-center leading-none"
            >
              {num}
            </span>
          ))}
        </span>
      </span>

      {/* Digit 5 */}
      <span className="inline-flex overflow-hidden h-[1.1em] leading-none align-baseline">
        <span
          className="flex flex-col will-change-transform"
          style={{
            transform: hasAnimated
              ? `translateY(-${((digit5Seq.length - 1) / digit5Seq.length) * 100}%)`
              : "translateY(0%)",
            transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "100ms",
          }}
        >
          {digit5Seq.map((num, idx) => (
            <span
              key={idx}
              className="h-[1.1em] flex items-center justify-center leading-none"
            >
              {num}
            </span>
          ))}
        </span>
      </span>

      {/* Digit 9 */}
      <span className="inline-flex overflow-hidden h-[1.1em] leading-none align-baseline">
        <span
          className="flex flex-col will-change-transform"
          style={{
            transform: hasAnimated
              ? `translateY(-${((digit9Seq.length - 1) / digit9Seq.length) * 100}%)`
              : "translateY(0%)",
            transition: "transform 1.7s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "200ms",
          }}
        >
          {digit9Seq.map((num, idx) => (
            <span
              key={idx}
              className="h-[1.1em] flex items-center justify-center leading-none"
            >
              {num}
            </span>
          ))}
        </span>
      </span>
    </div>
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

export default function PricingSection() {
  const basicPlan = pricingData.plans.find((p) => p.id === "basic") || pricingData.plans[0];
  const premiumPlan = pricingData.plans.find((p) => p.id === "premium") || pricingData.plans[1];

  return (
    <section id={pricingData.id} className="py-20 sm:py-28 bg-white scroll-mt-24">
      <Container>
        {/* Top Floating Badge with Overlapping Coins Icon */}
        <div className="w-12 h-12 rounded-[14px] bg-[#edf2ee] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            {/* Back coin */}
            <circle cx="16" cy="11" r="6.5" fill="#cdd8d1" />
            {/* Front dark green coin */}
            <circle cx="11" cy="16" r="7.5" fill="#183d2c" />
            <text
              x="11"
              y="19.8"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              $
            </text>
          </svg>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#183d2c] tracking-tight leading-[1.2] mb-3.5">
            Stay in Control with
            <br className="hidden sm:inline" /> Seamless Access
          </h2>
          <p className="text-zinc-500 text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto">
            {pricingData.subtitle}
          </p>
        </div>

        {/* 3 Perks Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-14">
          {/* Badge 1: 7 Days free trial */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[12px] bg-[#edf2ee] text-[#183d2c] text-xs sm:text-[13px] font-semibold">
            <svg className="w-4 h-4 text-[#183d2c] shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>7 Days free trial</span>
          </div>

          {/* Badge 2: No credit card */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[12px] bg-[#edf2ee] text-[#183d2c] text-xs sm:text-[13px] font-semibold">
            <svg className="w-4 h-4 text-[#183d2c] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>No credit card</span>
          </div>

          {/* Badge 3: Premium Support */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[12px] bg-[#edf2ee] text-[#183d2c] text-xs sm:text-[13px] font-semibold">
            <svg className="w-4 h-4 text-[#183d2c] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 16v-1a4.978 4.978 0 00-1.5-3.57A6.974 6.974 0 0118 13.5v2.5h-2z" />
            </svg>
            <span>Premium Support</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[960px] mx-auto items-stretch">
          {/* Card 1: Basic */}
          <div className="bg-[#edf2ee] rounded-[32px] p-3 sm:p-3.5 flex flex-col justify-between">
            {/* Outer Header */}
            <div className="px-3 pt-2 pb-3.5">
              <h3 className="text-[#183d2c] font-bold text-lg">{basicPlan.name}</h3>
            </div>

            {/* Inner White Card */}
            <div className="bg-white rounded-[24px] sm:rounded-[26px] p-7 sm:p-9 flex flex-col justify-between flex-1 shadow-xs">
              <div>
                {/* Price */}
                <div className="mt-1 mb-0.5">
                  <span className="text-[52px] sm:text-[58px] font-extrabold text-[#183d2c] tracking-tight leading-none">
                    {basicPlan.price}
                  </span>
                </div>
                <p className="text-[#183d2c] font-bold text-base mt-2">{basicPlan.period}</p>
                <p className="text-zinc-500 text-sm mt-1">{basicPlan.billingNote}</p>

                {/* CTA Button (Matching Smart Tools section button style & smooth X-axis hover expansion) */}
                <div className="mt-7 mb-8">
                  <Link
                    href={basicPlan.button.href}
                    className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 hover:px-7 sm:hover:px-8 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md cursor-pointer select-none group/btn w-fit"
                  >
                    <span>{basicPlan.button.label}</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-white shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-1">
                  {/* Feature 1: Limited Access to Features */}
                  <div className="flex items-center gap-3.5 text-[#183d2c]">
                    <span className="w-6 h-6 rounded-full bg-[#183d2c] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold text-[15px] sm:text-base text-[#183d2c]">
                      Limited Access to Features
                    </span>
                  </div>

                  {/* Feature 2: 1 User License */}
                  <div className="flex items-center gap-3.5 text-[#183d2c]">
                    <span className="w-6 h-6 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#183d2c]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold text-[15px] sm:text-base text-[#183d2c]">
                      1 User License
                    </span>
                  </div>

                  {/* Feature 3: New Robust Features */}
                  <div className="flex items-center gap-3.5 text-[#183d2c]">
                    <span className="w-6 h-6 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#183d2c]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold text-[15px] sm:text-base text-[#183d2c]">
                      New Robust Features
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Premium */}
          <div className="rounded-[32px] overflow-hidden relative flex flex-col justify-between p-3 sm:p-3.5 min-h-[520px] shadow-[0_16px_40px_rgba(24,61,44,0.12)] isolate">
            {/* Full Card Background Image */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src={premiumPlan.backgroundImage}
                alt="Premium Plan Background"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-[24%_top]"
                priority
              />
            </div>

            {/* Outer Header: Title & Recommended Badge */}
            <div className="px-3.5 pt-2.5 pb-3.5 flex items-center justify-between relative z-10">
              <h3 className="text-white font-bold text-xl sm:text-[22px] tracking-tight drop-shadow-sm">
                {premiumPlan.name}
              </h3>
              <span className="bg-[#b4f000] text-white font-bold text-xs sm:text-[13px] px-4 py-1.5 rounded-full shadow-xs">
                {premiumPlan.badge}
              </span>
            </div>

            {/* Inner White Card */}
            <div className="bg-white rounded-[24px] sm:rounded-[26px] p-7 sm:p-9 flex flex-col justify-between flex-1 relative z-10 shadow-xs">
              <div>
                {/* Price (Animated Rolling Number on Page Refresh & In-View) */}
                <div className="mt-1 mb-0.5">
                  <RollingPrice />
                </div>
                <p className="text-[#183d2c] font-bold text-[17px] mt-2 mb-1">{premiumPlan.period}</p>
                <p className="text-zinc-500 text-[15px] font-normal">{premiumPlan.billingNote}</p>

                {/* CTA Button (Matching Smart Tools section button style & smooth X-axis hover expansion) */}
                <div className="mt-7 mb-8">
                  <Link
                    href={premiumPlan.button.href}
                    className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 hover:px-7 sm:hover:px-8 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md cursor-pointer select-none group/btn w-fit"
                  >
                    <span>{premiumPlan.button.label}</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-white shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Features List */}
                <div className="space-y-5 sm:space-y-6 pt-1">
                  {/* Feature 1: Unlimited Access to Features (Lightning bolt in circle) */}
                  <div className="flex items-center gap-3.5 text-[#183d2c]">
                    <span className="w-6 h-6 rounded-full bg-[#183d2c] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="font-bold text-[16px] sm:text-[17px] text-[#183d2c]">
                      Unlimited Access to Features
                    </span>
                  </div>

                  {/* Feature 2: Up to 20 Users */}
                  <div className="flex items-center gap-3.5 text-[#183d2c]">
                    <span className="w-6 h-6 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#183d2c]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </span>
                    <span className="font-bold text-[16px] sm:text-[17px] text-[#183d2c]">
                      Up to 20 Users
                    </span>
                  </div>

                  {/* Feature 3: 24/7 Support (Cycle/Refresh arrows) */}
                  <div className="flex items-center gap-3.5 text-[#183d2c]">
                    <span className="w-6 h-6 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-[#183d2c]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </span>
                    <span className="font-bold text-[16px] sm:text-[17px] text-[#183d2c]">
                      24/7 Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secure Payment and Logos Footer Box */}
        <div className="bg-white rounded-[24px] border border-zinc-200/80 p-6 sm:p-7 max-w-[960px] mx-auto mt-10 sm:mt-12 flex flex-col items-center justify-center gap-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
          {/* Top text line with Secure payment badge */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] bg-[#dcfce7] text-[#166534] text-xs sm:text-[13px] font-semibold shrink-0">
              <svg className="w-3.5 h-3.5 text-[#166534]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{pricingData.paymentInfo.badge}</span>
            </span>
            <span className="text-zinc-500 text-xs sm:text-sm font-normal">
              {pricingData.paymentInfo.description}
            </span>
          </div>

          {/* Bottom row with 6 Payment Logos */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 pt-1">
            {pricingData.paymentInfo.methods.map((method) => (
              <div key={method.name} className="flex items-center justify-center">
                <Image
                  src={method.src}
                  alt={method.name}
                  width={method.width}
                  height={method.height}
                  className="h-5 sm:h-5.5 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
