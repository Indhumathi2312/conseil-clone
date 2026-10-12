import Image from "next/image";
import Link from "next/link";
import overviewData from "@/data/overviewData";
import Container from "../layout/Container";

function CellularDataIcon({ className }) {
  return (
    <svg className={className} viewBox="2 2 20 20" fill="none">
      <path
        fill="currentColor"
        fillOpacity="0.25"
        d="M19.363961,3.63603897 C22.8786797,7.15075759 22.8786797,12.8492424 19.363961,16.363961 C18.9734367,16.7544853 18.3402718,16.7544853 17.9497475,16.363961 C17.5592232,15.9734367 17.5592232,15.3402718 17.9497475,14.9497475 C20.6834175,12.2160774 20.6834175,7.78392257 17.9497475,5.05025253 C17.5592232,4.65972824 17.5592232,4.02656326 17.9497475,3.63603897 C18.3402718,3.24551468 18.9734367,3.24551468 19.363961,3.63603897 Z M16.5355339,6.46446609 C18.4881554,8.41708755 18.4881554,11.5829124 16.5355339,13.5355339 C16.1450096,13.9260582 15.5118446,13.9260582 15.1213203,13.5355339 C14.7307961,13.1450096 14.7307961,12.5118446 15.1213203,12.1213203 C16.2928932,10.9497475 16.2928932,9.05025253 15.1213203,7.87867966 C14.7307961,7.48815536 14.7307961,6.85499039 15.1213203,6.46446609 C15.5118446,6.0739418 16.1450096,6.0739418 16.5355339,6.46446609 Z M6.05025253,3.63603897 C6.44077682,4.02656326 6.44077682,4.65972824 6.05025253,5.05025253 C3.31658249,7.78392257 3.31658249,12.2160774 6.05025253,14.9497475 C6.44077682,15.3402718 6.44077682,15.9734367 6.05025253,16.363961 C5.65972824,16.7544853 5.02656326,16.7544853 4.63603897,16.363961 C1.12132034,12.8492424 1.12132034,7.15075759 4.63603897,3.63603897 C5.02656326,3.24551468 5.65972824,3.24551468 6.05025253,3.63603897 Z M8.87867966,6.46446609 C9.26920395,6.85499039 9.26920395,7.48815536 8.87867966,7.87867966 C7.70710678,9.05025253 7.70710678,10.9497475 8.87867966,12.1213203 C9.26920395,12.5118446 9.26920395,13.1450096 8.87867966,13.5355339 C8.48815536,13.9260582 7.85499039,13.9260582 7.46446609,13.5355339 C5.51184464,11.5829124 5.51184464,8.41708755 7.46446609,6.46446609 C7.85499039,6.0739418 8.48815536,6.0739418 8.87867966,6.46446609 Z"
      />
      <path
        fill="currentColor"
        d="M12,8 C13.1045695,8 14,8.8954305 14,10 C14,10.7398375 13.5982846,11.3858493 13.0010775,11.7318119 L13,20 C13,20.5522847 12.5522847,21 12,21 C11.4477153,21 11,20.5522847 11,20 L10.9999275,11.7323937 C10.4021661,11.3865739 10,10.7402524 10,10 C10,8.8954305 10.8954305,8 12,8 Z"
      />
    </svg>
  );
}

