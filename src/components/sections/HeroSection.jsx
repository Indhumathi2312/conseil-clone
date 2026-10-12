import Image from "next/image";
import heroData from "@/data/heroData";
import Container from "../layout/Container";
import DownloadButtons from "./DownloadButtons";
import AwardBadges from "./AwardBadges";

export default function HeroSection() {
  return (
    <section
      className="relative pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #cad3cf 0%, #d8e0dc 16%, #e8edea 34%, #f6f8f7 54%, #ffffff 76%)",
      }}
    >
      <Container className="text-center">
        {/* Main Headline */}
        <h1 className="font-heading font-bold text-[#1b4332] text-4xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px] leading-[1.12] sm:leading-[1.14] tracking-tight max-w-5xl mx-auto">
          {/* First Line: Build Apps [lime-underline] ⚡ Quickly */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 gap-y-1">
            <span className="relative inline-block">
              <span>{heroData.heading.line1Prefix}</span>
              <span
                aria-hidden="true"
                className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-full h-[4px] sm:h-[5px] bg-[#addd1e] rounded-full"
              />
            </span>
            <span className="inline-flex items-center align-middle mx-1 sm:mx-2 -translate-y-0.5 sm:-translate-y-1 shrink-0 select-none">
              <Image
                src={heroData.heading.emoji1}
                alt="Lightning bolt"
                width={52}
                height={62}
                className="w-[32px] sm:w-[44px] md:w-[50px] lg:w-[54px] h-auto object-contain"
                priority
              />
            </span>
            <span>{heroData.heading.line1Suffix}</span>
          </div>

          {/* Second Line: And Without Hassle 👍 */}
          <div className="flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 mt-1 sm:mt-2">
            <span>{heroData.heading.line2Text}</span>
            <span className="inline-flex items-center align-middle ml-1 sm:ml-2 -translate-y-0.5 sm:-translate-y-1 shrink-0 select-none">
              <Image
                src={heroData.heading.emoji2}
                alt="Thumbs up"
                width={56}
                height={64}
                className="w-[32px] sm:w-[44px] md:w-[50px] lg:w-[54px] h-auto object-contain"
                priority
              />
            </span>
          </div>
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 sm:mt-8 md:mt-9 max-w-[660px] mx-auto text-[#55635c] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-[1.6] font-normal">
          {heroData.description}
        </p>

        {/* App Download Buttons */}
        <div className="mt-8 sm:mt-10 md:mt-11">
          <DownloadButtons buttons={heroData.buttons} />
        </div>

        {/* Award and Recognition Badges */}
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <AwardBadges awards={heroData.awards} />
        </div>
      </Container>
    </section>
  );
}
