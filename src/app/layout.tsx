import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

// All fonts are self-hosted (Open Font License) for speed, privacy and a strict CSP.
const inter = localFont({
  src: "../fonts/inter-var.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});
const instrumentSerif = localFont({
  src: [
    { path: "../fonts/instrument-serif-regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});
const plusJakarta = localFont({
  src: [
    { path: "../fonts/plus-jakarta-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: false,
});
const roboto = localFont({
  src: "../fonts/roboto-latin-500-normal.woff2",
  weight: "500",
  variable: "--font-roboto",
  display: "swap",
  preload: false,
});
const geist = localFont({
  src: "../fonts/geist-var.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | Video Production Studio`,
    template: `%s | ${site.name}`,
  },
  description: `${site.fullName} (${site.name}): corporate films, commercials, event coverage, photography, drone cinematography and post production across Pakistan.`,
  openGraph: {
    title: site.fullName,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${plusJakarta.variable} ${roboto.variable} ${geist.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