function AppsPlusIcon({ className }) {
  return (
    <svg className={className} viewBox="2 2 20 20" fill="none">
      <path
        fill="currentColor"
        fillOpacity="0.25"
        d="M8,2 L5,2 C3.34314575,2 2,3.34314575 2,5 L2,8 C2,9.65685425 3.34314575,11 5,11 L8,11 C9.65685425,11 11,9.65685425 11,8 L11,5 C11,3.34314575 9.65685425,2 8,2 Z M8,13 L5,13 C3.34314575,13 2,14.3431458 2,16 L2,19 C2,20.6568542 3.34314575,22 5,22 L8,22 C9.65685425,22 11,20.6568542 11,19 L11,16 C11,14.3431458 9.65685425,13 8,13 Z M19,1.9840736 L16,1.9840736 C14.3431458,1.9840736 13,3.32721935 13,4.9840736 L13,7.9840736 C13,9.64092785 14.3431458,10.9840736 16,10.9840736 L19,10.9840736 C20.6568542,10.9840736 22,9.64092785 22,7.9840736 L22,4.9840736 C22,3.32721935 20.6568542,1.9840736 19,1.9840736 Z"
      />
      <path
        fill="currentColor"
        d="M17.5,13.0185808 C18.0522847,13.0185808 18.5,13.466296 18.5,14.0185808 L18.5,16.518 L20.9285714,16.5185808 C21.4808562,16.5185808 21.9285714,16.966296 21.9285714,17.5185808 C21.9285714,18.0708655 21.4808562,18.5185808 20.9285714,18.5185808 L18.5,18.518 L18.5,21 C18.5,21.5522847 18.0522847,22 17.5,22 C16.9477153,22 16.5,21.5522847 16.5,21 L16.5,18.518 L14.0714286,18.5185808 C13.5191438,18.5185808 13.0714286,18.0708655 13.0714286,17.5185808 C13.0714286,16.966296 13.5191438,16.5185808 14.0714286,16.5185808 L16.5,16.518 L16.5,14.0185808 C16.5,13.466296 16.9477153,13.0185808 17.5,13.0185808 Z"
      />
    </svg>
  );
}

function ShapesIcon({ className }) {
  return (
    <svg className={className} viewBox="2 2 20 20" fill="none">
      <path
        fill="currentColor"
        fillOpacity="0.25"
        d="M5.60557281,13.5527864 L2.10557281,20.5527864 C1.77312226,21.2176875 2.25661798,22 3,22 L10,22 C10.743382,22 11.2268777,21.2176875 10.8944272,20.5527864 L7.39442719,13.5527864 C7.02590292,12.8157379 5.97409708,12.8157379 5.60557281,13.5527864 Z M16.5224778,2.55230999 L15.521,4.552 L13.2748766,4.87484834 L13.1604968,4.89768451 C12.42115,5.08870566 12.1516926,6.03609299 12.7238104,6.58582083 L14.34,8.139 L13.9593324,10.3285818 L13.9460553,10.4384611 C13.8948012,11.1982971 14.703577,11.7511793 15.4046511,11.3878566 L17.416,10.344 L19.4286823,11.3878566 L19.5294639,11.4336037 C20.2386009,11.7112771 21.0093571,11.1065195 20.874001,10.3285818 L20.492,8.139 L22.1095229,6.58582083 L22.1890752,6.50052346 C22.6779648,5.91391473 22.3438633,4.98734781 21.5584568,4.87484834 L19.311,4.552 L18.3108555,2.55230999 C17.9421583,1.81589667 16.891175,1.81589667 16.5224778,2.55230999 Z"
      />
      <path
        fill="currentColor"
        d="M21,13 L14,13 C13.4477153,13 13,13.4477153 13,14 L13,21 C13,21.5522847 13,22 14,22 L21,22 C21.5522847,22 22,21.5522847 22,21 L22,14 C22,13.4477153 21.5522847,13 21,13 Z M6.5,2 C4.01471863,2 2,4.01471863 2,6.5 C2,8.98528137 4.01471863,11 6.5,11 C8.98528137,11 11,8.98528137 11,6.5 C11,4.01471863 8.98528137,2 6.5,2 Z"
      />
    </svg>
  );
}

