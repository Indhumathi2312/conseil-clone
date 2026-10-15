import { ASSETS } from "@/lib/assets";

export const featuresData = {
  id: "pix_section_features",
  badge: "Performance Driven",
  heading: "Turning Complex Systems Into Clear, Scalable Solutions",
  description: "Each component is modular, reusable, and optimized for real-world use cases. Teams can move faster while maintaining consistency.",
  highlights: [
    "Modular architecture tailored for scaling enterprises",
    "Optimized execution speeds with immediate feedback loops",
    "Frictionless handoff across engineering and design teams",
  ],
  buttons: [
    { label: "Start Building", href: "#", variant: "primary" },
    { label: "Let's Begin", href: "#", variant: "light" },
  ],
  performanceCard: {
    badge: "Performance Driven",
    title: "Performance Driven",
    description: "Consistent patterns support rapid iteration while maintaining visual and functional coherence.",
    button: { label: "Let's Begin", href: "#" },
  },
  image: {
    src: ASSETS.content_image_2,
    alt: "Turning Complex Systems into Scalable Solutions",
  },
};

export default featuresData;
