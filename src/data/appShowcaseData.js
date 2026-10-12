import { ASSETS } from "@/lib/assets";

export const appShowcaseData = {
  sectionId: "pix_section_showcase",
  screens: [
    {
      id: "welcome-back",
      title: "Welcome Back",
      subtitle: "Sign in to continue your journey",
      src: ASSETS.app_screen_1,
      alt: "Welcome Back - Login screen",
    },
    {
      id: "confirm-really-you",
      title: "Confirm It's Really You",
      subtitle: "Enter the 4-digit code from your email",
      src: ASSETS.app_screen_3,
      alt: "Confirm It's Really You - Verification screen",
    },
    {
      id: "add-new-card",
      title: "Add New Card",
      subtitle: "Payment and form screen",
      src: ASSETS.app_screen_2,
      alt: "Add New Card - Payment screen",
    },
    {
      id: "discover-app",
      title: "Discover App",
      subtitle: "Join thousands of satisfied users",
      src: ASSETS.app_screen_4,
      alt: "Discover App showcase screen",
    },
    {
      id: "my-profile",
      title: "My Profile",
      subtitle: "Add and update your information",
      src: ASSETS.app_screen_6,
      alt: "My Profile screen",
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      subtitle: "Strategic advisory crafted for discerning leaders",
      src: ASSETS.app_screen_5,
      alt: "Who We Are onboarding screen",
    },
  ],
  trustData: {
    heading: "Trusted by over 2,000 of the world’s leading companies",
    badges: [
      {
        id: "tripadvisor",
        score: "4.7",
        source: "on Tripadvisor",
      },
      {
        id: "reviews",
        score: "4.8",
        source: "on Reviews",
      },
      {
        id: "google",
        score: "4.6",
        source: "on Google",
      },
    ],
  },
};

export default appShowcaseData;
