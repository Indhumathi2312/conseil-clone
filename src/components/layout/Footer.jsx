"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import footerData from "@/data/footerData";

// Exact SVG icons matching original Conseil App template
function SocialIcon({ icon }) {
  switch (icon) {
    case "facebook":
      return (
        <svg
          className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="2 2 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12,2 C17.5228403,2 22,6.49603007 22,12.042148 C22,17.1426622 18.2133748,21.3550488 13.3091699,21.999013 L13.299,21.999 L13.2993358,14.2432707 L15.476925,14.2432707 L15.7655715,11.5132627 L13.2993358,11.5132627 L13.3029934,10.1467742 C13.3029934,9.43472725 13.3703545,9.05337521 14.3888162,9.05337521 L15.750301,9.05337521 L15.750301,6.32290806 L13.5722241,6.32290806 C10.9559654,6.32290806 10.0352533,7.64718738 10.0352533,9.87454164 L10.0352533,11.5134769 L8.404355,11.5134769 L8.404355,14.2437298 L10.0352533,14.2437298 L10.0352533,21.8900234 C5.45236562,20.9728053 2,16.9123412 2,12.042148 C2,6.49603007 6.47715974,2 12,2 Z"
          />
        </svg>
      );
    case "x":
      return (
        <svg
          className="w-[13px] h-[13px] fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="2 2 20 20"
          aria-hidden="true"
        >
          <path d="M17.7511704,3 L20.8179669,3 L14.1179252,10.6577203 L22,21.0781532 L15.8283966,21.0781532 L10.9945766,14.7582163 L5.46358875,21.0781532 L2.39493812,21.0781532 L9.56130348,12.8873592 L2,3 L8.32828072,3 L12.6976313,8.77666528 L17.7511704,3 Z M16.674825,19.2425254 L18.3741714,19.2425254 L7.40490428,4.73921105 L5.58132851,4.73921105 L16.674825,19.2425254 Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="2 2 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8.66747445,12 C8.66747445,10.1591276 10.1594572,8.66639742 12.0004039,8.66639742 C13.8413506,8.66639742 15.3341411,10.1591276 15.3341411,12 C15.3341411,13.8408724 13.8413506,15.3336026 12.0004039,15.3336026 C10.1594572,15.3336026 8.66747445,13.8408724 8.66747445,12 M6.86530151,12 C6.86530151,14.8360258 9.1642635,17.134895 12.0004039,17.134895 C14.8365443,17.134895 17.1355063,14.8360258 17.1355063,12 C17.1355063,9.16397415 14.8365443,6.86510501 12.0004039,6.86510501 C9.1642635,6.86510501 6.86530151,9.16397415 6.86530151,12 M16.138697,6.66155089 C16.138697,7.32390953 16.6758754,7.86187399 17.3390686,7.86187399 C18.001454,7.86187399 18.5394402,7.32390953 18.5394402,6.66155089 C18.5394402,5.99919225 18.0022618,5.46203554 17.3390686,5.46203554 C16.6758754,5.46203554 16.138697,5.99919225 16.138697,6.66155089 M7.95985298,20.1397415 C6.98485399,20.095315 6.45494568,19.9329564 6.10275051,19.7956381 C5.63584959,19.6138934 5.30304132,19.3974152 4.95246173,19.0476575 C4.60268993,18.6978998 4.38539521,18.365105 4.20445091,17.8982229 C4.06712711,17.546042 3.9047619,17.0161551 3.86033362,16.0411955 C3.81186639,14.9870759 3.80217295,14.6704362 3.80217295,12 C3.80217295,9.32956381 3.81267418,9.01373183 3.86033362,7.95880452 C3.9047619,6.98384491 4.06793489,6.45476575 4.20445091,6.10177706 C4.386203,5.63489499 4.60268993,5.30210016 4.95246173,4.95153473 C5.30223353,4.60177706 5.6350418,4.38449111 6.10275051,4.20355412 C6.45494568,4.06623586 6.98485399,3.90387722 7.95985298,3.85945073 C9.01401511,3.81098546 9.33066764,3.80129241 12.0004039,3.80129241 C14.6709479,3.80129241 14.9867927,3.81179321 16.0417626,3.85945073 C17.0167616,3.90387722 17.5458621,4.06704362 17.8988651,4.20355412 C18.365766,4.38449111 18.6985743,4.60177706 19.0491538,4.95153473 C19.3989256,5.30129241 19.6154126,5.63489499 19.7971647,6.10177706 C19.9344885,6.453958 20.0968537,6.98384491 20.141282,7.95880452 C20.1897492,9.01373183 20.1994426,9.32956381 20.1994426,12 C20.1994426,14.6696284 20.1897492,14.9862682 20.141282,16.0411955 C20.0968537,17.0161551 19.9336807,17.546042 19.7971647,17.8982229 C19.6154126,18.365105 19.3989256,18.6978998 19.0491538,19.0476575 C18.699382,19.3974152 18.365766,19.6138934 17.8988651,19.7956381 C17.5466699,19.9329564 17.0167616,20.095315 16.0417626,20.1397415 C14.9876005,20.1882068 14.6709479,20.1978998 12.0004039,20.1978998 C9.33066764,20.1978998 9.01401511,20.1882068 7.95985298,20.1397415 M7.8774587,2.06058158 C6.81279535,2.10904685 6.08578699,2.27786753 5.45005856,2.52504039 C4.79251989,2.78029079 4.23514682,3.12277868 3.67858153,3.67851373 C3.12282402,4.23424879 2.78032231,4.79159935 2.52506159,5.44991922 C2.27787875,6.08562197 2.10905125,6.81260097 2.06058403,7.87722132 C2.01130902,8.94345719 2,9.28432956 2,12 C2,14.7156704 2.01130902,15.0565428 2.06058403,16.1227787 C2.10905125,17.187399 2.27787875,17.914378 2.52506159,18.5500808 C2.78032231,19.2075929 3.12201624,19.7657512 3.67858153,20.3214863 C4.23433903,20.8772213 4.7917121,21.2189015 5.45005856,21.4749596 C6.08659477,21.7221325 6.81279535,21.8909532 7.8774587,21.9394184 C8.94454542,21.9878837 9.28462377,22 12.0004039,22 C14.7169918,22 15.0570702,21.9886914 16.1233491,21.9394184 C17.1880124,21.8909532 17.9150208,21.7221325 18.5507492,21.4749596 C19.2082879,21.2189015 19.765661,20.8772213 20.3222263,20.3214863 C20.8779838,19.7657512 21.2196777,19.2075929 21.4757462,18.5500808 C21.722929,17.914378 21.8925643,17.187399 21.9402238,16.1227787 C21.988691,15.0557351 22,14.7156704 22,12 C22,9.28432956 21.988691,8.94345719 21.9402238,7.87722132 C21.8917565,6.81260097 21.722929,6.08562197 21.4757462,5.44991922 C21.2196777,4.79240711 20.8779838,4.23505654 20.3222263,3.67851373 C19.7664688,3.12277868 19.2082879,2.78029079 18.551557,2.52504039 C17.9150208,2.27786753 17.1880124,2.1082391 16.1241569,2.06058158 C15.0578779,2.01211632 14.7169918,2 12.0012117,2 C9.28462377,2 8.94454542,2.01130856 7.8774587,2.06058158"
          />
        </svg>
      );
    case "dribbble":
      return (
        <svg
          className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="2 2 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2,12 C2,10.18666 2.44668,8.51334 3.34,6.98 C4.23334,5.44666 5.44668,4.23334 6.98,3.34 C8.51334,2.44666 10.18668,2 12,2 C13.81334,2 15.48668,2.44666 17.02,3.34 C18.55334,4.23334 19.76668,5.44666 20.66,6.98 C21.55334,8.51334 22,10.18666 22,12 C22,13.81334 21.55334,15.48666 20.66,17.02 C19.76668,18.55334 18.55334,19.76666 17.02,20.66 C15.48668,21.55334 13.81334,22 12,22 C10.18668,22 8.51334,21.55334 6.98,20.66 C5.44668,19.76666 4.23334,18.55334 3.34,17.02 C2.44668,15.48666 2,13.81334 2,12 Z M3.66,12 C3.66,14.08 4.36,15.91334 5.76,17.5 C6.4,16.24666 7.41334,15.05334 8.8,13.92 C10.18668,12.78666 11.54,12.07334 12.86,11.78 C12.66,11.31334 12.46668,10.89334 12.28,10.52 C9.98668,11.25334 7.50668,11.62 4.84,11.62 C4.32,11.62 3.93334,11.61334 3.68,11.6 C3.68,11.65334 3.67668,11.72 3.67,11.8 C3.66334,11.88 3.66,11.94666 3.66,12 Z M3.92,9.94 C4.21334,9.96666 4.64668,9.98 5.22,9.98 C7.44668,9.98 9.56,9.68 11.56,9.08 C10.54668,7.28 9.43334,5.78 8.22,4.58 C7.16668,5.11334 6.26334,5.85334 5.51,6.8 C4.75668,7.74666 4.22668,8.79334 3.92,9.94 Z M6.9,18.58 C8.40668,19.75334 10.10668,20.34 12,20.34 C12.98668,20.34 13.96668,20.15334 14.94,19.78 C14.67334,17.5 14.15334,15.29334 13.38,13.16 C12.15334,13.42666 10.91668,14.1 9.67,15.18 C8.42334,16.26 7.5,17.39334 6.9,18.58 Z M9.96,3.94 C11.13334,5.15334 12.22,6.66666 13.22,8.48 C15.03334,7.72 16.4,6.75334 17.32,5.58 C15.77334,4.3 14,3.66 12,3.66 C11.32,3.66 10.64,3.75334 9.96,3.94 Z M13.94,9.9 C14.14,10.32666 14.36668,10.86666 14.62,11.52 C15.60668,11.42666 16.68,11.38 17.84,11.38 C18.66668,11.38 19.48668,11.4 20.3,11.44 C20.19334,9.62666 19.54,8.01334 18.34,6.6 C17.47334,7.89334 16.00668,8.99334 13.94,9.9 Z M15.12,12.92 C15.8,14.89334 16.26,16.92 16.5,19 C17.55334,18.32 18.41334,17.44666 19.08,16.38 C19.74668,15.31334 20.14668,14.16 20.28,12.92 C19.30668,12.85334 18.42,12.82 17.62,12.82 C16.88668,12.82 16.05334,12.85334 15.12,12.92 Z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg
          className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="2 2 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.4315186,18.8905856 L8.3328397,18.8156838 C7.00577805,18.7895832 5.67541376,18.8416844 4.37437293,18.5712779 C2.39518958,18.1672681 2.25497741,16.1863203 2.10826004,14.5246801 C1.90609831,12.1886237 1.98436092,9.81016622 2.36586612,7.49361026 C2.58123842,6.19377885 3.42881648,5.41816012 4.73956508,5.33375808 C9.16430487,5.02745068 13.6184682,5.06375155 18.0334001,5.20665501 C18.4996732,5.21975532 18.9691487,5.29135705 19.4289166,5.37285902 C21.6984322,5.77036862 21.7537764,8.01522286 21.9008941,9.90496851 C22.0476115,11.8142146 21.985662,13.733261 21.7052376,15.6295068 C21.4802576,17.1995447 21.0498133,18.5161765 19.23326,18.6432796 C16.9572392,18.8094836 14.7334602,18.9432869 12.4510343,18.9006858 C12.4511343,18.8905856 12.4380238,18.8905856 12.4315186,18.8905856 Z M10.0218909,14.9156896 C11.7370631,13.9316658 13.419509,12.9640424 15.1248733,11.9866188 C13.4064986,11.002595 11.7272552,10.0349717 10.0218909,9.05754804 L10.0218909,14.9156896 Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

// Icons for the marquee ticker (Duotone matching original Pixfort Conseil)
function PhoneChatIcon({ className = "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" }) {
  return (
    <svg
      className={className}
      viewBox="2 2 20 20"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        fillOpacity="0.25"
        d="M11,2 C12.6568542,2 14,3.34314575 14,5 L14,6 L12,6 L12,5 C12,4.44771525 11.5522847,4 11,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,19 C4,19.5522847 4.44771525,20 5,20 L11,20 C11.5522847,20 12,19.5522847 12,19 L12.0009376,18.9535828 C12.2278105,18.8714828 12.44833,18.7603629 12.6574072,18.6192358 L13.6887537,17.9230769 L14,17.923 L14,19 C14,20.6568542 12.6568542,22 11,22 L5,22 C3.34314575,22 2,20.6568542 2,19 L2,5 C2,3.34314575 3.34314575,2 5,2 L11,2 Z"
      />
      <path d="M9,5 C9.55228475,5 10,5.44771525 10,6 C10,6.55228475 9.55228475,7 9,7 L7,7 C6.44771525,7 6,6.55228475 6,6 C6,5.44771525 6.44771525,5 7,5 L9,5 Z M18.9913514,7 C20.6482056,7 21.9913421,8.34314575 21.9913421,10.0043102 L21.9743954,13.9360218 C21.967268,15.5878076 20.6262245,16.9230769 18.9744233,16.9230769 L13.6887537,16.9230769 C13.4893707,16.9230769 13.2945393,16.9826788 13.1292809,17.0942282 L12.0979344,17.7903871 C11.188581,18.4042007 9.95381022,18.1646183 9.33999667,17.2552649 C9.11840076,16.9269747 9,16.539937 9,16.1438572 L9,10 C9,8.34314575 10.3431458,7 12,7 Z M18.9913514,9 L12,9 C11.4477153,9 11,9.44771525 11,10 L11,16.117 L12.0103352,15.4365309 C12.4441385,15.1437137 12.9458672,14.9702134 13.4652345,14.9314136 L13.6887537,14.9230769 L18.9744233,14.9230769 C19.5250237,14.9230769 19.9720382,14.4779872 19.974414,13.9273966 L19.9913514,10 C19.9913514,9.44771525 19.5436361,9 18.9913514,9 Z M17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L14,13 C13.4477153,13 13,12.5522847 13,12 C13,11.4477153 13.4477153,11 14,11 L17,11 Z" />
    </svg>
  );
}

function PlusCircleIcon({ className = "w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" }) {
  return (
    <svg
      className={className}
      viewBox="2 2 20 20"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        fillOpacity="0.25"
        d="M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z"
      />
      <path d="M12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 Z" />
    </svg>
  );
}

function AppleLogoIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="2 2 20 20" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M19.4849126,8.81771657 C18.3302111,7.0992429 16.5316504,6.86372702 15.8913288,6.8363582 C14.3616324,6.67790715 12.9055199,7.7532136 12.1293511,7.7532136 C11.3553049,7.7532136 10.1560285,6.85940563 8.88741352,6.88173282 C7.21903972,6.90694094 5.68085285,7.86989119 4.82260967,9.39030104 C3.08984994,12.450567 4.37898355,16.985148 6.06787595,19.4685081 C6.8935724,20.6820991 7.87775728,22.0483793 9.16901351,21.9986833 C10.4135723,21.9489873 10.8833773,21.1790592 12.3883099,21.1790592 C13.8932425,21.1790592 14.3156424,21.9986833 15.63237,21.9727549 C16.9710313,21.948267 17.8193689,20.7353963 18.6386975,19.5167636 C19.5860905,18.1065493 19.9766513,16.7409893 20,16.671847 C19.970991,16.6581626 17.3906011,15.6519985 17.3637147,12.6270239 C17.3389509,10.0939678 19.3936402,8.87893629 19.4849126,8.81771657 Z M14.8894555,5.1935089 C15.5743519,4.34723624 16.0384966,3.17109731 15.9125549,2 C14.9241248,2.04033299 13.7276786,2.66909557 13.0180184,3.514648 C12.381942,4.26512979 11.826525,5.45999476 11.9751079,6.60948511 C13.0774515,6.69663318 14.2024364,6.03834109 14.8894555,5.1935089 Z"
      />
    </svg>
  );
}

function AndroidLogoIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="2 2 20 20" aria-hidden="true" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M15.0476032,2.91442717 L15.2741547,2.57569467 L15.7840824,1.81577504 C15.8468888,1.7221779 15.8214671,1.59663888 15.7280053,1.53424079 C15.6330481,1.47184269 15.5066877,1.49709906 15.4438814,1.5906962 L14.4337459,3.09567878 C13.694276,2.81117319 12.8703165,2.65146378 11.9992523,2.65146378 C11.1296835,2.65146378 10.3049763,2.81117319 9.56550636,3.09567878 L9.33372103,2.74877509 L8.55611863,1.5906962 C8.49331229,1.49709906 8.3669519,1.47184269 8.27199468,1.53424079 C8.17853286,1.59663888 8.15311124,1.7221779 8.21516989,1.81577504 L9.18343441,3.25835952 C7.44653984,4.06136355 6.27191161,5.58343131 6.27191161,7.32612091 L17.726593,7.32612091 C17.726593,5.58417415 16.5519648,4.06210638 14.8150702,3.25910235 L15.0476032,2.91442717 Z M9.5460663,5.69931349 C9.20661294,5.69931349 8.93220902,5.42669325 8.93220902,5.08944641 C8.93220902,4.75219958 9.20661294,4.48032217 9.5460663,4.48032217 C9.88477195,4.48032217 10.1591759,4.75294241 10.1591759,5.08944641 C10.1591759,5.42595041 9.88477195,5.69931349 9.5460663,5.69931349 Z M14.4546814,5.69931349 C14.1159757,5.69931349 13.8415718,5.42669325 13.8415718,5.08944641 C13.8415718,4.75219958 14.1159757,4.48032217 14.4546814,4.48032217 C14.7941348,4.48032217 15.0685387,4.75294241 15.0685387,5.08944641 C15.0685387,5.42595041 14.7941348,5.69931349 14.4546814,5.69931349 Z M6.273407,8.13803895 L6.273407,17.0802799 C6.273407,17.7904297 6.85436571,18.367612 7.56841406,18.367612 L8.50378001,18.367612 C8.47237684,18.475323 8.45517986,18.5882338 8.45517986,18.7063445 L8.45517986,21.2810087 C8.45517986,21.9540167 9.0047354,22.5 9.68289441,22.5 C10.3610534,22.5 10.9098613,21.9540167 10.9098613,21.2810087 L10.9098613,18.7063445 C10.9098613,18.5897195 10.8919166,18.475323 10.8612611,18.367612 L13.1402343,18.367612 C13.1088311,18.475323 13.0916341,18.5882338 13.0916341,18.7063445 L13.0916341,21.2810087 C13.0916341,21.9540167 13.6411897,22.5 14.318601,22.5 C14.9960123,22.5 15.5455678,21.9540167 15.5455678,21.2810087 L15.5455678,18.7063445 C15.5455678,18.5897195 15.5283709,18.475323 15.4969677,18.367612 L16.4315859,18.367612 C17.146382,18.367612 17.7273407,17.7904297 17.7273407,17.0802799 L17.7273407,8.13803895 L6.36088726,8.13803895 L6.273407,8.13803895 Z M4.22696685,8.13803895 C3.54880784,8.13803895 3,8.68327943 3,9.3577731 L3,14.5732137 C3,15.2462217 3.54955554,15.792205 4.22696685,15.792205 C4.90437817,15.792205 5.4539337,15.2462217 5.4539337,14.5732137 L5.4539337,9.35703027 C5.4539337,8.68327943 4.90437817,8.13803895 4.22696685,8.13803895 Z M19.7737808,8.13803895 C19.0956218,8.13803895 18.546814,8.68327943 18.546814,9.3577731 L18.546814,14.5732137 C18.546814,15.2462217 19.0956218,15.792205 19.7737808,15.792205 C20.4511922,15.792205 21,15.2462217 21,14.5732137 L21,9.35703027 C21,8.68327943 20.4511922,8.13803895 19.7737808,8.13803895 Z"
      />
    </svg>
  );
}

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const popupRef = useRef(null);
  const launcherRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show scroll-to-top after scrolling past 300px
      setShowTopBtn(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside and Escape key to close download popup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        launcherRef.current &&
        !launcherRef.current.contains(e.target)
      ) {
        setIsDownloadOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDownloadOpen(false);
      }
    };

    if (isDownloadOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDownloadOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Base marquee items array
  const baseItems = [
    { type: "text", content: "Wow!" },
    { type: "icon", icon: "phone-chat" },
    { type: "text", content: "Create Apps" },
    { type: "icon", icon: "plus-circle" },
  ];

  // Repeat 4x to form an ultra-smooth continuous infinite loop strip
  const repeatedMarquee = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

  return (
    <footer
      id="pix-page-footer"
      role="contentinfo"
      className="w-full bg-white pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-14 overflow-hidden select-none"
    >
      {/* 1. Centered Rounded Pale Gray/Green Footer Container */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-[#E7EDEA] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] px-6 sm:px-10 md:px-14 lg:px-16 py-8 sm:py-10 md:py-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left Section: Logo + Navigation Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* App Logo */}
              <Link
                href={footerData.logo.href}
                className="flex items-center shrink-0 select-none transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                aria-label="Conseil App Home"
              >
                <Image
                  src={footerData.logo.src}
                  alt={footerData.logo.alt}
                  width={footerData.logo.width}
                  height={footerData.logo.height}
                  className="h-[24px] sm:h-[26px] md:h-[28px] w-auto object-contain"
                  priority
                />
              </Link>

              {/* Navigation Links */}
              <nav
                className="flex items-center flex-wrap justify-center gap-5 sm:gap-7 lg:gap-8"
                aria-label="Footer Navigation"
              >
                {footerData.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[13.5px] sm:text-[14px] md:text-[14.5px] font-heading font-bold text-[#194536] hover:text-black transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Section: Social Icons + Copyright */}
            <div className="flex flex-col items-center md:items-end gap-2.5 text-center md:text-right">
              {/* Social Media Icons Row */}
              <div
                className="flex items-center gap-3.5 sm:gap-4 text-[#194536]"
                role="list"
                aria-label="Social media links"
              >
                {footerData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    title={social.name}
                    className="group flex items-center justify-center p-1 text-[#194536] hover:opacity-75 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>

              {/* Copyright Text */}
              <p className="text-[12px] sm:text-[12.5px] md:text-[13px] text-[#194536]/75 font-normal tracking-tight">
                {footerData.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Large Animated Text Carousel Beneath Footer */}
      <div
        className="w-full overflow-hidden mt-8 sm:mt-12 md:mt-14 lg:mt-16 pt-2 pb-4 select-none"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {/* Two identical track copies side by side for a seamless, glitch-free continuous loop */}
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 shrink-0 pr-8 sm:pr-12 md:pr-16 lg:pr-20"
            >
              {repeatedMarquee.map((item, idx) => (
                <div key={idx} className="flex items-center shrink-0">
                  {item.type === "text" ? (
                    <span className="font-heading font-black tracking-tighter text-[#104331] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-none whitespace-nowrap transition-colors duration-300 hover:text-[#165B6A]">
                      {item.content}
                    </span>
                  ) : (
                    <div className="flex items-center justify-center text-[#104331] shrink-0 transform transition-transform duration-300 hover:scale-110">
                      {item.icon === "phone-chat" ? (
                        <PhoneChatIcon className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22" />
                      ) : (
                        <PlusCircleIcon className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Floating Scroll Controls */}
      {/* Bottom-Left: Scroll-To-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-40 w-11 h-11 sm:w-12 sm:h-12 bg-white/95 text-[#194536] rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.14)] border border-black/5 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer backdrop-blur-sm ${
          showTopBtn
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <svg
          className="w-5 h-5"
          viewBox="2 2 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="7 14.5 12 9.5 17 14.5" />
        </svg>
      </button>

      {/* Bottom-Right: Download App Launcher Button (Image 1 & Image 2) */}
      <button
        ref={launcherRef}
        onClick={() => setIsDownloadOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#194536] text-white rounded-full shadow-[0_8px_30px_rgba(25,69,54,0.35)] hover:bg-[#14372b] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer select-none"
        aria-label={isDownloadOpen ? "Close download popup" : "Open download popup"}
        title={isDownloadOpen ? "Close" : "Download App"}
      >
        {isDownloadOpen ? (
          /* Open state (Image 2): White close 'X' icon */
          <svg
            className="w-5 h-5 text-white transition-transform duration-300 rotate-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Closed state (Image 1): White circle with dark green downward arrow */
          <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-sm pointer-events-none transition-transform duration-300">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#194536]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </span>
        )}
      </button>

      {/* Floating Download App Popup Card (Image 2) */}
      <div
        ref={popupRef}
        role="dialog"
        aria-label="Download app options"
        aria-modal="true"
        className={`fixed bottom-22 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[350px] bg-white rounded-[22px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 ease-out origin-bottom-right ${
          isDownloadOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* iPhone Section */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-[17px] font-heading font-bold text-[#194536] leading-tight">
              iPhone
            </h4>
            <p className="text-[13px] text-gray-500 mt-1 font-normal">
              Download app from the App Store
            </p>
          </div>
          {/* Top-Right Circular Close Button */}
          <button
            onClick={() => setIsDownloadOpen(false)}
            className="w-7 h-7 shrink-0 rounded-full bg-[#E9ECEF]/80 hover:bg-[#E9ECEF] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            aria-label="Close download popup"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Get it on App Store Button */}
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 w-full py-3 px-4 bg-[#194536] hover:bg-[#13382c] text-white rounded-xl font-heading font-bold text-[14px] flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 hover:shadow active:scale-[0.98] cursor-pointer"
        >
          <AppleLogoIcon className="w-[18px] h-[18px] fill-current shrink-0" />
          <span>Get it on App Store</span>
        </a>

        {/* Subtle Divider */}
        <div className="my-4 border-t border-gray-100" />

        {/* Android Section */}
        <div>
          <h4 className="text-[17px] font-heading font-bold text-[#194536] leading-tight">
            Android
          </h4>
          <p className="text-[13px] text-gray-500 mt-1 font-normal">
            Download the app from Google Play
          </p>
        </div>

        {/* Get it on Google Play Button */}
        <a
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3.5 w-full py-3 px-4 bg-[#9DCB26] hover:bg-[#8ebb20] text-white rounded-xl font-heading font-bold text-[14px] flex items-center justify-center gap-2.5 shadow-sm transition-all duration-200 hover:shadow active:scale-[0.98] cursor-pointer"
        >
          <AndroidLogoIcon className="w-[18px] h-[18px] fill-current shrink-0" />
          <span>Get it on Google Play</span>
        </a>

        {/* Social Proof Footer */}
        <div className="mt-5 pt-1 flex items-center gap-2 text-[13px] text-[#194536]">
          <Image
            src="/assets/images/emoji-high-voltage-2.webp"
            alt="⚡"
            width={16}
            height={16}
            className="w-4 h-auto object-contain shrink-0"
          />
          <p className="leading-snug text-[13px]">
            <span className="text-[#194536]/80 font-normal">Trending App with </span>
            <strong className="font-bold text-[#194536]">20 million downloads</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
