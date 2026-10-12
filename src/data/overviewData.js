import { ASSETS } from "@/lib/assets";

export const overviewData = {
  id: "pix_section_overview",
  badge: "Overview",
  heading: {
    line1: "Achieve More with",
    line2: "Effortless Organization",
  },
  subtitle: "Work faster and smarter with an interface built for focus, speed, and flexibility.",
  cards: {
    secured: {
      title: "Fully Secured",
      description: "Your data and websites are protected with enterprise-grade encryption.",
      button: { label: "Get Early Access", href: "#" },
      image: ASSETS.bento_phone_2,
    },
    integrations: {
      title: "Integrations Hub",
      description: "Connect seamlessly with tools you already use to boost productivity.",
      button: { label: "Try for Free", href: "#" },
      columns: {
        col1: [
          { name: "Frame", src: ASSETS.Frame },
          { name: "Sketch", src: ASSETS.sketch },
          { name: "Facebook", src: ASSETS.Facebook },
          { name: "Zapier", src: ASSETS.zapier },
        ],
        col2: [
          { name: "WhatsApp", src: ASSETS.whatsapp },
          { name: "HTML5", src: ASSETS.html_5 },
          { name: "Notion", src: ASSETS.notion },
          { name: "App Store", src: ASSETS.app_store },
        ],
        col3: [
          { name: "Gmail", src: ASSETS.gmail },
          { name: "Telegram", src: ASSETS.telegram },
          { name: "Spotify", src: ASSETS.spotify },
          { name: "YouTube", src: ASSETS.youtube },
        ],
      },
    },
    worldwide: {
      title: "Worldwide Coverage",
      description: "Reach customers globally with optimized performance and delivery.",
      button: { label: "Try the Platform", href: "#" },
      image: ASSETS.flags_1,
    },
    insights: {
      title: "Data Insights",
      description: "Track performance in real-time and make data-driven decisions easily.",
      button: { label: "Explore the System", href: "#" },
      image: ASSETS.bento_iimage_1,
    },
    reporting: {
      title: "Automated Reporting",
      description: "Generate clean, clear reports without lifting a finger — on autopilot.",
      button: { label: "Schedule a Demo", href: "#" },
      video: ASSETS.video_placeholder,
    },
  },
};

export default overviewData;
