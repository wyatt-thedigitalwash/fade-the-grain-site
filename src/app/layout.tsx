import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/Schema";
import "./globals.css";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://DOMAIN.com"),
  title: "Fade The Grain Barbershop | Arcanum, OH",
  description:
    "Veteran-owned barbershop in Arcanum, OH. Precision fades, classic cuts, beard trims, and straight razor shaves. Walk-ins welcome.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Fade The Grain Barbershop",
    title: "Fade The Grain Barbershop | Arcanum, OH",
    description:
      "Veteran-owned barbershop in Arcanum, OH. Precision fades, classic cuts, beard trims, and straight razor shaves. Walk-ins welcome.",
    url: "https://DOMAIN.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fade The Grain Barbershop | Arcanum, OH",
    description:
      "Veteran-owned barbershop in Arcanum, OH. Precision fades, classic cuts, beard trims, and straight razor shaves. Walk-ins welcome.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://DOMAIN.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocalBusinessSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:font-semibold focus:uppercase focus:text-primary"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
