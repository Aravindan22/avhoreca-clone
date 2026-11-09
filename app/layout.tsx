import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import TrustTicker from "@/components/layout/TrustTicker";
import BrandsStrip from "@/components/layout/BrandsStrip";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: "AV Horeca Solutions — Commercial Kitchen Equipment Hyderabad",
  description:
    "Authorized dealer for Pradeep, Aeonic & iBrew. Commercial kitchen equipment — milk boilers, induction cookers, pots & pans, buffet products. Serving 500+ restaurants across Hyderabad, AP & Telangana.",
  keywords: "commercial kitchen equipment hyderabad, milk boiler, induction cooker, pradeep cookware, aeonic induction, ibrew",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <TrustTicker />
        <BrandsStrip />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
