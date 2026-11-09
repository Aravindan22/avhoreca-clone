import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProductCategories from "@/components/home/ProductCategories";
import BrandPartners from "@/components/home/BrandPartners";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import ResourceGuides from "@/components/home/ResourceGuides";
import Testimonials from "@/components/home/Testimonials";
import WhoWeServe from "@/components/home/WhoWeServe";
import ServiceBanner from "@/components/home/ServiceBanner";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductCategories />
      <BrandPartners />
      <WhyChooseUs />
      <IndustrySolutions />
      <ResourceGuides />
      <Testimonials />
      <WhoWeServe />
      <ServiceBanner />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
