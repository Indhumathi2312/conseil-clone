import { ASSETS } from "@/lib/assets";

export const ctaData = {
  id: "pix_section_cta",
  heading: "Take Control with an Interface That Just Works",
  subtitle:
    "Built for teams that value speed and structure, this demo adapts to startups, scaling teams, and established products for measurable outcomes.",
  backgroundImage: ASSETS.cta_bg,
  girlsImage: ASSETS.cta_girls_transparent,
  phoneImage: ASSETS.cta_phone_3,
  buttons: [
    {
      id: "app-store",
      label: "Get it on App Store",
      href: "#pix_section_features",
      type: "apple",
    },
    {
      id: "google-play",
      label: "Get it on Google Play",
      href: "#pix_section_features",
      type: "android",
    },
  ],
};

export default ctaData;
