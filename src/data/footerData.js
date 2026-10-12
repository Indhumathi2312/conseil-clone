import { ASSETS } from "@/lib/assets";

export const footerData = {
  logo: {
    src: ASSETS.app_logo_1,
    alt: "App",
    width: 86,
    height: 30,
    href: "/",
  },
  links: [
    { label: "Get in touch", href: "#" },
    { label: "Terms of use", href: "#" },
    { label: "Privacy", href: "#" },
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/pixfort",
      ariaLabel: "Facebook",
      icon: "facebook",
    },
    {
      name: "X",
      href: "https://www.twitter.com/pixfort",
      ariaLabel: "X (Twitter)",
      icon: "x",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pixfort",
      ariaLabel: "Instagram",
      icon: "instagram",
    },
    {
      name: "Dribbble",
      href: "https://www.dribbble.com/pixfort",
      ariaLabel: "Dribbble",
      icon: "dribbble",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/pixfort",
      ariaLabel: "YouTube",
      icon: "youtube",
    },
  ],
  copyright: "pixfort © All rights reserved",
};

export default footerData;
