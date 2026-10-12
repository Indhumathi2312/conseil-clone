import Image from "next/image";
import globalSolutionsData from "@/data/globalSolutionsData";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function GlobalSolutionsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-zinc-100 text-center">
      <Container>
        {/* Rating and Avatars Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex -space-x-3">
            {globalSolutionsData.avatars.map((av) => (
              <div
                key={av.id}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm shrink-0"
              >
                <Image
                  src={av.src}
                  alt={av.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex text-amber-400">
              {[...Array(globalSolutionsData.rating.stars)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-zinc-900">
              {globalSolutionsData.rating.text}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] max-w-3xl mx-auto mb-4">
          {globalSolutionsData.heading}
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto mb-8">
          {globalSolutionsData.subtitle}
        </p>

        {/* Read More Stories Button */}
        <div className="mb-16">
          <Button href={globalSolutionsData.button.href} variant="primary">
            {globalSolutionsData.button.label}
          </Button>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center pt-8 border-t border-zinc-100">
          {globalSolutionsData.logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-4 rounded-xl grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={50}
                className="max-h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
