import { ASSETS } from "@/lib/assets";

export const ctaData = {
  heading: "Take Control with an Interface That Just Works",
  subtitle: "Built for teams that value speed and structure, this demo adapts to startups, scaling teams, and established products for measurable outcomes.",
  buttons: [
    {
      label: "Get it on App Store",
      href: "#pix_section_features",
      icon: "apple",
      variant: "primary",
    },
    {
      label: "Get it on Google Play",
      href: "#pix_section_features",
      icon: "googlePlay",
      variant: "light",
    },
  ],
  image: {
    src: ASSETS.cta_phone_3,
    alt: "Interface phone showcase",
  },
};

export default ctaData;
