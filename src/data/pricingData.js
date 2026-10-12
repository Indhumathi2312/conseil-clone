import { ASSETS } from "@/lib/assets";

export const pricingData = {
  id: "pix_section_pricing",
  heading: "Stay in Control with Seamless Access",
  subtitle: "Work faster and smarter with an interface built for focus, speed, and flexibility.",
  perks: [
    { label: "7 Days free trial", icon: "check" },
    { label: "No credit card", icon: "check" },
    { label: "Premium Support", icon: "check" },
  ],
  plans: [
    {
      id: "basic",
      name: "Basic",
      monthlyPrice: "$0",
      annualPrice: "$0",
      period: "/month",
      billingNote: "Use for free forever",
      button: { label: "Get Started Now", href: "#", variant: "light" },
      features: [
        "Limited Access to Features",
        "1 User License",
        "New Robust Features",
      ],
      recommended: false,
    },
    {
      id: "premium",
      name: "Premium",
      badge: "Recommended",
      monthlyPrice: "$199",
      annualPrice: "$159",
      period: "/month",
      billingNoteAnnual: "Billed annually $1,908",
      billingNoteMonthly: "Billed monthly $199",
      button: { label: "Get Started Now", href: "#", variant: "primary" },
      features: [
        "Unlimited Access to Features",
        "Up to 20 Users",
        "24/7 Support",
      ],
      recommended: true,
    },
  ],
  paymentInfo: {
    title: "Secure payment",
    description: "Payments are securely handled by the most popular payment methods",
    methods: [
      { name: "Visa", src: ASSETS.visa_1 },
      { name: "MasterCard", src: ASSETS.master_card_1 },
      { name: "PayPal", src: ASSETS.paypal_1 },
      { name: "Apple Pay", src: ASSETS.apple_pay_1 },
      { name: "Google Pay", src: ASSETS.google_pay_1 },
      { name: "American Express", src: ASSETS.american_express_1 },
    ],
  },
};

export default pricingData;
