import type { Metadata } from "next";
import { El_Messiri, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "Balaji Classica | Luxury 1 & 2 BHK Flats in Dombivli East",
    template: "%s | Balaji Classica"
  },
  description: "Discover Balaji Classica in Dombivli East. Premium 1 & 2 BHK residences by SS Life Spaces featuring 25+ lifestyle amenities, rooftop garden, and excellent connectivity. Book your dream home today.",
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
    title: "Balaji Classica | Luxury 1 & 2 BHK Flats in Dombivli East",
    description: "Experience premium living at Balaji Classica. Meticulously designed apartments with 25+ amenities in the heart of Dombivli.",
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
    title: "Balaji Classica | Luxury 1 & 2 BHK Flats in Dombivli East",
    description: "Discover luxury living in Dombivli East at Balaji Classica.",
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
      </body>
    </html>
  );
}