function FileChartIcon({ className }) {
  return (
    <svg className={className} viewBox="2 2 20 20" fill="none">
      <path
        fill="currentColor"
        fillOpacity="0.25"
        d="M12.8727869,2 C13.0842279,2 13.2902276,2.06702062 13.4611918,2.19143358 C15.7543017,3.86016124 18.3103085,6.19070456 19.7808487,8.02875833 C19.9227117,8.20607544 20,8.426396 20,8.65347855 L20,19 C20,20.6568542 18.6568542,22 17,22 L10.9640177,22.001053 C12.7882391,20.8499241 14,18.816473 14,16.5 C14,12.9101491 11.0898509,10 7.5,10 C6.21084353,10 5.00934208,10.3752958 3.99879075,11.0225923 L4,5 C4,3.34314575 5.34314575,2 7,2 Z"
      />
      <path
        fill="currentColor"
        d="M7.00039328,11.0223861 L6.99993998,16.4954462 L7.00645515,16.5814671 C7.01493523,16.6341847 7.03151503,16.6835506 7.05467308,16.7285812 L9.78826321,21.5028553 C9.09150729,21.8220653 8.31653308,22 7.5,22 C4.46243388,22 2,19.5375661 2,16.5 C2,13.6308446 4.19695546,11.2748155 7.00039328,11.0223861 Z M12.7008612,14.7062552 C12.8947261,15.2684601 13,15.871936 13,16.5 C13,18.3638724 12.0728597,20.0111996 10.6546054,21.0059553 L8.207,16.7293861 L12.7008612,14.7062552 Z M8.00061211,11.0224767 C9.84313728,11.188722 11.4235762,12.2636532 12.2903213,13.7956625 L7.999,15.727 L8.00061211,11.0224767 Z M13.1565245,2.041098 C13.2652488,2.07326983 13.3683827,2.12389512 13.4611918,2.19143358 C15.7543017,3.86016124 18.3103085,6.19070456 19.7808487,8.02875833 C19.8861712,8.16040285 19.9559006,8.3157506 19.9848341,8.47997087 L16.8497931,8.83352199 C16.6926645,8.85119054 16.5344957,8.85788948 16.3764358,8.85357014 C14.4971601,8.80221482 13.0153378,7.23712913 13.0666932,5.35785341 Z"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} viewBox="2 2 20 20">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        points="9.5 17 14.5 12 9.5 7"
      />
    </svg>
  );
}

