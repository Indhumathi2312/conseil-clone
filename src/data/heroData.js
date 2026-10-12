import { ASSETS } from "@/lib/assets";

export const heroData = {
  heading: {
    line1Prefix: "Build Apps",
    emoji1: ASSETS.emoji_high_voltage_2,
    line1Suffix: "Quickly",
    line2Text: "And Without Hassle",
    emoji2: ASSETS.emoji_thumbs_up_2,
  },
  description:
    "Manage everything from ideas to deadlines in one clean workspace. Stay focused, organized, and on schedule.",
  buttons: [
    {
      id: "apple-app-store",
      label: "Get it on App Store",
      href: "#pix_section_features",
      platform: "apple",
    },
    {
      id: "google-play",
      label: "Get it on Google Play",
      href: "#pix_section_features",
      platform: "googlePlay",
    },
  ],
  awards: [
    {
      id: "award-winning",
      lines: ["Award Winning Theme"],
      leftLeaf: ASSETS.leafs_light_left_1,
      rightLeaf: ASSETS.leafs_light_right_1,
    },
    {
      id: "innovation",
      lines: ["Recognized for", "Excellence in Innovation"],
      leftLeaf: ASSETS.leafs_light_left_1,
      rightLeaf: ASSETS.leafs_light_right_1,
    },
  ],
};

export default heroData;
