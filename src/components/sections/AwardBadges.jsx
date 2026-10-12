import Image from "next/image";

export default function AwardBadges({ awards }) {
  if (!awards || !awards.length) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 select-none">
      {awards.map((award) => (
        <div key={award.id} className="flex items-center justify-center gap-3 sm:gap-3.5">
          {/* Left Laurel Leaf */}
          <div className="shrink-0">
            <Image
              src={award.leftLeaf}
              alt="Award laurel"
              width={34}
              height={70}
              className="h-[46px] sm:h-[52px] md:h-[56px] w-auto object-contain"
            />
          </div>

          {/* Award Text */}
          <div className="text-center font-semibold text-[#1b4332] text-[14px] sm:text-[15px] leading-snug">
            {award.lines.map((line, idx) => (
              <span key={idx} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </div>

          {/* Right Laurel Leaf */}
          <div className="shrink-0">
            <Image
              src={award.rightLeaf}
              alt="Award laurel"
              width={34}
              height={70}
              className="h-[46px] sm:h-[52px] md:h-[56px] w-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
