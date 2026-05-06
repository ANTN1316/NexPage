import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DesignCards from "@/components/landing/sections/DesignCards";
import DigitalEra from "@/components/landing/sections/DigitalEra";
import Features from "@/components/landing/sections/Features";
import Hero from "@/components/landing/sections/Hero";
import Leaders from "@/components/landing/sections/Leaders";
import Testimonials from "@/components/landing/sections/Testimonials";

export default function Index() {
  return (
    <div className="w-full bg-[#0F0F0F]">
      <Navbar />
      <main>
        <Hero />
        <DesignCards />
        <DigitalEra />
        <Features />
        <Testimonials />
        <Leaders />
      </main>
      <Footer />
    </div>
  );
}
