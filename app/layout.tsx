import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KÝMARE | Greek Cuisine & After Dark in New York City",
  description: "KÝMARE is a modern Greek dining experience in New York City featuring Mediterranean seafood, charcoal-grilled dishes, Greek hospitality and KÝMARE After Dark Thursday through Saturday.",
  icons: { icon: "/pictures/logo_icon.png", apple: "/pictures/logo_icon.png" },
  openGraph: {
    title: "KÝMARE | Greek Cuisine & After Dark in New York City",
    description: "Mediterranean seafood, charcoal fire, Greek hospitality and KÝMARE After Dark in New York City.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/pictures/interiors/olive-tree-room-enhanced.jpg", width: 1479, height: 1063, alt: "The dining room at KÝMARE" }],
  },
};

export const viewport: Viewport = { themeColor: "#080706", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
