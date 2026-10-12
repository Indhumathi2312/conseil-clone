import { Inter, Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata = {
  title: "App Homepage - App | Conseil",
  description: "Manage everything from ideas to deadlines in one clean workspace. Stay focused, organized, and on schedule.",
  keywords: "App, productivity, workspace, Next.js, Conseil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#18181b] bg-white selection:bg-black selection:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
