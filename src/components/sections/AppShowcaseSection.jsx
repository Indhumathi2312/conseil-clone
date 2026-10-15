"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import appShowcaseData from "@/data/appShowcaseData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function AppShowcaseSection() {
  const { screens, trustData } = appShowcaseData;
  const isMounted = useMounted();

  // Duplicate screens twice (12 items total) to ensure smooth infinite looping across all breakpoints
  const displayScreens = [...screens, ...screens];

  return (
    <section
      id={appShowcaseData.sectionId}
      className="relative pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-28 bg-white overflow-hidden select-none"
      aria-label="Mobile App Showcase"
    >
      <style jsx global>{`
        #pix_section_showcase .swiper-slide {
          transition: transform 600ms cubic-bezier(0.25, 1, 0.5, 1),
            opacity 600ms cubic-bezier(0.25, 1, 0.5, 1),
            box-shadow 600ms cubic-bezier(0.25, 1, 0.5, 1);
          transform: scale(0.86);
          opacity: 0.45;
          z-index: 1;
        }

        #pix_section_showcase .swiper-slide-prev,
        #pix_section_showcase .swiper-slide-next {
          transform: scale(0.93);
          opacity: 0.75;
          z-index: 5;
        }

        #pix_section_showcase .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 20;
          box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.18);
        }

        #pix_section_showcase .carousel-zoom-wrapper {
          transition: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
          transform-origin: center center;
          cursor: pointer !important;
        }

        #pix_section_showcase .carousel-zoom-wrapper:hover {
          transform: scale(0.92);
        }

        #pix_section_showcase .swiper,
        #pix_section_showcase .swiper-wrapper,
        #pix_section_showcase .swiper-slide,
        #pix_section_showcase .swiper-slide > div {
          cursor: pointer !important;
        }

        #pix_section_showcase .swiper:active,
        #pix_section_showcase .swiper-slide:active {
          cursor: grabbing !important;
        }

        #pix_section_showcase .showcase-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background-color: #d1d5db;
          transition: all 300ms ease;
          cursor: pointer;
        }

        #pix_section_showcase .showcase-bullet-active {
          width: 28px;
          background-color: #1b4332;
        }
      `}</style>

      {/* Carousel Viewport with edge fade mask */}
      <div className="relative w-full overflow-hidden cursor-pointer [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="carousel-zoom-wrapper w-full">
          {isMounted ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              centeredSlides={true}
              slidesPerView="auto"
              spaceBetween={20}
              speed={650}
              grabCursor={true}
              autoplay={{
                delay: 2400,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                el: ".showcase-pagination",
                clickable: true,
                bulletClass: "showcase-bullet",
                bulletActiveClass: "showcase-bullet-active",
              }}
              navigation={{
                prevEl: ".showcase-prev-btn",
                nextEl: ".showcase-next-btn",
              }}
              breakpoints={{
                640: {
                  spaceBetween: 24,
                },
                1024: {
                  spaceBetween: 28,
                },
              }}
              className="w-full !py-6"
            >
              {displayScreens.map((screen, idx) => (
                <SwiperSlide
                  key={`${screen.id}-${idx}`}
                  className="!w-[230px] sm:!w-[265px] lg:!w-[295px] shrink-0"
                >
                  <div
                    className="w-full rounded-[28px] sm:rounded-[34px] overflow-hidden bg-white border border-black/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 hover:scale-[0.97] hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
                    style={{
                      aspectRatio: "375 / 760",
                    }}
                  >
                    <div className="relative w-full h-full bg-zinc-50 overflow-hidden">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        fill
                        sizes="(max-width: 640px) 230px, (max-width: 1024px) 265px, 295px"
                        priority={idx === 0 || idx === 1}
                        className="w-full h-full object-cover object-top block pointer-events-none select-none"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* SSR Fallback Static Layout */
            <div className="flex items-center justify-center gap-6 py-6 overflow-hidden">
              {screens.slice(0, 5).map((screen, idx) => (
                <div
                  key={`ssr-${screen.id}`}
                  className={`w-[230px] sm:w-[265px] lg:w-[295px] shrink-0 rounded-[28px] sm:rounded-[34px] overflow-hidden bg-white border border-black/[0.06] ${
                    idx === 2
                      ? "scale-100 opacity-100 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.18)]"
                      : idx === 1 || idx === 3
                      ? "scale-[0.93] opacity-75 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                      : "scale-[0.86] opacity-45 shadow-none"
                  }`}
                  style={{
                    aspectRatio: "375 / 760",
                  }}
                >
                  <div className="relative w-full h-full bg-zinc-50 overflow-hidden">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      sizes="(max-width: 640px) 230px, (max-width: 1024px) 265px, 295px"
                      priority={idx === 2}
                      className="w-full h-full object-cover object-top block"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Left Navigation Button */}
        <button
          type="button"
          aria-label="Previous screen"
          className="showcase-prev-btn flex absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#1b4332] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Floating Right Navigation Button */}
        <button
          type="button"
          aria-label="Next screen"
          className="showcase-next-btn flex absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#1b4332] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="showcase-pagination flex items-center justify-center gap-2 mt-8 sm:mt-10" />

      {/* Trust Badges & Ratings (Centered under carousel) */}
      <div className="mt-12 sm:mt-16 md:mt-20 px-4 max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="font-heading font-semibold text-[#1b4332] text-[15px] sm:text-[16px] tracking-tight mb-5 sm:mb-6">
          {trustData.heading}
        </p>

        {/* 3 Review Badges in Centered Row */}
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-5">
          {/* Card 1: TripAdvisor */}
          <div className="flex items-center gap-3.5 px-6 py-4 rounded-[18px] bg-white border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all min-w-[195px] text-left">
            <div className="shrink-0 text-[#1b4332]">
              <svg className="w-7 h-7" viewBox="2 2 20 20" fill="currentColor">
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#1b4332"
                    fillOpacity=".25"
                    d="M8.24670555,7.91463105 C10.6486636,6.90168489 13.3507604,6.90168489 15.7527184,7.91463105 C13.6183481,8.74156289 12.000144,10.6744723 12.000144,12.9269576 C12.000144,10.6741807 10.3813639,8.7412713 8.24670555,7.91463105 Z"
                  />
                  <path
                    fill="#1b4332"
                    d="M22,7.48629436 L18.375315,7.48629436 C14.5311707,4.83790188 9.47833457,4.83790188 5.63419025,7.48629436 L2,7.48629436 L3.63519839,9.28711629 C2.31817115,10.5093967 1.74605409,12.3505316 2.13467804,14.1159539 C2.52330199,15.8813763 3.81352116,17.3024013 5.51860108,17.8429481 C7.223681,18.3834949 9.08412062,17.9612962 10.3980701,16.7356261 L12.000144,18.5 L13.6010657,16.7367924 C14.5236515,17.6043008 15.7367108,18.0856602 16.9958954,18.0839098 C19.7555988,18.0839098 21.9948153,15.819178 21.9948153,13.025513 C21.9965402,11.6024517 21.404584,10.2448144 20.3648016,9.28711629 L22,7.48629436 Z M3.62050839,13.025513 C3.62050839,11.1349348 5.13449328,9.60231845 7.00208828,9.60231845 C8.86968329,9.60231845 10.3836682,11.1349348 10.3836682,13.025513 C10.3836682,14.9160911 8.86968329,16.4487075 7.00208828,16.4487075 C5.13449328,16.4487075 3.62050839,14.9160911 3.62050839,13.025513 Z M8.24670555,7.91463105 C10.6486636,6.90168489 13.3507604,6.90168489 15.7527184,7.91463105 C13.6183481,8.74156289 12.000144,10.6744723 12.000144,12.9269576 C12.000144,10.6741807 10.3813639,8.7412713 8.24670555,7.91463105 Z M13.6143155,13.025513 C13.6143155,11.1349348 15.1283004,9.60231845 16.9958954,9.60231845 C18.8634904,9.60231845 20.3774753,11.1349348 20.3774753,13.025513 C20.3774753,14.9160911 18.8634904,16.4487075 16.9958954,16.4487075 C15.1283004,16.4487075 13.6143155,14.9160911 13.6143155,13.025513 Z M15.3579393,12.3390705 C15.0835479,13.0097392 15.2352809,13.781694 15.7423811,14.2949513 C16.2494812,14.8082085 17.0120762,14.9616834 17.6745473,14.6838062 C18.3370183,14.4059291 18.7688931,13.7514274 18.7687766,13.025513 C18.7687766,12.5495561 18.5819822,12.0930975 18.2494942,11.7565725 C17.9170062,11.4200475 17.4660663,11.2310286 16.9958954,11.2311059 C16.2788058,11.2311059 15.6323308,11.6684018 15.3579393,12.3390705 Z M7.68074012,14.6838062 C7.01826908,14.9616834 6.25567407,14.8082085 5.7485739,14.2949513 C5.24147373,13.781694 5.08974075,13.0097392 5.36413217,12.3390705 C5.6385236,11.6684018 6.2849986,11.2311059 7.00208828,11.2311059 C7.98111101,11.2311059 8.77481033,12.0344422 8.77496944,13.025513 C8.7750859,13.7514274 8.34321116,14.4059291 7.68074012,14.6838062 Z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-[#1b4332] font-heading font-bold text-[18px] sm:text-[19px] leading-tight">
                4.7
              </div>
              <div className="text-[#55635c] text-[13px] sm:text-[14px] font-medium leading-tight mt-0.5">
                on Tripadvisor
              </div>
            </div>
          </div>

          {/* Card 2: Reviews */}
          <div className="flex items-center gap-3.5 px-6 py-4 rounded-[18px] bg-white border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all min-w-[195px] text-left">
            <div className="shrink-0 text-[#1b4332]">
              <svg className="w-7 h-7" viewBox="2 2 20 20">
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#1b4332"
                    fillOpacity=".25"
                    d="M6.09475842,12.3251027 L5.24,14.146 L3.34896627,14.4352335 L3.23730777,14.4584991 C2.51511382,14.6507245 2.24290004,15.567277 2.78424449,16.122113 L4.182,17.554 L3.8499252,19.5890088 L3.83802332,19.6952254 C3.79131343,20.4645293 4.62186699,21.0114735 5.32067095,20.6251842 L7,19.696 L8.67932905,20.6251842 L8.77534237,20.6721422 C9.48403883,20.9750609 10.2786207,20.3770585 10.1500748,19.5890088 L9.817,17.554 L11.2157555,16.122113 L11.2909009,16.0363105 C11.7517985,15.4480179 11.4173168,14.5523111 10.6510337,14.4352335 L8.759,14.146 L7.90524158,12.3251027 C7.54532354,11.5582991 6.45467646,11.5582991 6.09475842,12.3251027 Z M16.0947584,12.3251027 L15.24,14.146 L13.3489663,14.4352335 L13.2373078,14.4584991 C12.5151138,14.6507245 12.2429,15.567277 12.7842445,16.122113 L14.182,17.554 L13.8499252,19.5890088 L13.8380233,19.6952254 C13.7913134,20.4645293 14.621867,21.0114735 15.3206709,20.6251842 L17,19.696 L18.6793291,20.6251842 L18.7753424,20.6721422 C19.4840388,20.9750609 20.2786207,20.3770585 20.1500748,19.5890088 L19.817,17.554 L21.2157555,16.122113 L21.2909009,16.0363105 C21.7517985,15.4480179 21.4173168,14.5523111 20.6510337,14.4352335 L18.759,14.146 L17.9052416,12.3251027 C17.5453235,11.5582991 16.4546765,11.5582991 16.0947584,12.3251027 Z"
                  />
                  <path
                    fill="#1b4332"
                    d="M11.0947584,3.82510273 L10.24,5.646 L8.34896627,5.93523347 L8.23730777,5.95849908 C7.51511382,6.15072452 7.24290004,7.067277 7.78424449,7.62211303 L9.182,9.054 L8.8499252,11.0890088 L8.83802332,11.1952254 C8.79131343,11.9645293 9.62186699,12.5114735 10.3206709,12.1251842 L12,11.196 L13.6793291,12.1251842 L13.7753424,12.1721422 C14.4840388,12.4750609 15.2786207,11.8770585 15.1500748,11.0890088 L14.817,9.054 L16.2157555,7.62211303 L16.2909009,7.53631051 C16.7517985,6.94801794 16.4173168,6.0523111 15.6510337,5.93523347 L13.759,5.646 L12.9052416,3.82510273 C12.5453235,3.05829909 11.4546765,3.05829909 11.0947584,3.82510273 Z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-[#1b4332] font-heading font-bold text-[18px] sm:text-[19px] leading-tight">
                4.8
              </div>
              <div className="text-[#55635c] text-[13px] sm:text-[14px] font-medium leading-tight mt-0.5">
                on Reviews
              </div>
            </div>
          </div>

          {/* Card 3: Google */}
          <div className="flex items-center gap-3.5 px-6 py-4 rounded-[18px] bg-white border border-zinc-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all min-w-[195px] text-left">
            <div className="shrink-0 text-[#1b4332]">
              <svg className="w-7 h-7" viewBox="2 2 20 20">
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#1b4332"
                    fillOpacity=".25"
                    d="M21.7674419,10.1818182 L12.2325581,10.1818182 L12.2325581,14.0454545 L17.7209302,14.0454545 C17.2093023,16.5 15.0697674,17.9090909 12.2325581,17.9090909 C8.88372093,17.9090909 6.18604651,15.2727273 6.18604651,12 C6.18604651,8.72727273 8.88372093,6.09090909 12.2325581,6.09090909 C13.6744186,6.09090909 14.9767442,6.59090909 16,7.40909091 L18.9767442,4.5 C17.1627907,2.95454545 14.8372093,2 12.2325581,2 C6.55813953,2 2,6.45454545 2,12 C2,17.5454545 6.55813953,22 12.2325581,22 C17.3488372,22 22,18.3636364 22,12 C22,11.4090909 21.9069767,10.7727273 21.7674419,10.1818182 Z"
                  />
                  <path
                    fill="#1b4332"
                    d="M21.7674419,10.1818182 L12.2325581,10.1818182 L12.2325581,14.0454545 L17.7209302,14.0454545 C17.4138048,15.5188953 16.5200648,16.6156077 15.2409328,17.256932 C17.1736901,20.7479295 15.2409328,17.256932 17.1736901,20.7479295 C19.9968554,19.1778181 22,16.1761946 22,12 C22,11.4090909 21.9069767,10.7727273 21.7674419,10.1818182 Z M7.18243656,15.2584245 C6.55230257,14.3253813 6.18604651,13.2058893 6.18604651,12 C6.18604651,10.8187525 6.53748693,9.72040748 7.14413844,8.79900724 C4.03887397,5.99037403 7.14413844,8.79900724 4.03887397,5.99037403 C2.75732311,7.66046579 2,9.73960703 2,12 C2,14.2334933 2.73940538,16.2900231 3.99334395,17.949828 C7.18243656,15.2584245 3.99334395,17.949828 7.18243656,15.2584245 Z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div className="text-[#1b4332] font-heading font-bold text-[18px] sm:text-[19px] leading-tight">
                4.6
              </div>
              <div className="text-[#55635c] text-[13px] sm:text-[14px] font-medium leading-tight mt-0.5">
                on Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
