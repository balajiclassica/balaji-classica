import type { Metadata } from "next";
import { El_Messiri, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor-sans",
});

const siteUrl = "https://balajiclassica.co"; // Replace with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Balaji Classica Dombivli | Best 1 & 2BHK starting from ₹31.99 Lacs* by SSL",
    template: "%s | Balaji Classica"
  },
  description: "Balaji Classica Dombivli | Best 1 & 2BHK starting from ₹31.99 Lacs* by SSL",
  keywords: [
    "Balaji Classica",
    "Balaji Classica Dombivli",
    "Luxury 1 BHK Flats in Dombivli East",
    "2 BHK Apartments in Dombivli",
    "SS Life Spaces",
    "New Projects in Dombivli East",
    "Real Estate Dombivli",
    "Affordable Luxury Mumbai"
  ],
  authors: [{ name: "SS Life Spaces" }],
  creator: "Social Pulse Agency",
  publisher: "SS Life Spaces",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Balaji Classica Dombivli | Best 1 & 2BHK starting from ₹31.99 Lacs*",
    description: "Balaji Classica Dombivli | Best 1 & 2BHK starting from ₹31.99 Lacs* by SSL. Experience luxury living in Dombivli East with premium amenities.",
    url: siteUrl,
    siteName: "Balaji Classica",
    images: [
      {
        url: "/images/banner/desk.jpg",
        width: 1200,
        height: 630,
        alt: "Balaji Classica Building Elevation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Classica Dombivli | Best 1 & 2BHK starting from ₹31.99 Lacs*",
    description: "Balaji Classica Dombivli | Best 1 & 2BHK starting from ₹31.99 Lacs* by SSL. Discover luxury living in Dombivli East.",
    images: ["/images/banner/desk.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": "Balaji Classica",
    "description": "Premium 1 & 2 BHK residential complex in Dombivli East.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dombivli",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "image": `${siteUrl}/images/banner/desk.jpg`,
    "url": siteUrl,
    "numberOfRooms": "1, 2"
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${elMessiri.variable} ${tenorSans.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
