import { ASSETS } from "@/lib/assets";

export const startupTimeData = {
  id: "startup-showcase",
  heading: "Maximize Your Startup Time",
  features: [
    {
      id: 1,
      title: "New Robust Features",
      icon: "robust",
      description: "Pre-built modular UI components and scalable architecture for modern software.",
    },
    {
      id: 2,
      title: "Advanced Communication Tools",
      icon: "communication",
      description: "Built-in real-time team collaboration, scheduling, and messaging workflows.",
    },
    {
      id: 3,
      title: "Fast Speed Page Builder",
      icon: "builder",
      description: "High-performance visual assembly with instant responsive layouts.",
    },
  ],
  slides: [
    {
      id: 1,
      title: "New Robust Features",
      caption: "Real-time analytics and mobile product telemetry",
      image: ASSETS.carousel_image_1 || "/assets/images/carousel-image-1.webp",
      alt: "Woman outdoors using smartphone with lockscreen analytics and currency graph card",
      badge: "Analytics & UI",
    },
    {
      id: 2,
      title: "Advanced Communication Tools",
      caption: "Team scheduling and synced sprint milestones",
      image: ASSETS.carousel_image_2 || "/assets/images/carousel-image-2.webp",
      alt: "Two teammates discussing work with modern glassmorphism calendar widget",
      badge: "Collaboration",
    },
    {
      id: 3,
      title: "Fast Speed Page Builder",
      caption: "Multi-currency checkout and global scale payments",
      image: ASSETS.carousel_image_3 || "/assets/images/carousel-image-3.webp",
      alt: "Team member carrying notebook with floating GBP and Euro currency cards",
      badge: "Fintech & Speed",
    },
  ],
  button: {
    label: "Schedule a Call",
    href: "#schedule",
  },
};

export default startupTimeData;
