import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricsShowcase from "./components/MetricsShowcase";
import AboutSection from "./components/AboutSection";
import InteractiveShowcase from "./components/InteractiveShowcase";
import PilotSection from "./components/PilotSection";
import ImpactCalculator from "./components/ImpactCalculator";
import CalendarSimulator from "./components/CalendarSimulator";
import ImplementationRoadmap from "./components/ImplementationRoadmap";
import PricingTable from "./components/PricingTable";
import FaqSection from "./components/FaqSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Core Scroll Depth and Active Node observer
  useEffect(() => {
    // 1. Scroll depth progress percentages
    const handleScroll = () => {
      const top = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((top / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. Intersection observer mapping navbar links to current section
    const secIds = ["home", "about", "projects", "calculator", "simulator", "pricing", "contact"];
    const observers = secIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px", // triggers when section dominates visual center
        }
      );
      obs.observe(el);
      return { obs, el };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => {
        if (o) o.obs.unobserve(o.el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-deep text-text-hi font-sans selection:bg-brand-saffron/30 selection:text-text-hi antialiased">
      
      {/* Absolute top horizontal scroll progress indicator */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-brand-teal via-brand-teal to-brand-saffron z-50 transition-all duration-75 ease"
        role="presentation"
        aria-hidden="true"
      />

      {/* 1. Header Sticky Nav */}
      <Navbar activeSection={activeSection} />

      {/* 2. Hero Presentation Node */}
      <Hero />

      {/* 3. Features Row Bar overlay */}
      <MetricsShowcase />

      {/* 4. Origin narrative story block */}
      <AboutSection />

      {/* 5. Filter projects showcase (Heavily inspired by americaneagle.com/projects client cards) */}
      <InteractiveShowcase />

      {/* 6. Estimator slider converter */}
      <ImpactCalculator />

      {/* 7. Lunar phase smartphone simulation device */}
      <CalendarSimulator />

      {/* 8. Flagship Case Metrics (Muslim Youth Central Columbus OH metrics) */}
      <PilotSection />

      {/* 9. Implementation onboarding roadmap */}
      <ImplementationRoadmap />

      {/* 10. Pricing Cards tables */}
      <PricingTable />

      {/* 11. Custom accordion FAQs list */}
      <FaqSection />

      {/* 12. Contact Form with overlays */}
      <ContactForm />

      {/* 13. Dynamic Brand Footer with Scroll-top anchor button */}
      <Footer />

    </div>
  );
}
