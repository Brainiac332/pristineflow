import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Premium Cleaning Services`,
  description:
    "Professional cleaning solutions designed to make your home and workplace fresher, healthier, and more welcoming. Book a free quote today.",
  keywords: [
    "cleaning service",
    "residential cleaning",
    "commercial cleaning",
    "deep cleaning",
    "house cleaning",
    "office cleaning",
  ],
  authors: [{ name: BRAND.name }],
  creator: "The Golden Brain Services (TGBS)",
  metadataBase: new URL("https://pristineflow.example"),
  openGraph: {
    title: `${BRAND.name} — Premium Cleaning Services`,
    description:
      "Professional cleaning solutions designed to make your home and workplace fresher, healthier, and more welcoming.",
    type: "website",
    siteName: BRAND.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Premium Cleaning Services`,
    description:
      "Professional cleaning solutions designed to make your home and workplace fresher, healthier, and more welcoming.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}