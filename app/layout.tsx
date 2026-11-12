import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Mazra Care – Smart Farming Solutions in UAE",
    template: "%s | Mazra Care",
  },

  description:
    "Mazra Care provides smart farming solutions in the UAE, including hydroponics, aquaponics, aeroponics, vertical farming and sustainable greenhouse technologies.",

  keywords: [
    "Mazra Care",
    "smart farming UAE",
    "smart agriculture UAE",
    "sustainable agriculture UAE",
    "hydroponics UAE",
    "aquaponics UAE",
    "aeroponics UAE",
    "vertical farming UAE",
    "greenhouse farming UAE",
    "agricultural technology UAE",
    "precision farming",
  ],

  authors: [{ name: "Mazra Care" }],
  creator: "Mazra Care",
  publisher: "Mazra Care",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://yourdomain.com",
    siteName: "Mazra Care",
    title: "Mazra Care – Smart Farming Solutions in UAE",
    description:
      "Discover innovative smart farming, hydroponics, aquaponics and sustainable agricultural solutions with Mazra Care in the UAE.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mazra Care – Smart Farming Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mazra Care – Smart Farming Solutions in UAE",
    description:
      "Smart, sustainable and technology-driven farming solutions for modern agriculture in the UAE.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen font-jakarta">{children}</body>
    </html>
  );
}