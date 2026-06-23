import React from "react";
import { motion } from "motion/react";
import { Landmark, Users, CheckCircle, Flame, ArrowUpRight } from "lucide-react";

export default function PilotSection() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pilot" className="py-24 bg-bg-deep relative overflow-hidden">
      
      {/* Absolute glow design layer */}
      <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 rounded-full bg-radial from-brand-teal/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left panel narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              Flagship Pilot Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-text-hi leading-tight">
              Muslim Youth Central,<br />
              <em className="text-brand-teal">Columbus, Ohio.</em>
            </h2>
            <p className="text-text-md text-base leading-relaxed">
              MYC has been building an expansive youth community center on Sunbury Road since 2019 — $2.7M invested, and $2M remaining to raise. After years of exhausting campaign-to-campaign fundraising cycles with zero systematic follow-ups, they partnered with Tazka as our flagship launch pilot.
            </p>
            <div className="border-l-[3px] border-brand-teal pl-5 my-6">
              <blockquote className="text-sm font-serif text-text-hi italic leading-relaxed">
                "We had hundreds of generous donors from our annual dinners, but we kept forgetting to keep them updated on milestones. Tazka changed everything within weeks of linking."
              </blockquote>
              <cite className="text-[10px] font-bold text-text-lo tracking-widest uppercase mt-2 block not-italic">
                — Imam Jamil Shakir · MYC Columbus, OH
              </cite>
            </div>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="btn-teal inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dk text-white font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-xl transition-all shadow-md active:scale-95"
            >
              Analyze your current retention
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right panel interactive stats card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-card border border-border-strong rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-border-subtle/50">
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-lo">
                  MYC Live Campaign Metrics
                </span>
                <span className="text-[10px] uppercase font-bold text-brand-teal tracking-widest bg-brand-teal/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                  <span className="w-1 h-1 bg-brand-teal rounded-full" />
                  Active retention live
                </span>
              </div>

              {/* Counts Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-bg-mid border border-border-subtle p-4 rounded-xl">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-text-lo">
                    Total Invested
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-text-hi font-medium mt-1">
                    $2.7M
                  </div>
                </div>

                <div className="bg-bg-mid border border-border-subtle p-4 rounded-xl">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-text-lo">
                    Remaining Target
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-text-hi font-medium mt-1">
                    $2.0M
                  </div>
                </div>

                <div className="bg-bg-mid border border-border-subtle p-4 rounded-xl">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-text-lo">
                    Integrated Donors
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-text-hi font-medium mt-1">
                    500+
                  </div>
                </div>

                <div className="bg-bg-mid border border-border-subtle p-4 rounded-xl">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-text-lo">
                    Donor Retention Rate
                  </span>
                  <div className="text-xl sm:text-2xl font-serif text-brand-teal font-medium mt-1">
                    78%
                  </div>
                </div>
              </div>

              {/* Progress bars details */}
              <div className="space-y-4">
                {/* Progress bar 1 */}
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-text-lo mb-1.5">
                    <span>Building Fund Progress</span>
                    <span className="text-text-hi">57%</span>
                  </div>
                  <div className="w-full h-1.5 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 }}
                      className="h-full bg-brand-teal rounded-full"
                    />
                  </div>
                </div>

                {/* Progress bar 2 */}
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-text-lo mb-1.5">
                    <span>Donor Retention Rate</span>
                    <span className="text-brand-teal">78%</span>
                  </div>
                  <div className="w-full h-1.5 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="h-full bg-brand-teal rounded-full"
                    />
                  </div>
                </div>

                {/* Progress bar 3 */}
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-text-lo mb-1.5">
                    <span>Lapsed Donors Reached</span>
                    <span className="text-text-hi">34%</span>
                  </div>
                  <div className="w-full h-1.5 bg-border-subtle rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "34%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-brand-teal rounded-full"
                    />
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
