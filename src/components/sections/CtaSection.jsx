import Image from "next/image";
import ctaData from "@/data/ctaData";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-zinc-100 overflow-hidden">
      <Container>
        <div className="bg-[#f8f9fa] rounded-3xl p-8 sm:p-14 lg:p-16 border border-zinc-100 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 max-w-xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-3 block">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
                {ctaData.heading}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
                {ctaData.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {ctaData.buttons.map((btn) => (
                  <Button
                    key={btn.label}
                    href={btn.href}
                    variant={btn.variant}
                    icon={btn.icon}
                    size="md"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Phone Mockup Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end -mb-8 lg:-mb-16">
              <Image
                src={ctaData.image.src}
                alt={ctaData.image.alt}
                width={420}
                height={520}
                className="w-full max-w-[340px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
