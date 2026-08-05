import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { getSiteSettings } from "@/lib/sanity-queries";
import { FALLBACK_EXPO_DATE, FALLBACK_EXPO_DATE_RANGE_TEXT, FALLBACK_EXPO_VENUE } from "@/lib/expo-countdown";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Somali HORECA — The Infrastructure of Somalia's Hospitality Economy",
  description:
    "Connecting businesses, suppliers, investors, and innovators through Somalia's first integrated hospitality ecosystem.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings().catch(() => null);

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-body text-ink">
        <Header
          expoDate={siteSettings?.expoStartDate ?? FALLBACK_EXPO_DATE}
          expoDateRangeText={siteSettings?.expoDateRangeText ?? FALLBACK_EXPO_DATE_RANGE_TEXT}
          expoVenue={siteSettings?.expoVenue ?? FALLBACK_EXPO_VENUE}
        />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
