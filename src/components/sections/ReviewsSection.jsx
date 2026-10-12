import reviewsData from "@/data/reviewsData";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function ReviewsSection() {
  return (
    <section id={reviewsData.id} className="py-20 sm:py-28 bg-[#f8f9fa] border-t border-zinc-100 scroll-mt-24">
      <Container>
        <SectionHeading
          title={reviewsData.heading}
          subtitle={reviewsData.subtitle}
        />

        {/* Featured Big Quote Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] mb-12 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-1 text-amber-400 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-bold text-zinc-900">
              {reviewsData.rating.text}
            </span>
          </div>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug mb-6">
            {reviewsData.featuredQuote}
          </blockquote>
          <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Verified Customer • Global Enterprise
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviewsData.reviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-normal">
                  “{rev.quote}”
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">{rev.author}</h4>
                  <p className="text-xs text-zinc-500">{rev.role}</p>
                </div>
                <span className="inline-flex px-2.5 py-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Wide Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reviewsData.reviews.slice(3, 5).map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-normal">
                  “{rev.quote}”
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">{rev.author}</h4>
                  <p className="text-xs text-zinc-500">{rev.role}</p>
                </div>
                <span className="inline-flex px-2.5 py-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-semibold text-zinc-900 text-center sm:text-left">
            {reviewsData.trustedBy}
          </p>
          <Button href={reviewsData.button.href} variant="primary">
            {reviewsData.button.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
