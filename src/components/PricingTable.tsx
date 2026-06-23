import { motion } from "motion/react";
import { Check, ShieldAlert } from "lucide-react";
import { PricingPlan } from "../types";

export default function PricingTable() {
  const plans: PricingPlan[] = [
    {
      name: "Essentials",
      id: "essentials",
      price: "$500",
      period: "/month",
      descr: "Perfect for smaller masjids, local schools, or starting organizations. Handles up to 500 donor profiles.",
      features: [
        "Full donor lifecycle onboarding setup",
        "Nightly Hijri lunar calendar automation",
        "Stripe, Authorize.Net, CardConnect links",
        "Scholar-reviewed campaigns templates",
        "Monthly reporting analytical board",
        "Standard secure email assistance",
      ],
      ctaText: "Book a call",
    },
    {
      name: "Growth",
      id: "growth",
      price: "$1,000",
      period: "/month",
      isPopular: true,
      descr: "Optimized for established centers scaling donor retention. Handles up to 2,500 donor profiles.",
      features: [
        "Everything inside Essentials included",
        "Lapsed donor reactivation campaigns",
        "24h credit card failure self-healing",
        "Donor anniversaries & milestone triggers",
        "Sovereign moon-sighting custom override",
        "Priority 1-on-1 Telegram support",
      ],
      ctaText: "Book a call",
    },
    {
      name: "Enterprise",
      id: "enterprise",
      price: "Custom",
      period: " quote",
      descr: "Custom support for Islamic charities, national NGOs, and multi-center systems. Unlimited profiles.",
      features: [
        "Everything inside Growth included",
        "Dynamic multi-fund (Zakat/Sadaqah/Lillah)",
        "Dedicated Tazka account manager resource",
        "Done-for-you personalized copywriting",
        "Custom Board-meeting slide reporting",
        "Direct API, webhooks & system access",
      ],
      ctaText: "Request callback",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-bg-mid relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
            Flat Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-hi leading-none mb-4">
            Flat fee subscription. <em className="text-brand-teal">Never a cut.</em>
          </h2>
          <p className="text-text-md text-sm sm:text-base">
            We charge a fixed monthly fee. We never take a percentage of your donations — because donor generosity belongs 100% to your cause.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: p.isPopular ? -12 : -6 }}
              transition={{ duration: 0.3 }}
              className={`bg-bg-card border rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden ${
                p.isPopular
                  ? "border-brand-teal/80 shadow-2xl shadow-brand-teal/5 lg:-translate-y-4"
                  : "border-border-strong/80 shadow-xl"
              }`}
            >
              {/* Popular badge */}
              {p.isPopular && (
                <span className="absolute top-0 right-0 bg-brand-teal text-white text-[9px] font-extrabold uppercase tracking-widest px-4.5 py-1.5 rounded-bl-xl shadow-sm">
                  Most Popular
                </span>
              )}

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-lo">
                  {p.name}
                </span>

                <div className="flex items-baseline gap-1 mt-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-serif text-text-hi font-bold">
                    {p.price}
                  </span>
                  <span className="text-xs text-text-lo uppercase font-bold tracking-wider">
                    {p.period}
                  </span>
                </div>

                <p className="text-sm text-text-md leading-relaxed pb-6 border-b border-border-subtle/60 mb-6">
                  {p.descr}
                </p>

                {/* Features Bullet details */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {p.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-text-md">
                      <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="#contact"
                  className={`w-full text-center inline-block text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer ${
                    p.isPopular
                      ? "bg-brand-teal text-white hover:bg-brand-teal-dk"
                      : "bg-bg-mid hover:bg-bg-deep border border-border-strong hover:border-brand-teal/40 text-brand-teal"
                  }`}
                >
                  {p.ctaText}
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Flat pricing subnote block */}
        <div className="max-w-2xl mx-auto text-center mt-12 bg-bg-deep/40 border border-border-subtle p-5 rounded-2xl">
          <p className="text-[11px] sm:text-xs text-text-lo leading-relaxed">
            🌿 <strong className="text-text-md font-semibold font-sans">No Hidden Fees:</strong> No setup fees. No contract locks. Total donor database exports are free of charge if you decide to leave. We will tell you honestly if Tazka is not ready for your organization yet.
          </p>
        </div>

      </div>
    </section>
  );
}
