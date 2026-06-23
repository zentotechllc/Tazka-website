import { ArrowUp, Globe, Twitter, Linkedin } from "lucide-react";
import React, { useState } from "react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-mid border-t border-border-subtle/80 pt-16 pb-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top block */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border-subtle/60 mb-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-serif text-text-hi font-bold flex items-center gap-1.5">
              Tazka<span className="text-brand-teal font-sans">.</span>
            </h3>
            <p className="text-xs text-text-md leading-relaxed max-w-sm">
              Donor retention, automated lunar campaigns, and credit card failure recovery pipelines built specifically for US Muslim nonprofits. A technical product of Zento Tech LLC, Columbus, Ohio.
            </p>
            
            {/* Social icons */}
            <div className="flex gap-2.5 pt-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-border-strong hover:border-brand-teal text-text-lo hover:text-brand-teal flex items-center justify-center transition-all cursor-pointer"
                aria-label="Twitter connection"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-bg-card border border-border-strong hover:border-brand-teal text-text-lo hover:text-brand-teal flex items-center justify-center transition-all cursor-pointer"
                aria-label="LinkedIn connection"
              >
                <Linkedin className="w-4 h-4 text-xs font-semibold" />
              </a>

              <a
                href="mailto:hello@tazka.org"
                className="w-9 h-9 rounded-full bg-bg-card border border-border-strong hover:border-brand-teal text-text-lo hover:text-brand-teal flex items-center justify-center transition-all cursor-pointer"
                aria-label="Direct email assist"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-extrabold text-text-lo uppercase tracking-widest">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="text-xs text-text-lo hover:text-brand-teal transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "#projects")}
                  className="text-xs text-text-lo hover:text-brand-teal transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleLinkClick(e, "#pricing")}
                  className="text-xs text-text-lo hover:text-brand-teal transition-colors"
                >
                  Monthly Rates
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-extrabold text-text-lo uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#simulator"
                  onClick={(e) => handleLinkClick(e, "#simulator")}
                  className="text-xs text-text-lo hover:text-brand-teal transition-colors"
                >
                  Hijri Automation
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  onClick={(e) => handleLinkClick(e, "#calculator")}
                  className="text-xs text-text-lo hover:text-brand-teal transition-colors"
                >
                  ROI Estimator
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="text-xs text-text-lo hover:text-brand-teal transition-colors"
                >
                  Done-for-you Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[10px] font-extrabold text-text-lo uppercase tracking-widest">
              Stay Informed
            </h4>
            <p className="text-[11px] text-text-lo leading-relaxed">
              Get Tazka monthly system updates and scholar-vetted resource guides.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-1.5">
                <input
                  required
                  type="email"
                  placeholder="your@email.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-bg-card border border-border-strong rounded-xl px-3 py-2 text-xs text-text-hi font-sans focus:border-brand-teal focus:outline-none flex-1 placeholder:text-text-lo"
                  aria-label="Email address sub"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-teal hover:bg-brand-teal-dk rounded-xl text-[10px] font-extrabold uppercase text-white font-sans transition-all active:scale-95 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <span className="text-xs font-bold text-brand-teal block animate-pulse">
                ✦ Subscription confirmed! Shukran.
              </span>
            )}
          </div>

        </div>

        {/* Bottom block */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-[10px] text-text-lo text-center sm:text-left leading-relaxed">
            © 2026 Tazka · Zento Tech LLC · Columbus, Ohio. Fixed fee subscriptions only. We never take percentage cuts of your donations.
          </p>

          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-bg-card border border-border-strong hover:border-brand-teal hover:text-brand-teal text-text-lo flex items-center justify-center transition-all cursor-pointer"
            aria-label="Scroll back top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
