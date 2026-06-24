import type { Metadata } from "next";
import {
  Fraunces,
  Source_Sans_3,
  Libre_Franklin,
  Public_Sans,
  Lora,
  Nunito_Sans,
  Nunito,
  Playfair_Display,
  Inter,
} from "next/font/google";
import { StyleLab } from "@/components/style-lab/StyleLab";

/**
 * Internal design playground at /style-lab. All candidate fonts are loaded here
 * (and only here) and exposed as CSS variables on a wrapper, so the StyleLab
 * client component can switch between them live. Not indexed by search engines.
 */

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sourcesans" });
const libreFranklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-librefranklin" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-publicsans" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunitosans" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const fontVars = [
  fraunces,
  sourceSans,
  libreFranklin,
  publicSans,
  lora,
  nunitoSans,
  nunito,
  playfair,
  inter,
]
  .map((f) => f.variable)
  .join(" ");

export const metadata: Metadata = {
  title: "Style Lab",
  robots: { index: false, follow: false },
};

export default function StyleLabPage() {
  return (
    <div className={fontVars}>
      <StyleLab />
    </div>
  );
}
