"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ctaData from "@/data/ctaData";
import Container from "../layout/Container";

export default function CtaSection() {
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);

  // Target values (scroll + cursor + wheel)
  const targetRef = useRef({
    scrollY: 0,
    scrollRotate: 0,
    cursorX: 0,
    cursorY: 0,
    cursorRotate: 0,
    wheelY: 0,
    scale: 1,
  });

  // Current interpolated values (smooth 60/120fps)
  const currentRef = useRef({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
  });

  const [transformStyle, setTransformStyle] = useState({
    transform: "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)",
  });

  useEffect(() => {
    // 1. Scroll listener to calculate section scroll progress
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Progress: 0 when bottom enters screen, 1 when top leaves screen
      const totalDist = windowH + rect.height;
      const currentDist = windowH - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));

      // As user scrolls DOWN:
      // Phone starts shifted downwards (+75px) and glides upwards (-75px) with dynamic tilt
      // Travel range: 150px vertical travel for prominent, obvious motion
      targetRef.current.scrollY = (0.5 - progress) * 150;
      targetRef.current.scrollRotate = (progress - 0.5) * 6; // -3deg to +3deg
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculate

    // 2. High-performance Animation Loop (smooth spring-lerp)
    const animate = () => {
      // Decay mouse wheel delta smoothly
      targetRef.current.wheelY *= 0.88;

      const totalTargetX = targetRef.current.cursorX;
      const totalTargetY =
        targetRef.current.scrollY +
        targetRef.current.cursorY +
        targetRef.current.wheelY;
      const totalTargetRotate =
        targetRef.current.scrollRotate + targetRef.current.cursorRotate;
      const totalTargetScale = targetRef.current.scale;

      // Lerp with 0.12 factor for immediate, responsive motion
      currentRef.current.x += (totalTargetX - currentRef.current.x) * 0.12;
      currentRef.current.y += (totalTargetY - currentRef.current.y) * 0.12;
      currentRef.current.rotate +=
        (totalTargetRotate - currentRef.current.rotate) * 0.12;
      currentRef.current.scale +=
        (totalTargetScale - currentRef.current.scale) * 0.12;

      setTransformStyle({
        transform: `translate3d(${currentRef.current.x.toFixed(2)}px, ${currentRef.current.y.toFixed(2)}px, 0px) rotate(${currentRef.current.rotate.toFixed(2)}deg) scale(${currentRef.current.scale.toFixed(3)})`,
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // 3. Cursor Move Listener over the CTA card
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const relY = (e.clientY - rect.top) / rect.height; // 0 to 1

    // 3D perspective response to cursor
    targetRef.current.cursorX = (relX - 0.5) * 20; // ±10px
    targetRef.current.cursorY = (relY - 0.5) * 16; // ±8px
    targetRef.current.cursorRotate = (relX - 0.5) * 3; // ±1.5deg
  };

  const handleMouseEnter = () => {
    targetRef.current.scale = 1.02;
  };

  const handleMouseLeave = () => {
    targetRef.current.cursorX = 0;
    targetRef.current.cursorY = 0;
    targetRef.current.cursorRotate = 0;
    targetRef.current.scale = 1;
  };

  // 4. Mouse wheel support over the card
  const handleWheel = (e) => {
    targetRef.current.wheelY += e.deltaY * 0.16;
    targetRef.current.wheelY = Math.max(
      -60,
      Math.min(60, targetRef.current.wheelY)
    );
  };

  return (
    <section
      id={ctaData.id}
      className="pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 md:pb-44 lg:pb-52 bg-white overflow-hidden scroll-mt-24 select-none"
    >
      <Container className="!max-w-[1240px]">
        {/* Main Banner Card */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
          className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden bg-[#165B6A] shadow-[0_20px_50px_rgba(22,91,106,0.22)] min-h-[440px] sm:aspect-[901/436] flex items-center group transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(22,91,106,0.32)]"
        >
          {/* Layer 1: Base Teal Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={ctaData.backgroundImage}
              alt="Teal Background"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1240px"
            />
          </div>

          {/* Layer 2: Transparent Cutout Girls Image - 100% Clear & Prominently Displayed */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Image
              src={ctaData.girlsImage}
              alt="Two women smiling with smartphones"
              fill
              priority
              className="object-cover object-[62%_bottom] sm:object-[60%_bottom] md:object-[62%_bottom] opacity-100 drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] scale-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              sizes="(max-width: 1280px) 100vw, 1240px"
            />
          </div>

          {/* Layer 3: Soft Edge Gradient strictly behind text column, keeping girls 100% clear */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #165B6A 0%, #165B6A 26%, rgba(22, 91, 106, 0.8) 34%, rgba(22, 91, 106, 0.15) 42%, transparent 48%)",
            }}
          />

          {/* Layer 4: Mobile bottom subtle gradient for optimal text contrast on small screens */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#165B6A]/85 via-transparent to-transparent md:hidden"
          />

          {/* Left Content Column */}
          <div className="relative z-10 w-full sm:w-[54%] md:w-[50%] lg:w-[46%] xl:w-[44%] max-w-[520px] px-6 py-8 sm:px-10 sm:py-10 md:px-13 md:py-12 lg:px-16 lg:py-14 text-left flex flex-col justify-center">
            {/* Heading */}
            <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.12] tracking-tight">
              Take Control with an
              <span className="block mt-0.5 sm:mt-1">
                Interface That Just Works
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-3.5 md:mt-4 text-white/80 text-[13.5px] sm:text-[14.5px] md:text-[15.5px] lg:text-[16.5px] leading-[1.58] max-w-[500px] font-normal">
              {ctaData.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
              {/* App Store Button */}
              <Link
                href={ctaData.buttons[0].href}
                className="group/btn inline-flex items-center gap-2.5 px-4.5 py-2.5 sm:px-5 sm:py-3 md:px-5.5 md:py-3.5 bg-black text-white rounded-full font-heading font-semibold text-[12.5px] sm:text-[13px] md:text-[14px] shadow-md transition-all duration-300 hover:bg-black/85 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] cursor-pointer"
              >
                {/* Apple Logo SVG */}
                <svg
                  className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5"
                  viewBox="2 2 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.4849126,8.81771657 C18.3302111,7.0992429 16.5316504,6.86372702 15.8913288,6.8363582 C14.3616324,6.67790715 12.9055199,7.7532136 12.1293511,7.7532136 C11.3553049,7.7532136 10.1560285,6.85940563 8.88741352,6.88173282 C7.21903972,6.90694094 5.68085285,7.86989119 4.82260967,9.39030104 C3.08984994,12.450567 4.37898355,16.985148 6.06787595,19.4685081 C6.8935724,20.6820991 7.87775728,22.0483793 9.16901351,21.9986833 C10.4135723,21.9489873 10.8833773,21.1790592 12.3883099,21.1790592 C13.8932425,21.1790592 14.3156424,21.9986833 15.63237,21.9727549 C16.9710313,21.948267 17.8193689,20.7353963 18.6386975,19.5167636 C19.5860905,18.1065493 19.9766513,16.7409893 20,16.671847 C19.970991,16.6581626 17.3906011,15.6519985 17.3637147,12.6270239 C17.3389509,10.0939678 19.3936402,8.87893629 19.4849126,8.81771657 Z M14.8894555,5.1935089 C15.5743519,4.34723624 16.0384966,3.17109731 15.9125549,2 C14.9241248,2.04033299 13.7276786,2.66909557 13.0180184,3.514648 C12.381942,4.26512979 11.826525,5.45999476 11.9751079,6.60948511 C13.0774515,6.69663318 14.2024364,6.03834109 14.8894555,5.1935089 Z"
                  />
                </svg>
                <span>{ctaData.buttons[0].label}</span>
              </Link>

              {/* Google Play Button */}
              <Link
                href={ctaData.buttons[1].href}
                className="group/btn inline-flex items-center gap-2.5 px-4.5 py-2.5 sm:px-5 sm:py-3 md:px-5.5 md:py-3.5 bg-white text-[#165B6A] rounded-full font-heading font-semibold text-[12.5px] sm:text-[13px] md:text-[14px] shadow-md transition-all duration-300 hover:bg-white/95 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] cursor-pointer"
              >
                {/* Android Robot Logo SVG */}
                <svg
                  className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-[#165B6A] shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5"
                  viewBox="2 2 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.0476032,2.91442717 L15.2741547,2.57569467 L15.7840824,1.81577504 C15.8468888,1.7221779 15.8214671,1.59663888 15.7280053,1.53424079 C15.6330481,1.47184269 15.5066877,1.49709906 15.4438814,1.5906962 L14.4337459,3.09567878 C13.694276,2.81117319 12.8703165,2.65146378 11.9992523,2.65146378 C11.1296835,2.65146378 10.3049763,2.81117319 9.56550636,3.09567878 L9.33372103,2.74877509 L8.55611863,1.5906962 C8.49331229,1.49709906 8.3669519,1.47184269 8.27199468,1.53424079 C8.17853286,1.59663888 8.15311124,1.7221779 8.21516989,1.81577504 L9.18343441,3.25835952 C7.44653984,4.06136355 6.27191161,5.58343131 6.27191161,7.32612091 L17.726593,7.32612091 C17.726593,5.58417415 16.5519648,4.06210638 14.8150702,3.25910235 L15.0476032,2.91442717 Z M9.5460663,5.69931349 C9.20661294,5.69931349 8.93220902,5.42669325 8.93220902,5.08944641 C8.93220902,4.75219958 9.20661294,4.48032217 9.5460663,4.48032217 C9.88477195,4.48032217 10.1591759,4.75294241 10.1591759,5.08944641 C10.1591759,5.42595041 9.88477195,5.69931349 9.5460663,5.69931349 Z M14.4546814,5.69931349 C14.1159757,5.69931349 13.8415718,5.42669325 13.8415718,5.08944641 C13.8415718,4.75219958 14.1159757,4.48032217 14.4546814,4.48032217 C14.7941348,4.48032217 15.0685387,4.75294241 15.0685387,5.08944641 C15.0685387,5.42595041 14.7941348,5.69931349 14.4546814,5.69931349 Z M6.273407,8.13803895 L6.273407,17.0802799 C6.273407,17.7904297 6.85436571,18.367612 7.56841406,18.367612 L8.50378001,18.367612 C8.47237684,18.475323 8.45517986,18.5882338 8.45517986,18.7063445 L8.45517986,21.2810087 C8.45517986,21.9540167 9.0047354,22.5 9.68289441,22.5 C10.3610534,22.5 10.9098613,21.9540167 10.9098613,21.2810087 L10.9098613,18.7063445 C10.9098613,18.5897195 10.8919166,18.475323 10.8612611,18.367612 L13.1402343,18.367612 C13.1088311,18.475323 13.0916341,18.5882338 13.0916341,18.7063445 L13.0916341,21.2810087 C13.0916341,21.9540167 13.6411897,22.5 14.318601,22.5 C14.9960123,22.5 15.5455678,21.9540167 15.5455678,21.2810087 L15.5455678,18.7063445 C15.5455678,18.5897195 15.5283709,18.475323 15.4969677,18.367612 L16.4315859,18.367612 C17.146382,18.367612 17.7273407,17.7904297 17.7273407,17.0802799 L17.7273407,8.13803895 L6.36088726,8.13803895 L6.273407,8.13803895 Z M4.22696685,8.13803895 C3.54880784,8.13803895 3,8.68327943 3,9.3577731 L3,14.5732137 C3,15.2462217 3.54955554,15.792205 4.22696685,15.792205 C4.90437817,15.792205 5.4539337,15.2462217 5.4539337,14.5732137 L5.4539337,9.35703027 C5.4539337,8.68327943 4.90437817,8.13803895 4.22696685,8.13803895 Z M19.7737808,8.13803895 C19.0956218,8.13803895 18.546814,8.68327943 18.546814,9.3577731 L18.546814,14.5732137 C18.546814,15.2462217 19.0956218,15.792205 19.7737808,15.792205 C20.4511922,15.792205 21,15.2462217 21,14.5732137 L21,9.35703027 C21,8.68327943 20.4511922,8.13803895 19.7737808,8.13803895 Z"
                  />
                </svg>
                <span>{ctaData.buttons[1].label}</span>
              </Link>
            </div>
          </div>

          {/* Right Phone Mockup - Scaled Down Elegantly & Moves on Scroll */}
          <div
            className="absolute right-2 sm:right-5 md:right-8 lg:right-12 xl:right-16 bottom-[-30px] sm:bottom-[-40px] md:bottom-[-50px] lg:bottom-[-60px] xl:bottom-[-70px] w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[330px] pointer-events-none z-20 will-change-transform"
            style={transformStyle}
          >
            <div className="relative w-full aspect-[816/1550] drop-shadow-[0_20px_30px_rgba(0,0,0,0.32)]">
              <Image
                src={ctaData.phoneImage}
                alt="Smartphone Interface Preview"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, 330px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
