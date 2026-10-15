import Link from "next/link";
import smartToolsData from "@/data/smartToolsData";
import Container from "../layout/Container";

// Top Header Workflow / Git Branch Icon (Matching Image 1 & 4)
function WorkflowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 8.5v7M12 12a4 4 0 0 1 4-3.5h0.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="2.2" fill="#edf2ee" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="2.2" fill="#edf2ee" />
      <circle cx="17.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="2.2" fill="#edf2ee" />
    </svg>
  );
}

// Card 1 Icon: Paper Plane / Delta Arrowhead Pointer (Matching Image 2 Card 1)
function ProductStrategiesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.93 11.23a1.05 1.05 0 0 1 .15-1.47l15.6-7.3a1.05 1.05 0 0 1 1.4 1.25l-4.2 15.8a1.05 1.05 0 0 1-1.72.43l-4.3-4.3-3.9 2.7a.8.8 0 0 1-1.26-.65v-4.4l-1.67-2.06z" />
    </svg>
  );
}

// Card 2 Icon: Dual Rounded Pill Sliders (Matching Image 2 Card 2)
function FlexibleSolutionsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="5" height="16" rx="2.5" fill="#9ab3a3" />
      <rect x="13" y="4" width="5" height="16" rx="2.5" fill="#1b4332" />
    </svg>
  );
}

// Card 3 Icon: Overlapping Circles (Matching Image 2 Card 3)
function ScalableAppsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="14" r="5.5" fill="#9ab3a3" />
      <circle cx="14.5" cy="9.5" r="5.5" fill="#1b4332" />
    </svg>
  );
}

// Bottom Banner Icon: Phone with Envelope Mail Badge (Matching Image 3)
function NewInsightsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="11"
        height="18"
        rx="2.5"
        stroke="#9ab3a3"
        strokeWidth="1.8"
      />
      <line
        x1="7"
        y1="6"
        x2="10"
        y2="6"
        stroke="#9ab3a3"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="10"
        width="11"
        height="8"
        rx="1.8"
        fill="#ffffff"
        stroke="#1b4332"
        strokeWidth="1.8"
      />
      <path
        d="M10.5 11.5L15.5 14.5L20.5 11.5"
        stroke="#1b4332"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chevron Right Arrow for Buttons with Hover Slide Animation
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

export default function SmartToolsSection() {
  const { heading, subtitle, cards, banner, id } = smartToolsData;

  const renderCardIcon = (iconType, className) => {
    switch (iconType) {
      case "strategies":
        return <ProductStrategiesIcon className={className} />;
      case "solutions":
        return <FlexibleSolutionsIcon className={className} />;
      case "apps":
        return <ScalableAppsIcon className={className} />;
      default:
        return <ProductStrategiesIcon className={className} />;
    }
  };

  return (
    <section
      id={id || "smart-tools"}
      className="py-14 sm:py-16 lg:py-20 bg-white select-none overflow-hidden"
    >
      <Container className="!max-w-[1240px]">
        {/* Header Block (Matching Image 1) */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Workflow Node Icon Badge */}
          <div className="w-12 h-12 rounded-[14px] bg-[#edf2ee] flex items-center justify-center mx-auto mb-5 sm:mb-6 text-[#1b4332] shadow-2xs">
            <WorkflowIcon className="w-6 h-6" />
          </div>

          {/* Main Title */}
          <h2 className="font-heading font-bold text-[#1b4332] text-3xl sm:text-4xl md:text-[46px] leading-[1.18] tracking-tight text-center">
            Simplify Your Workflow
            <br className="hidden sm:inline" /> with Smart Tools
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-[#55695d] text-sm sm:text-base text-center max-w-xl mx-auto leading-relaxed">
            Manage tasks, projects, and goals seamlessly —
            <br className="hidden sm:inline" /> wherever you are, whenever you need.
          </p>
        </div>

        {/* 3 Feature Cards Grid (Matching Reference Screenshot Border & Radius) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-14">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[20px] sm:rounded-[22px] p-7 sm:p-8 border border-zinc-200 hover:border-zinc-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_rgba(27,67,50,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Icon & Optional Badge */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-[14px] bg-[#edf2ee] flex items-center justify-center text-[#1b4332] shadow-2xs shrink-0">
                    {renderCardIcon(card.icon, "w-5 h-5")}
                  </div>

                  {card.badge && (
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-tight ${
                        card.badge === "Popular"
                          ? "bg-[#e2ede5] text-[#1b4332]"
                          : "bg-[#edf2ee] text-[#4a5a50]"
                      }`}
                    >
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-heading font-bold text-[#1b4332] text-xl sm:text-[22px] mt-7 mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[#55695d] text-sm leading-relaxed mb-7 sm:mb-8">
                  {card.description}
                </p>
              </div>

              {/* Card CTA Button (Matching previous section button style & smooth X-axis hover expansion) */}
              <div>
                <Link
                  href={card.button.href}
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 hover:px-7 sm:hover:px-8 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md cursor-pointer select-none group/btn w-fit"
                >
                  <span>{card.button.label}</span>
                  <ChevronRightIcon className="w-3.5 h-3.5 text-white shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Card (Matching Image 3 - No Borders) */}
        {banner && (
          <div className="mt-6 sm:mt-7 bg-[#edf2ee] rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            {/* Left Content: Badge Icon + Text */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[14px] bg-white flex items-center justify-center text-[#1b4332] shadow-2xs shrink-0">
                <NewInsightsIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#1b4332] text-base sm:text-[17px] mb-0.5 tracking-tight">
                  {banner.title}
                </h4>
                <p className="text-[#55695d] text-xs sm:text-sm leading-relaxed">
                  {banner.description}
                </p>
              </div>
            </div>

            {/* Right Action Button (Matching previous section button style) */}
            <Link
              href={banner.button.href}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 hover:px-7 sm:hover:px-8 py-2.5 sm:py-3 rounded-[10px] sm:rounded-[12px] bg-[#1b4332] hover:bg-[#143627] text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md cursor-pointer select-none group/btn shrink-0"
            >
              <span>{banner.button.label}</span>
              <ChevronRightIcon className="w-3.5 h-3.5 text-white shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
