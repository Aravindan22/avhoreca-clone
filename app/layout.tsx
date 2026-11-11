import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import TrustTicker from "@/components/layout/TrustTicker";
import BrandsStrip from "@/components/layout/BrandsStrip";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import { BUSINESS_NAME, BRAND_NAME, DEALERSHIP_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} (${BRAND_NAME}) — ${DEALERSHIP_TITLE} | Salem`,
  description:
    "DSK Enterprises: Authorized Dealer of Pradeep Commercial Kitchen And Beverage Equipment in Salem. Supplying commercial kitchen equipment, induction systems, milk boilers, filter coffee machines, and cookware across 12 Tamil Nadu districts.",
  keywords:
    "DSK Enterprises, DSK Kitchen Solutions, Pradeep commercial kitchen salem, pradeep stainless kitchen, milk boiler salem, commercial induction salem, horeca equipment tamil nadu",
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
