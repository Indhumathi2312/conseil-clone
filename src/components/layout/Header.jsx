"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import headerData from "@/data/headerData";

// Shared vector icons
function FacebookIcon({ className = "w-[14px] h-[14px]" }) {
  return (
    <svg className={className} viewBox="2 2 20 20" aria-hidden="true">
      <path
        d="M12,2 C17.5228403,2 22,6.49603007 22,12.042148 C22,17.1426622 18.2133748,21.3550488 13.3091699,21.999013 L13.299,21.999 L13.2993358,14.2432707 L15.476925,14.2432707 L15.7655715,11.5132627 L13.2993358,11.5132627 L13.3029934,10.1467742 C13.3029934,9.43472725 13.3703545,9.05337521 14.3888162,9.05337521 L15.750301,9.05337521 L15.750301,6.32290806 L13.5722241,6.32290806 C10.9559654,6.32290806 10.0352533,7.64718738 10.0352533,9.87454164 L10.0352533,11.5134769 L8.404355,11.5134769 L8.404355,14.2437298 L10.0352533,14.2437298 L10.0352533,21.8900234 C5.45236562,20.9728053 2,16.9123412 2,12.042148 C2,6.49603007 6.47715974,2 12,2 Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function XIcon({ className = "w-[12px] h-[12px]" }) {
  return (
    <svg className={className} viewBox="2 2 20 20" aria-hidden="true">
      <path d="M17.7511704,3 L20.8179669,3 L14.1179252,10.6577203 L22,21.0781532 L15.8283966,21.0781532 L10.9945766,14.7582163 L5.46358875,21.0781532 L2.39493812,21.0781532 L9.56130348,12.8873592 L2,3 L8.32828072,3 L12.6976313,8.77666528 L17.7511704,3 Z M16.674825,19.2425254 L18.3741714,19.2425254 L7.40490428,4.73921105 L5.58132851,4.73921105 L16.674825,19.2425254 Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-[14px] h-[14px]" }) {
  return (
    <svg className={className} viewBox="2 2 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8.66747445,12 C8.66747445,10.1591276 10.1594572,8.66639742 12.0004039,8.66639742 C13.8413506,8.66639742 15.3341411,10.1591276 15.3341411,12 C15.3341411,13.8408724 13.8413506,15.3336026 12.0004039,15.3336026 C10.1594572,15.3336026 8.66747445,13.8408724 8.66747445,12 M6.86530151,12 C6.86530151,14.8360258 9.1642635,17.134895 12.0004039,17.134895 C14.8365443,17.134895 17.1355063,14.8360258 17.1355063,12 C17.1355063,9.16397415 14.8365443,6.86510501 12.0004039,6.86510501 C9.1642635,6.86510501 6.86530151,9.16397415 6.86530151,12 M16.138697,6.66155089 C16.138697,7.32390953 16.6758754,7.86187399 17.3390686,7.86187399 C18.001454,7.86187399 18.5394402,7.32390953 18.5394402,6.66155089 C18.5394402,5.99919225 18.0022618,5.46203554 17.3390686,5.46203554 C16.6758754,5.46203554 16.138697,5.99919225 16.138697,6.66155089 M7.95985298,20.1397415 C6.98485399,20.095315 6.45494568,19.9329564 6.10275051,19.7956381 C5.63584959,19.6138934 5.30304132,19.3974152 4.95246173,19.0476575 C4.60268993,18.6978998 4.38539521,18.365105 4.20445091,17.8982229 C4.06712711,17.546042 3.9047619,17.0161551 3.86033362,16.0411955 C3.81186639,14.9870759 3.80217295,14.6704362 3.80217295,12 C3.80217295,9.32956381 3.81267418,9.01373183 3.86033362,7.95880452 C3.9047619,6.98384491 4.06793489,6.45476575 4.20445091,6.10177706 C4.386203,5.63489499 4.60268993,5.30210016 4.95246173,4.95153473 C5.30223353,4.60177706 5.6350418,4.38449111 6.10275051,4.20355412 C6.45494568,4.06623586 6.98485399,3.90387722 7.95985298,3.85945073 C9.01401511,3.81098546 9.33066764,3.80129241 12.0004039,3.80129241 C14.6709479,3.80129241 14.9867927,3.81179321 16.0417626,3.85945073 C17.0167616,3.90387722 17.5458621,4.06704362 17.8988651,4.20355412 C18.365766,4.38449111 18.6985743,4.60177706 19.0491538,4.95153473 C19.3989256,5.30129241 19.6154126,5.63489499 19.7971647,6.10177706 C19.9344885,6.453958 20.0968537,6.98384491 20.141282,7.95880452 C20.1897492,9.01373183 20.1994426,9.32956381 20.1994426,12 C20.1994426,14.6696284 20.1897492,14.9862682 20.141282,16.0411955 C20.0968537,17.0161551 19.9336807,17.546042 19.7971647,17.8982229 C19.6154126,18.365105 19.3989256,18.6978998 19.0491538,19.0476575 C18.699382,19.3974152 18.365766,19.6138934 17.8988651,19.7956381 C17.5466699,19.9329564 17.0167616,20.095315 16.0417626,20.1397415 C14.9876005,20.1882068 14.6709479,20.1978998 12.0004039,20.1978998 C9.33066764,20.1978998 9.01401511,20.1882068 7.95985298,20.1397415 M7.8774587,2.06058158 C6.81279535,2.10904685 6.08578699,2.27786753 5.45005856,2.52504039 C4.79251989,2.78029079 4.23514682,3.12277868 3.67858153,3.67851373 C3.12282402,4.23424879 2.78032231,4.79159935 2.52506159,5.44991922 C2.27787875,6.08562197 2.10905125,6.81260097 2.06058403,7.87722132 C2.01130902,8.94345719 2,9.28432956 2,12 C2,14.7156704 2.01130902,15.0565428 2.06058403,16.1227787 C2.10905125,17.187399 2.27787875,17.914378 2.52506159,18.5500808 C2.78032231,19.2075929 3.12201624,19.7657512 3.67858153,20.3214863 C4.23433903,20.8772213 4.7917121,21.2189015 5.45005856,21.4749596 C6.08659477,21.7221325 6.81279535,21.8909532 7.8774587,21.9394184 C8.94454542,21.9878837 9.28462377,22 12.0004039,22 C14.7169918,22 15.0570702,21.9886914 16.1233491,21.9394184 C17.1880124,21.8909532 17.9150208,21.7221325 18.5507492,21.4749596 C19.2082879,21.2189015 19.765661,20.8772213 20.3222263,20.3214863 C20.8779838,19.7657512 21.2196777,19.2075929 21.4757462,18.5500808 C21.722929,17.914378 21.8925643,17.187399 21.9402238,16.1227787 C21.988691,15.0557351 22,14.7156704 22,12 C22,9.28432956 21.988691,8.94345719 21.9402238,7.87722132 C21.8917565,6.81260097 21.722929,6.08562197 21.4757462,5.44991922 C21.2196777,4.79240711 20.8779838,4.23505654 20.3222263,3.67851373 C19.7664688,3.12277868 19.2082879,2.78029079 18.551557,2.52504039 C17.9150208,2.27786753 17.1880124,2.1082391 16.1241569,2.06058158 C15.0578779,2.01211632 14.7169918,2 12.0012117,2 C9.28462377,2 8.94454542,2.01130856 7.8774587,2.06058158"
      />
    </svg>
  );
}

function DownloadArrowIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="2 2 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12.7071068,6.29289322 C12.3165825,5.90236893 11.6834175,5.90236893 11.2928932,6.29289322 C10.9023689,6.68341751 10.9023689,7.31658249 11.2928932,7.70710678 L14.585,11 L7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 L14.584,13 L11.2928932,16.2928932 C10.9023689,16.6834175 10.9023689,17.3165825 11.2928932,17.7071068 C11.6834175,18.0976311 12.3165825,18.0976311 12.7071068,17.7071068 L17.7071068,12.7071068 L17.7854516,12.6190789 L17.844312,12.5360882 L17.9063266,12.4232215 L17.9502619,12.3121425 L17.9797599,12.2007258 L17.9972121,12.0752385 L18,12 L17.9930928,11.8819045 L17.9641549,11.734007 L17.9287745,11.628664 L17.8753288,11.5159379 L17.8036654,11.4046934 C17.774687,11.3656744 17.7425008,11.3282873 17.7071068,11.2928932 Z"
        transform="translate(12.000000, 12.000000) rotate(90.000000) translate(-12.000000, -12.000000)"
      />
    </svg>
  );
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        // Switch to the sticky header once user scrolls past the hero section
        setIsSticky(heroRect.bottom <= 70);
      } else {
        setIsSticky(window.scrollY > 480);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      {/* 1. HERO SECTION NAVBAR (Shown only when in the Hero section) */}
      {!isSticky && (
        <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between transition-all duration-300 animate-in fade-in duration-200">
          {/* LEFT SIDE — White Navigation Pill */}
          <div className="bg-white/95 backdrop-blur-[20px] rounded-[15px] border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] px-3.5 sm:px-5 h-[42px] sm:h-[44px] flex items-center shrink-0 pointer-events-auto">
            {/* Logo */}
            <Link
              href={headerData.logo.href}
              className="flex items-center shrink-0 mr-5 sm:mr-6 lg:mr-7 select-none"
            >
              <Image
                src={headerData.logo.src}
                alt={headerData.logo.alt}
                width={86}
                height={30}
                className="h-[20px] sm:h-[22px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
              {headerData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-semibold text-[#1b4332] hover:text-black transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-2 p-1 text-[#1b4332] hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* RIGHT SIDE — Social Media and Download Button outside the white container */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5 lg:space-x-4 shrink-0 pointer-events-auto">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-2.5 sm:space-x-3 text-[#1b4332]">
              <a
                href="https://www.facebook.com/pixfort"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="hover:opacity-75 transition-opacity flex items-center justify-center p-0.5"
              >
                <FacebookIcon className="w-[14px] h-[14px] fill-current" />
              </a>

              <a
                href="https://www.twitter.com/pixfort"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="hover:opacity-75 transition-opacity flex items-center justify-center p-0.5"
              >
                <XIcon className="w-[12px] h-[12px] fill-current" />
              </a>

              <a
                href="https://www.instagram.com/pixfort"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="hover:opacity-75 transition-opacity flex items-center justify-center p-0.5"
              >
                <InstagramIcon className="w-[14px] h-[14px] fill-current" />
              </a>
            </div>

            {/* Dark Green Download Button */}
            <a
              href={headerData.downloadButton.href}
              className="inline-flex items-center justify-center gap-1.5 bg-[#1b4332] text-white text-[12.5px] sm:text-[13px] font-semibold px-3.5 sm:px-4 h-[33px] sm:h-[35px] rounded-[10px] hover:bg-[#143527] transition-all duration-150 active:scale-95 shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>{headerData.downloadButton.label}</span>
              <DownloadArrowIcon className="w-3.5 h-3.5 fill-white shrink-0" />
            </a>
          </div>
        </div>
      )}

      {/* 2. STICKY UNIFIED HEADER (Active from Next Section Onwards — Exact Matching Reference Image) */}
      {isSticky && (
        <div className="w-full max-w-[1140px] mx-auto bg-white/95 backdrop-blur-[20px] rounded-[18px] sm:rounded-[20px] border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-4 sm:px-5 md:px-6 h-[50px] sm:h-[54px] flex items-center justify-between pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-top-3">
          {/* LEFT: Logo + Nav Links inside the single container */}
          <div className="flex items-center shrink-0">
            <Link
              href={headerData.logo.href}
              className="flex items-center shrink-0 mr-6 sm:mr-8 lg:mr-9 select-none"
            >
              <Image
                src={headerData.logo.src}
                alt={headerData.logo.alt}
                width={86}
                height={30}
                className="h-[21px] sm:h-[23px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
              {headerData.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] sm:text-[14px] font-heading font-bold text-[#194536] hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT: Social Media Icons + Download Button inside the SAME container */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            {/* Social Icons (Inside the container) */}
            <div className="hidden sm:flex items-center space-x-3 text-[#194536]">
              <a
                href="https://www.facebook.com/pixfort"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="hover:opacity-75 transition-opacity flex items-center justify-center p-0.5"
              >
                <FacebookIcon className="w-[14px] h-[14px] fill-current" />
              </a>

              <a
                href="https://www.twitter.com/pixfort"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="hover:opacity-75 transition-opacity flex items-center justify-center p-0.5"
              >
                <XIcon className="w-[12px] h-[12px] fill-current" />
              </a>

              <a
                href="https://www.instagram.com/pixfort"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="hover:opacity-75 transition-opacity flex items-center justify-center p-0.5"
              >
                <InstagramIcon className="w-[14px] h-[14px] fill-current" />
              </a>
            </div>

            {/* Dark Green Download Button */}
            <a
              href={headerData.downloadButton.href}
              className="inline-flex items-center justify-center gap-1.5 bg-[#194536] hover:bg-[#14372b] text-white text-[12.5px] sm:text-[13px] font-bold px-3.5 sm:px-4 h-[35px] sm:h-[37px] rounded-[11px] transition-all duration-150 active:scale-95 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>{headerData.downloadButton.label}</span>
              <DownloadArrowIcon className="w-3.5 h-3.5 fill-white shrink-0" />
            </a>

            {/* Mobile Hamburger Toggle for sticky header */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-[#194536] hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Card */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 w-full max-w-[1140px] mx-auto bg-white/95 backdrop-blur-xl rounded-[18px] p-5 shadow-xl border border-black/[0.06] pointer-events-auto animate-in fade-in-50 slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {headerData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#194536] hover:text-black py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-200/80 flex items-center space-x-4 text-[#194536]">
              <a href="https://www.facebook.com/pixfort" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a href="https://www.twitter.com/pixfort" target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a href="https://www.instagram.com/pixfort" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
