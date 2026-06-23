import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", key: "home" },
    { name: "About", href: "#about", key: "about" },
    { name: "Case Studies", href: "#projects", key: "projects" },
    { name: "Impact Calculator", href: "#calculator", key: "calculator" },
    { name: "Hijri Simulator", href: "#simulator", key: "simulator" },
    { name: "Pricing", href: "#pricing", key: "pricing" },
    { name: "Contact", href: "#contact", key: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-deep/80 backdrop-blur-md border-b border-border-subtle/80 py-3 shadow-lg"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group text-decoration-none"
          >
            <div className="flex items-end gap-[3px]" aria-hidden="true">
              <motion.div
                animate={{ height: [10, 16, 10] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[4px] bg-brand-teal rounded-sm h-[10px]"
              />
              <motion.div
                animate={{ height: [16, 22, 16] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-[4px] bg-brand-teal rounded-sm h-[16px]"
              />
              <motion.div
                animate={{ height: [22, 12, 22] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-[4px] bg-brand-teal rounded-sm h-[22px]"
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-text-hi font-sans">
              Tazka<span className="text-brand-teal">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive ? "text-text-hi font-semibold" : "text-text-md hover:text-text-hi"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-teal rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="mailto:hello@tazka.org"
              className="text-xs font-semibold uppercase tracking-widest text-text-md hover:text-text-hi flex items-center gap-1.5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-brand-teal animate-spin-slow" />
              hello@tazka.org
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="text-xs font-bold uppercase tracking-wider text-white bg-brand-teal hover:bg-brand-teal-dk px-5 py-3 rounded-lg font-sans transition-all shadow-md shadow-brand-teal/10 hover:scale-105 active:scale-95"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-text-md hover:text-text-hi hover:bg-border-subtle/40 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer using motion AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-bg-deep/98 backdrop-blur-lg flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col gap-6 items-center my-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.key;
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-2xl font-serif tracking-wide transition-colors ${
                      isActive ? "text-brand-teal font-semibold" : "text-text-hi font-medium"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 mt-auto items-center">
              <a href="mailto:hello@tazka.org" className="text-text-md text-sm font-semibold tracking-wider">
                hello@tazka.org
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full text-center text-sm font-bold uppercase tracking-wider text-white bg-brand-teal py-4 rounded-xl font-sans"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
