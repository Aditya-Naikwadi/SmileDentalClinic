import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilecare-dental.in"),
  title: {
    default: "SmileCare Dental | Premium Clinical Excellence in Mumbai",
    template: "%s | SmileCare Dental"
  },
  description: "Experience world-class dental care at Elite Tower, BKC. Specializing in cosmetic transformations, orthodontics, and painless pediatric dentistry with a premium touch.",
  keywords: ["Dental Clinic Mumbai", "Cosmetic Dentistry BKC", "SmileCare Dental", "Premium Dentist Mumbai", "Orthodontist BKC"],
  authors: [{ name: "SmileCare Dental Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smilecare-dental.in",
    siteName: "SmileCare Dental",
    title: "SmileCare Dental | Elite Clinical Excellence",
    description: "Mumbai's premier dental destination at BKC. World-class specialists for your perfect smile.",
    images: [
      {
        url: "/hero_luxury_dental.png",
        width: 1200,
        height: 630,
        alt: "SmileCare Dental Elite Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare Dental | Premium Care",
    description: "Your path to a perfect smile starts here. Mumbai's most advanced dental clinic.",
    images: ["/hero_luxury_dental.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import MagneticCursor from "../components/Cursor/MagneticCursor";
import ScrollProgressBar from "../components/ScrollProgressBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ScrollProgressBar />
        <MagneticCursor />
        {children}
      </body>
    </html>
  );
}
