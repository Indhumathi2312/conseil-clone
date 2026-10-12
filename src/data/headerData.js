import { ASSETS } from "@/lib/assets";

export const headerData = {
  logo: {
    src: ASSETS.app_logo_1,
    alt: "App",
    width: 86,
    height: 30,
    href: "/",
  },
  navLinks: [
    { label: "Overview", href: "#pix_section_overview" },
    { label: "Features", href: "#pix_section_features" },
    { label: "Reviews", href: "#pix_section_reviews" },
    { label: "Pricing", href: "#pix_section_pricing" },
    { label: "FAQ", href: "#pix_section_faq" },
  ],
  socialLinks: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/pixfort",
      ariaLabel: "Facebook",
    },
    {
      name: "X",
      href: "https://www.twitter.com/pixfort",
      ariaLabel: "X (Twitter)",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pixfort",
      ariaLabel: "Instagram",
    },
  ],
  downloadButton: {
    label: "Download",
    href: "#pix_section_features",
  },
};

export default headerData;
