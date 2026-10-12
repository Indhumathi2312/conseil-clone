import Image from "next/image";
import featuresData from "@/data/featuresData";
import Container from "../layout/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function FeaturesSection() {
  return (
    <section id={featuresData.id} className="py-20 sm:py-28 bg-white border-t border-zinc-100 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="max-w-xl">
            <div className="mb-4">
              <Badge variant="green">{featuresData.badge}</Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-6">
              {featuresData.heading}
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-8">
              {featuresData.description}
            </p>

            {/* Checkmark Highlights */}
            <ul className="space-y-3.5 mb-10">
              {featuresData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-zinc-700">
                  <div className="shrink-0 mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600">
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
              {featuresData.buttons.map((btn) => (
                <Button key={btn.label} href={btn.href} variant={btn.variant}>
                  {btn.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative flex justify-center">
            <div className="rounded-3xl overflow-hidden border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-zinc-50">
              <Image
                src={featuresData.image.src}
                alt={featuresData.image.alt}
                width={580}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
