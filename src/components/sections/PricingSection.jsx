"use client";

import { useState } from "react";
import Image from "next/image";
import pricingData from "@/data/pricingData";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id={pricingData.id} className="py-20 sm:py-28 bg-white border-t border-zinc-100 scroll-mt-24">
      <Container>
        <SectionHeading
          title={pricingData.heading}
          subtitle={pricingData.subtitle}
        />

        {/* Perks Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 text-sm font-semibold text-zinc-700">
          {pricingData.perks.map((perk) => (
            <div key={perk.label} className="flex items-center space-x-2">
              <span className="p-1 rounded-full bg-emerald-100 text-emerald-600">
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{perk.label}</span>
            </div>
          ))}
        </div>

        {/* Monthly / Annual Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <span className={`text-sm font-semibold ${!isAnnual ? "text-zinc-900" : "text-zinc-500"}`}>
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 bg-black rounded-full p-1 cursor-pointer transition-colors relative flex items-center"
            aria-label="Toggle annual billing"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-200 ${
                isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <div className="flex items-center space-x-2">
            <span className={`text-sm font-semibold ${isAnnual ? "text-zinc-900" : "text-zinc-500"}`}>
              Annually
            </span>
            <span className="px-2 py-0.5 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingData.plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const note =
              plan.id === "basic"
                ? plan.billingNote
                : isAnnual
                ? plan.billingNoteAnnual
                : plan.billingNoteMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.recommended
                    ? "bg-zinc-950 text-white shadow-xl border-2 border-zinc-900"
                    : "bg-[#f8f9fa] text-zinc-900 border border-zinc-200/80 hover:bg-white hover:shadow-lg"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className={`text-xl font-bold mb-4 ${plan.recommended ? "text-white" : "text-zinc-900"}`}>
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {price}
                    </span>
                    <span className={`ml-2 text-sm font-medium ${plan.recommended ? "text-zinc-400" : "text-zinc-500"}`}>
                      {plan.period}
                    </span>
                  </div>

                  <p className={`text-xs mb-8 ${plan.recommended ? "text-zinc-400" : "text-zinc-500"}`}>
                    {note}
                  </p>

                  <div className="mb-8">
                    <Button
                      href={plan.button.href}
                      variant={plan.recommended ? "white" : "primary"}
                      className="w-full"
                    >
                      {plan.button.label}
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-6 border-t border-zinc-200/20">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-sm">
                        <span className={`p-0.5 rounded-full ${plan.recommended ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-100 text-emerald-600"}`}>
                          <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className={plan.recommended ? "text-zinc-300" : "text-zinc-700"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secure Payment and Logos Footer */}
        <div className="text-center pt-8 border-t border-zinc-100 max-w-2xl mx-auto">
          <h4 className="text-sm font-bold text-zinc-900 mb-1">
            {pricingData.paymentInfo.title}
          </h4>
          <p className="text-xs text-zinc-500 mb-6">
            {pricingData.paymentInfo.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {pricingData.paymentInfo.methods.map((method) => (
              <div
                key={method.name}
                className="p-2 bg-[#f8f9fa] rounded-xl border border-zinc-100 flex items-center justify-center"
                title={method.name}
              >
                <Image
                  src={method.src}
                  alt={method.name}
                  width={50}
                  height={30}
                  className="h-6 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
