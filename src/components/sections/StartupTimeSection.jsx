import Image from "next/image";
import startupTimeData from "@/data/startupTimeData";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function StartupTimeSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#f8f9fa] border-t border-zinc-100">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-3 block">
              Speed & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
              {startupTimeData.heading}
            </h2>
          </div>
          <Button href={startupTimeData.button.href} variant="primary">
            {startupTimeData.button.label}
          </Button>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {startupTimeData.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="p-6 pb-2">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
                  {card.badge}
                </span>
                <h3 className="text-xl font-bold text-zinc-900 leading-snug group-hover:text-black transition-colors">
                  {card.title}
                </h3>
              </div>
              <div className="p-4 sm:p-6 pt-2 flex justify-center">
                <div className="rounded-2xl overflow-hidden w-full bg-zinc-50 border border-zinc-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={320}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
