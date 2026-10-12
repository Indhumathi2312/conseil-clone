"use client";

import { useState } from "react";
import faqData from "@/data/faqData";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id={faqData.id} className="py-20 sm:py-28 bg-[#f8f9fa] border-t border-zinc-100 scroll-mt-24">
      <Container>
        <SectionHeading
          title={faqData.heading}
          subtitle={faqData.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info/Support Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm">
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-2 block">
              Support & Guides
            </span>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">
              {faqData.supportCard.title}
            </h3>
            <p className="text-sm font-medium text-emerald-600 mb-6">
              {faqData.supportCard.subtitle}
            </p>
            <div className="pt-6 border-t border-zinc-100">
              <p className="text-sm text-zinc-600 mb-4 font-normal">
                {faqData.supportCard.questionPrompt}
              </p>
              <Button href={faqData.supportCard.button.href} variant="primary" size="md">
                {faqData.supportCard.button.label}
              </Button>
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {faqData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-zinc-100 overflow-hidden transition-all duration-200 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-zinc-900 text-base sm:text-lg hover:text-black transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-700 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-black text-white" : ""
                      }`}
                    >
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-50 animate-in fade-in-50 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
