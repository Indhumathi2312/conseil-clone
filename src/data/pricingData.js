import { ASSETS } from "@/lib/assets";

export const pricingData = {
  id: "pix_section_pricing",
  heading: "Stay in Control with Seamless Access",
  subtitle: "Work faster and smarter with an interface built for focus, speed, and flexibility.",
  perks: [
    { label: "7 Days free trial", type: "trial" },
    { label: "No credit card", type: "card" },
    { label: "Premium Support", type: "support" },
  ],
  plans: [
    {
      id: "basic",
      name: "Basic",
      price: "Free",
      period: "/month",
      billingNote: "Use for free forever",
      button: { label: "Get Started Now", href: "#" },
      features: [
        { label: "Limited Access to Features", type: "lock" },
        { label: "1 User License", type: "user" },
        { label: "New Robust Features", type: "arrows" },
      ],
      recommended: false,
    },
    {
      id: "premium",
      name: "Premium",
      badge: "Recommended",
      price: "$159",
      period: "/month",
      billingNote: "Billed annually $1,908",
      backgroundImage: ASSETS.carousel_image_3,
      button: { label: "Get Started Now", href: "#" },
      features: [
        { label: "Unlimited Access to Features", type: "lightning" },
        { label: "Up to 20 Users", type: "users" },
        { label: "24/7 Support", type: "cycle" },
      ],
      recommended: true,
    },
  ],
  paymentInfo: {
    badge: "Secure payment",
    description: "Payments are securely handled by the most popular payment methods",
    methods: [
      { name: "Visa", src: ASSETS.visa_1, width: 48, height: 20 },
      { name: "MasterCard", src: ASSETS.master_card_1, width: 38, height: 24 },
      { name: "PayPal", src: ASSETS.paypal_1, width: 68, height: 20 },
      { name: "American Express", src: ASSETS.american_express_1, width: 56, height: 22 },
      { name: "Apple Pay", src: ASSETS.apple_pay_1, width: 44, height: 20 },
      { name: "Google Pay", src: ASSETS.google_pay_1, width: 46, height: 20 },
    ],
  },
};

export default pricingData;
