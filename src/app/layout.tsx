import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "@/lib/language-context";
import SkipLink from "@/components/SkipLink";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://dvilmar.vercel.app";
const TITLE = "Daniel Vilar Martínez";
const DESCRIPTION =
  "Portfolio personal de Daniel Vilar Martínez — Full Stack Developer y trading algorítmico.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <LanguageProvider>
          <SkipLink />
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
