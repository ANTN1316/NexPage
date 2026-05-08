import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/sections/Hero";

const DesignCards = lazy(() => import("@/components/landing/sections/DesignCards"));
const DigitalEra = lazy(() => import("@/components/landing/sections/DigitalEra"));
const Features = lazy(() => import("@/components/landing/sections/Features"));
const Testimonials = lazy(() => import("@/components/landing/sections/Testimonials"));
const Process = lazy(() => import("@/components/landing/sections/Process"));
const Portfolio = lazy(() => import("@/components/landing/sections/Portfolio"));
const Pricing = lazy(() => import("@/components/landing/sections/Pricing"));
const FAQ = lazy(() => import("@/components/landing/sections/FAQ"));
const ContactForm = lazy(() => import("@/components/landing/sections/ContactForm"));

export default function Index() {
  return (
    <div className="w-full bg-[#0F0F0F]">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <DesignCards />
          <DigitalEra />
          <Process />
          <Portfolio />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
