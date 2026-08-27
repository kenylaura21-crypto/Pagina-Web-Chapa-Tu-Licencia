import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import Packages from "@/components/Packages";
import HowToStart from "@/components/HowToStart";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import LocationContact from "@/components/LocationContact";

export default function Home() {
  const location = useLocation();

  // Permite llegar a una sección desde otra ruta (ej: /#paquetes)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <TrustBar />
      <WhyUs />
      <Services />
      <Categories />
      <Packages />
      <HowToStart />
      <About />
      <Testimonials />
      <Gallery />
      <Blog />
      <Faq />
      <ContactForm />
      <LocationContact />
    </>
  );
}
