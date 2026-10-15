import Image from "next/image";
import Link from "next/link";
import reviewsData from "@/data/reviewsData";
import Container from "../layout/Container";

// Top Header Sparkles Icon (Matching Reference Image)
function SparklesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 2L11.2 7.3L16.5 9L11.2 10.7L9.5 16L7.8 10.7L2.5 9L7.8 7.3L9.5 2Z" />
      <path
        d="M17.5 14L18.4 16.6L21 17.5L18.4 18.4L17.5 21L16.6 18.4L14 17.5L16.6 16.6L17.5 14Z"
        opacity="0.8"
      />
    </svg>
  );
}

// 5-Point Gold Star Icon
function StarFilledIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Circular Avatar with Verified Customer Badge (for light cards)
function VerifiedUserIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#1b4332" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="3" stroke="#1b4332" strokeWidth="1.8" />
      <path
        d="M6.5 18.5C7.5 15.5 9.5 14.5 12 14.5C14.5 14.5 16.5 15.5 17.5 18.5"
        stroke="#1b4332"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="16.5" r="3.5" fill="#1b4332" />
      <path
        d="M16 16.5L17.2 17.7L19.2 15.5"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Circular Avatar with Verified Customer Badge (for dark hero card)
function VerifiedUserHeroIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.8" />
      <path
        d="M6.5 18.5C7.5 15.5 9.5 14.5 12 14.5C14.5 14.5 16.5 15.5 17.5 18.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="16.5" r="3.5" fill="#ffffff" />
      <path
        d="M16 16.5L17.2 17.7L19.2 15.5"
        stroke="#1b4332"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Up-Right Arrow Icon for CTA button
function UpRightArrowIcon({ className }) {
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
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function ReviewsSection() {
  const {
    id,
    heading,
    subtitle,
    rating,
    featuredCard,
    leftCards,
    bottomCards,
    trustedBy,
    button,
  } = reviewsData;

  return (
    <section
      id={id || "pix_section_reviews"}
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-zinc-100 select-none overflow-hidden scroll-mt-24"
    >
      <Container className="!max-w-[1240px]">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          {/* Top Sparkles Icon Badge */}
          <div className="w-12 h-12 rounded-[14px] bg-[#edf2ee] flex items-center justify-center mx-auto mb-5 text-[#1b4332] shadow-2xs">
            <SparklesIcon className="w-6 h-6" />
          </div>

          {/* Heading */}
          <h2 className="font-heading font-bold text-[#1b4332] text-3xl sm:text-4xl md:text-[46px] leading-[1.18] tracking-tight text-center">
            {heading.split(" from ")[0]}
            <br className="hidden sm:inline" /> from {heading.split(" from ")[1]}
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-[#55695d] text-xs sm:text-sm text-center max-w-md mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Rating Summary Row */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#55695d]">
            <div className="flex items-center gap-1 text-amber-400">
              <StarFilledIcon className="w-3.5 h-3.5" />
              <StarFilledIcon className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-zinc-600 text-xs">
              {rating.text}
            </span>
          </div>
        </div>

        {/* Top Bento Row: 2 Small Cards (Left) + 1 Big Hero Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: 2 Vertically Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6 justify-between">
            {leftCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#f6f8f6] rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 md:p-8 flex-1 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(27,67,50,0.06)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="text-[#55695d] text-xs sm:text-[13.5px] leading-relaxed mb-6 font-normal">
                  {card.quote}
                </p>

                <div>
                  <div className="flex items-center gap-2">
                    <VerifiedUserIcon className="w-4 h-4 text-[#1b4332] shrink-0" />
                    <span className="font-heading font-bold text-[#1b4332] text-xs sm:text-[13px]">
                      {card.author}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 mt-2.5">
                    {[...Array(card.rating)].map((_, i) => (
                      <StarFilledIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Large Featured Card with Image Background */}
          <div className="lg:col-span-8">
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[420px] sm:min-h-[460px] md:min-h-[500px] h-full flex flex-col justify-end p-7 sm:p-9 md:p-12 shadow-[0_12px_36px_rgba(27,67,50,0.12)] group">
              {/* Background Photo */}
              <Image
                src={featuredCard.heroImage}
                alt="Client success story hero"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Rich Dark Forest Green Gradient Overlay for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#143627]/95 via-[#1b4332]/65 to-transparent pointer-events-none" />

              {/* Card Content Overlay */}
              <div className="relative z-10 text-white max-w-xl">
                <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] leading-[1.2] tracking-tight mb-3 text-white">
                  {featuredCard.quote}
                </blockquote>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6 max-w-lg">
                  {featuredCard.caption}
                </p>

                <div>
                  <div className="flex items-center gap-2">
                    <VerifiedUserHeroIcon className="w-4 h-4 text-white shrink-0" />
                    <span className="font-heading font-bold text-white text-xs sm:text-[13px]">
                      {featuredCard.author}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 mt-2.5">
                    {[...Array(featuredCard.rating)].map((_, i) => (
                      <StarFilledIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Row: 2 Wide Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mt-5 sm:mt-6 items-stretch">
          {/* Bottom Left Card (~60% width) */}
          <div className="md:col-span-7 lg:col-span-7 bg-[#f6f8f6] rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(27,67,50,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <p className="text-[#55695d] text-xs sm:text-[13.5px] leading-relaxed mb-6 font-normal">
              {bottomCards[0].quote}
            </p>

            <div>
              <div className="flex items-center gap-2">
                <VerifiedUserIcon className="w-4 h-4 text-[#1b4332] shrink-0" />
                <span className="font-heading font-bold text-[#1b4332] text-xs sm:text-[13px]">
                  {bottomCards[0].author}
                </span>
              </div>

              <div className="text-amber-400 mt-2.5">
                <StarFilledIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Bottom Right Card (~40% width) */}
          <div className="md:col-span-5 lg:col-span-5 bg-[#f6f8f6] rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(27,67,50,0.06)] hover:-translate-y-0.5 transition-all duration-300">
            <p className="text-[#55695d] text-xs sm:text-[13.5px] leading-relaxed mb-6 font-normal">
              {bottomCards[1].quote}
            </p>

            <div>
              <div className="flex items-center gap-2">
                <VerifiedUserIcon className="w-4 h-4 text-[#1b4332] shrink-0" />
                <span className="font-heading font-bold text-[#1b4332] text-xs sm:text-[13px]">
                  {bottomCards[1].author}
                </span>
              </div>

              <div className="text-amber-400 mt-2.5">
                <StarFilledIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer: Trusted By + Get Started Button */}
        <div className="text-center mt-12 sm:mt-14">
          <p className="font-heading font-semibold text-[#1b4332] text-xs sm:text-[13px] tracking-tight mb-3.5">
            {trustedBy}
          </p>

          <Link
            href={button.href || "#get-started"}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-[12px] bg-[#e2ede5] hover:bg-[#c0dac5] active:bg-[#b5d2ba] text-[#1b4332] font-semibold text-xs sm:text-sm transition-colors duration-300 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b4332]/30"
          >
            <span>{button.label}</span>
            <UpRightArrowIcon className="w-3.5 h-3.5 text-[#1b4332] shrink-0" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