export default function OverviewSection() {
  const { cards, heading, subtitle } = overviewData;

  return (
    <section id={overviewData.id} className="py-20 sm:py-28 lg:py-32 bg-white scroll-mt-24">
      <Container>
        {/* Section Header Matching Screenshot Reference */}
        <div className="text-center mb-14 sm:mb-20">
          {/* Home Icon Rounded Badge */}
          <div className="w-12 h-12 rounded-[16px] sm:rounded-[18px] bg-[#e6ece9] flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xs">
            <svg
              className="w-6 h-6 text-[#1b4332]"
              viewBox="2 2 20 20"
              fill="currentColor"
            >
              <path
                d="M10.0244862,3.39980637 C11.1555641,2.41011315 12.8444359,2.41011315 13.9755138,3.39980637 L19.9754365,8.64973869 C20.6265485,9.21946171 20.9999226,10.0425475 20.9999226,10.9077244 L20.9993182,18.0002395 C20.9989214,19.6568734 19.655936,20.9997443 17.9991478,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,10.9075365 C3,10.0424487 3.3734413,9.21947064 4.02448618,8.64980637 Z M12.6585046,4.90495976 C12.2814786,4.57506202 11.7185214,4.57506202 11.3414954,4.90495976 L5.34149539,10.1549598 C5.12448043,10.3448478 5,10.6191739 5,10.9075365 L5,18 C5,18.5522847 5.44771525,19 6,19 L17.9989935,19 C18.5513655,19 18.9991859,18.5521325 18.9993182,17.9999148 L18.9999227,10.907554 C18.9999227,10.6191617 18.8754646,10.3447998 18.6584273,10.1548921 Z M11.6698045,5.94625259 C11.8586201,5.78020052 12.1413799,5.78020052 12.3301955,5.94625259 L15.8185496,9.01405207 L17.7283128,10.6935749 C17.9010171,10.8454581 18,11.0643228 18,11.2943125 L18,17.7 C18,17.8656854 17.8656854,18 17.7,18 L14,18 C13.7238576,18 13.5,17.7761424 13.5,17.5 L13.5,15 C13.5,14.4477153 13.0522847,14 12.5,14 L11.5,14 C10.9477153,14 10.5,14.4477153 10.5,15 L10.5,17.5 C10.5,17.7761424 10.2761424,18 10,18 L6.30000001,18 C6.13431458,18 6,17.8656854 6,17.7 L6,11.2943125 C6,11.0643228 6.09898288,10.8454581 6.27168718,10.6935749 Z"
                fill="#1b4332"
              />
            </svg>
          </div>

          {/* Large Two-line Headline */}
          <h2 className="font-heading font-bold text-[#1b4332] text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.12] tracking-tight max-w-4xl mx-auto">
            {heading.line1} <br className="hidden sm:inline" />
            {heading.line2}
          </h2>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-[#55635c] text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed max-w-[480px] mx-auto font-normal">
            {subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {/* Card 1: Fully Secured (Tall: Col 1, Rows 1-2) */}
          <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 bg-[#e8edea] rounded-[20px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group border border-black/[0.04] transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[15px] bg-white border border-black/10 shadow-xs flex items-center justify-center mb-6">
                <CellularDataIcon className="w-[30px] h-[30px] text-[#1b4332]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#1b4332] mb-3 tracking-tight font-heading">
                {cards.secured.title}
              </h3>
              <p className="text-[15px] text-[#55635c] leading-relaxed max-w-[280px] mb-7">
                {cards.secured.description}
              </p>
              <Link
                href={cards.secured.button.href}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[rgba(56,140,104,0.15)] hover:bg-[rgba(56,140,104,0.25)] text-[#1b4332] text-sm font-bold transition-all duration-200 group/btn"
              >
                <span>{cards.secured.button.label}</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 text-[#1b4332] transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 sm:mt-10 -mb-10 sm:-mb-12 flex justify-center w-full">
              <Image
                src={cards.secured.image}
                alt={cards.secured.title}
                width={340}
                height={440}
                className="w-full max-w-[280px] sm:max-w-[310px] h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>

          {/* Card 2: Integrations Hub (Wide: Cols 2-3, Row 1) */}
          <div className="md:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-1 bg-[#e8edea] rounded-[20px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10 overflow-hidden border border-black/[0.04] transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col items-start text-left max-w-sm shrink-0">
              <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[15px] bg-white border border-black/10 shadow-xs flex items-center justify-center mb-6">
                <AppsPlusIcon className="w-[30px] h-[30px] text-[#1b4332]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#1b4332] mb-3 tracking-tight font-heading">
                {cards.integrations.title}
              </h3>
              <p className="text-[15px] text-[#55635c] leading-relaxed mb-7">
                {cards.integrations.description}
              </p>
              <Link
                href={cards.integrations.button.href}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[rgba(56,140,104,0.15)] hover:bg-[rgba(56,140,104,0.25)] text-[#1b4332] text-sm font-bold transition-all duration-200 group/btn"
              >
                <span>{cards.integrations.button.label}</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 text-[#1b4332] transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* 3 Vertical Animated Marquee Columns */}
            <div className="relative w-full md:w-auto flex-1 h-[290px] sm:h-[330px] flex justify-center md:justify-end gap-3.5 sm:gap-4.5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
              {/* Column 1: Scrolls UP */}
              <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-vertical-up hover:[animation-play-state:paused]">
                {[...cards.integrations.columns.col1, ...cards.integrations.columns.col1].map((logo, i) => (
                  <div
                    key={`col1-${logo.name}-${i}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-[16px] sm:rounded-[18px] p-3 sm:p-3.5 flex items-center justify-center shadow-xs border border-black/[0.05] shrink-0"
                    title={logo.name}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={52}
                      height={52}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Column 2: Scrolls DOWN */}
              <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-vertical-down hover:[animation-play-state:paused]">
                {[...cards.integrations.columns.col2, ...cards.integrations.columns.col2].map((logo, i) => (
                  <div
                    key={`col2-${logo.name}-${i}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-[16px] sm:rounded-[18px] p-3 sm:p-3.5 flex items-center justify-center shadow-xs border border-black/[0.05] shrink-0"
                    title={logo.name}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={52}
                      height={52}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Column 3: Scrolls UP */}
              <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-vertical-up-alt hover:[animation-play-state:paused]">
                {[...cards.integrations.columns.col3, ...cards.integrations.columns.col3].map((logo, i) => (
                  <div
                    key={`col3-${logo.name}-${i}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-[16px] sm:rounded-[18px] p-3 sm:p-3.5 flex items-center justify-center shadow-xs border border-black/[0.05] shrink-0"
                    title={logo.name}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={52}
                      height={52}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Worldwide Coverage (Col 2, Row 2) */}
          <div className="lg:col-start-2 lg:row-start-2 bg-[#e8edea] rounded-[20px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden border border-black/[0.04] transition-all duration-300 hover:shadow-md group">
            <div>
              <div className="mb-6">
                <Image
                  src={cards.worldwide.image}
                  alt={cards.worldwide.title}
                  width={240}
                  height={120}
                  className="w-auto h-auto max-w-[140px] sm:max-w-[150px] object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#1b4332] mb-3 tracking-tight font-heading">
                {cards.worldwide.title}
              </h3>
              <p className="text-[15px] text-[#55635c] leading-relaxed mb-7">
                {cards.worldwide.description}
              </p>
            </div>
            <Link
              href={cards.worldwide.button.href}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[rgba(56,140,104,0.15)] hover:bg-[rgba(56,140,104,0.25)] text-[#1b4332] text-sm font-bold transition-all duration-200 group/btn self-start"
            >
              <span>{cards.worldwide.button.label}</span>
              <ArrowRightIcon className="w-4 h-4 ml-2 text-[#1b4332] transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Card 4: Data Insights (Tall: Col 3, Rows 2-3) */}
          <div className="lg:col-start-3 lg:row-start-2 lg:row-span-2 bg-[#e8edea] rounded-[20px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group border border-black/[0.04] transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[15px] bg-white border border-black/10 shadow-xs flex items-center justify-center mb-6">
                <ShapesIcon className="w-[30px] h-[30px] text-[#1b4332]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#1b4332] mb-3 tracking-tight font-heading">
                {cards.insights.title}
              </h3>
              <p className="text-[15px] text-[#55635c] leading-relaxed max-w-[280px] mb-7">
                {cards.insights.description}
              </p>
              <Link
                href={cards.insights.button.href}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[rgba(56,140,104,0.15)] hover:bg-[rgba(56,140,104,0.25)] text-[#1b4332] text-sm font-bold transition-all duration-200 group/btn"
              >
                <span>{cards.insights.button.label}</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 text-[#1b4332] transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 sm:mt-10 -mb-10 sm:-mb-12 flex justify-center w-full">
              <Image
                src={cards.insights.image}
                alt={cards.insights.title}
                width={340}
                height={400}
                className="w-full max-w-[280px] sm:max-w-[310px] h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Card 5: Automated Reporting (Wide: Cols 1-2, Row 3) */}
          <div className="md:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-3 bg-[#e8edea] rounded-[20px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10 overflow-hidden border border-black/[0.04] transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col items-start text-left max-w-sm shrink-0">
              <div className="w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-[15px] bg-white border border-black/10 shadow-xs flex items-center justify-center mb-6">
                <FileChartIcon className="w-[30px] h-[30px] text-[#1b4332]" />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#1b4332] mb-3 tracking-tight font-heading">
                {cards.reporting.title}
              </h3>
              <p className="text-[15px] text-[#55635c] leading-relaxed mb-7">
                {cards.reporting.description}
              </p>
              <Link
                href={cards.reporting.button.href}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[rgba(56,140,104,0.15)] hover:bg-[rgba(56,140,104,0.25)] text-[#1b4332] text-sm font-bold transition-all duration-200 group/btn"
              >
                <span>{cards.reporting.button.label}</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 text-[#1b4332] transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Video Player on Right */}
            <div className="relative w-full md:w-[320px] lg:w-[360px] aspect-[16/10] sm:aspect-video rounded-[16px] overflow-hidden shadow-md border border-black/10 bg-black group/video shrink-0">
              <video
                src={cards.reporting.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[16px]"
              />
              {/* Circular Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-[#1b4332] group-hover/video:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
