import Image from "next/image";
import platformScaleData from "@/data/platformScaleData";
import Container from "../layout/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function PlatformScaleSection() {
  return (
    <section className="py-20 sm:py-28 bg-zinc-50/50 border-t border-zinc-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image Column */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white p-4 sm:p-6">
              <Image
                src={platformScaleData.image.src}
                alt={platformScaleData.image.alt}
                width={540}
                height={460}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="order-1 lg:order-2 max-w-xl">
            <div className="mb-4">
              <Badge variant="primary">{platformScaleData.badge}</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              {platformScaleData.heading}
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
              {platformScaleData.description}
            </p>

            {/* Checkmark Highlights */}
            <ul className="space-y-3.5 mb-10">
              {platformScaleData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-zinc-700">
                  <div className="shrink-0 mt-1 p-0.5 rounded-full bg-blue-100 text-blue-600">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {platformScaleData.buttons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant}>
                  {btn.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
