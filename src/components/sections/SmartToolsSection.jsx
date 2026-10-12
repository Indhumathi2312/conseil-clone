import smartToolsData from "@/data/smartToolsData";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";

export default function SmartToolsSection() {
  const renderIcon = (type) => {
    switch (type) {
      case "merge":
        return (
          <svg className="w-6 h-6 text-black" viewBox="2 2 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v10M8 12h4a4 4 0 014 4v1" />
            <circle cx="8" cy="6" r="2" fill="currentColor" />
            <circle cx="8" cy="18" r="2" fill="currentColor" />
            <circle cx="16" cy="18" r="2" fill="currentColor" />
          </svg>
        );
      case "send":
        return (
          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l-6 2-4.054-6.685z" />
          </svg>
        );
      case "flip":
        return (
          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="7" height="16" rx="2" strokeLinecap="round" />
            <rect x="14" y="4" width="7" height="16" rx="2" strokeLinecap="round" />
          </svg>
        );
      case "circles":
        return (
          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="12" r="6" />
            <circle cx="15" cy="12" r="6" strokeDasharray="3 3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-zinc-100">
      <Container>
        <SectionHeading
          title={smartToolsData.heading}
          subtitle={smartToolsData.subtitle}
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {smartToolsData.cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#f8f9fa] rounded-3xl p-8 flex flex-col justify-between border border-zinc-100 hover:border-zinc-200 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(card.icon)}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <a
                href={card.button.href}
                className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-black group/link"
              >
                <span>{card.button.label}</span>
                <svg
                  className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
