import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { Filter, ChevronRight, X, ArrowUpRight, TrendingUp, Check, Layers } from "lucide-react";

export default function InteractiveShowcase() {
  const [filter, setFilter] = useState<"all" | "masjid" | "school" | "charity">("all");
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "myc",
      name: "Muslim Youth Central",
      slug: "muslim-youth-central",
      location: "Columbus, OH",
      category: "masjid",
      typeLabel: "Masjid & Community Hub",
      headline: "Finishing a $4.7M community building through systematic lunar retargeting.",
      metrics: {
        retentionRate: 78,
        initialRetention: 35,
        recoveredAmount: 42000,
        donorCount: 847,
        buildingFundProgress: 57,
      },
      emoji: "🕌",
      bgGradient: "from-[#112435] to-[#1E3754]",
      challenge: "Stuck in perpetual capital campaign cycles. Highly dependent on single annual fundraising dinners, which meant losing 65% of Ramadan donors every year because they had no systematic follow-up or recurring donation support.",
      solution: "Connected Tazka’s automated lunar retention platform directly to their card processors. Tazka automated warm multi-media progress reports at milestones and initiated scholar-reviewed Ramadan warm-ups, ensuring recurring monthly options were pre-configured.",
      lift: "+43% Year-over-Year recurring donation volume and 78% verified donor retention rate, securing $42,000 in card-failures saved this year alone.",
    },
    {
      id: "noor",
      name: "Noor Islamic Academy",
      slug: "noor-islamic-academy",
      location: "Chicago, IL",
      category: "school",
      typeLabel: "Islamic School / College",
      headline: "Stabilizing monthly orphan & student sponsorships via automated designation loops.",
      metrics: {
        retentionRate: 84,
        initialRetention: 42,
        recoveredAmount: 18500,
        donorCount: 312,
        lapsedRecoveredProgress: 92,
      },
      emoji: "📖",
      bgGradient: "from-[#101F3E] to-[#1C325F]",
      challenge: "Academy education sponsors were lapsing silently because general CRM systems failed to separate education-Sadaqah from administrative sponsorships, leading to high friction, manual invoice chase-up, and sponsorship drop-offs.",
      solution: "Adopted Tazka's multi-fund Designation Engine. When a donor sponsors a child or student, they are grouped in a distinct segment that receives custom student-life updates. Tazka implemented 24-hour expired card notifications prior to tuition runs.",
      lift: "Tuition default rates plummeted by 82%; recovered $18,500 in expired sponsor cards, and stabilized orphan sponsorship retention to an all-time high of 84%.",
    },
    {
      id: "adaab",
      name: "Al-Adaab Relief Foundation",
      slug: "al-adaab-foundation",
      location: "Houston, TX",
      category: "charity",
      typeLabel: "Islamic Charity / NGO",
      headline: "Scaling winter emergency response with scheduled 100-day Zakat impact audits.",
      metrics: {
        retentionRate: 74,
        initialRetention: 30,
        recoveredAmount: 56000,
        donorCount: 1240,
      },
      emoji: "🤝",
      bgGradient: "from-[#141C34] to-[#252F51]",
      challenge: "Donors were highly generous with Zakat during Ramadan but had zero contact on where their money went, leading to a massive 70% donor loss rate because they relocated their donations to larger global charities.",
      solution: "Deployed Tazka’s automated 100-day Zakat distribution summaries. Tazka automatically compiled clean, scholar-reviewed impact audits and sent personalized text triggers detailing precisely who was fed or sheltered.",
      lift: "Achieved 74% donor renewal rate on winter emergency Zakat campaigns, returning $56,000 in saved recurring fails and generating a highly loyal local supporter base.",
    },
    {
      id: "clinic",
      name: "Merciful Hands Pediatric",
      slug: "merciful-hands-clinic",
      location: "Detroit, MI",
      category: "charity",
      typeLabel: "Community Health Clinic",
      headline: "Fueling a free community clinic via automated credit card self-healing.",
      metrics: {
        retentionRate: 81,
        initialRetention: 38,
        recoveredAmount: 32400,
        donorCount: 510,
      },
      emoji: "🩺",
      bgGradient: "from-[#0F2236] to-[#1C3A5A]",
      challenge: "Highly volatile budget needs because buying medicine requires stable monthly funds. Expired credit cards and decline codes were silently cancelling over $2,500 of critical medical donations every month.",
      solution: "Deployed Tazka's self-healing billing portals. The moment an active card gets declined or nears expiration, Tazka sends a friendly automated SMS and Email with a passwordless 2-tap update secure form.",
      lift: "Healed 92% of expired credit cards automatically. Recovered $32,400 in direct pediatric medical services and stabilized clinic commitments with an 81% overall retention score.",
    }
  ];

  const filteredProjects = projects.filter(
    (proj) => filter === "all" || proj.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-bg-mid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
              Case Study Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-hi leading-tight">
              Community projects <em className="text-brand-teal">powered by Tazka.</em>
            </h2>
            <p className="text-text-md text-sm sm:text-base mt-2 max-w-xl">
              Take a look at how Masjids, Islamic schools, and charities use Tazka to solve donor churn. Heavily inspired by high-end design showcases.
            </p>
          </div>

          {/* Filtering Tabs - Agency Style */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 bg-bg-deep border border-border-subtle p-1 rounded-xl">
            {(["all", "masjid", "school", "charity"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-brand-teal text-white shadow-md shadow-brand-teal/10"
                    : "text-text-md hover:text-text-hi hover:bg-border-subtle/50"
                }`}
              >
                {cat === "all" ? "All Projects" : cat === "masjid" ? "Masjids" : cat === "school" ? "Schools" : "Charities"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid with scale up transitions */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProj(proj)}
                className={`glass-panel border border-border-strong/70 hover:border-brand-teal/40 rounded-2xl p-6 flex flex-col justify-between cursor-pointer group shadow-lg`}
              >
                 {/* Visual Top */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[2.5rem] select-none block shrink-0">
                      {proj.emoji}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-md bg-bg-deep border border-border-subtle px-2.5 py-1 rounded-full">
                      {proj.location}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal mb-2 block">
                    {proj.typeLabel}
                  </span>

                  <h3 className="text-base font-bold text-text-hi line-clamp-2 leading-snug mb-4 group-hover:text-brand-teal transition-colors">
                    {proj.name}
                  </h3>

                  <p className="text-sm text-text-md leading-relaxed line-clamp-3 mb-6">
                    {proj.headline}
                  </p>
                </div>

                {/* Key Metric Highlights on card */}
                <div className="pt-4 border-t border-border-subtle/60">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-text-lo">
                        Retention Rate
                      </div>
                      <div className="text-lg font-serif text-brand-teal font-medium">
                        {proj.metrics.retentionRate}%
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-text-lo">
                        Recovered Fails
                      </div>
                      <div className="text-lg font-serif text-text-hi font-medium">
                        ${proj.metrics.recoveredAmount.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-text-hi group-hover:text-brand-teal transition-colors pt-2 border-t border-border-subtle/30">
                    See Case Study
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Case Study Modal Overlay */}
        <AnimatePresence>
          {selectedProj && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-bg-deep/80 backdrop-blur-md overflow-y-auto px-4 py-8 flex items-center justify-center"
            >
              <motion.div
                initial={{ transform: "scale(0.95)", y: 20, opacity: 0 }}
                animate={{ transform: "scale(1)", y: 0, opacity: 1 }}
                exit={{ transform: "scale(0.95)", y: 20, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-bg-card border border-border-strong rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl relative z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProj(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-border-subtle/50 text-text-md hover:text-text-hi transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <span className="text-4xl select-none">{selectedProj.emoji}</span>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-md bg-bg-mid px-2.5 py-1 rounded-full">
                      {selectedProj.location}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-text-hi mt-1">
                      {selectedProj.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-semibold text-brand-teal mb-8 italic">
                  "{selectedProj.headline}"
                </p>

                {/* Key Metrics Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-bg-mid border border-border-subtle mb-8 text-center sm:text-left">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-lo">
                      Retention with Tazka
                    </span>
                    <div className="text-3xl font-serif text-brand-teal font-medium mt-1">
                      {selectedProj.metrics.retentionRate}%
                    </div>
                    <span className="text-[10px] text-text-lo">
                      from {selectedProj.metrics.initialRetention}% baseline
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-lo">
                      Failure Recovery Saved
                    </span>
                    <div className="text-3xl font-serif text-text-hi font-medium mt-1">
                      ${selectedProj.metrics.recoveredAmount.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-text-md font-bold">
                      Directly salvaged
                    </span>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-lo">
                      Active Donors
                    </span>
                    <div className="text-3xl font-serif text-text-hi font-medium mt-1">
                      {selectedProj.metrics.donorCount}+
                    </div>
                    <span className="text-[10px] text-text-lo">
                      Sadaqah &amp; Zakat
                    </span>
                  </div>
                </div>

                {/* Case Study Written Block */}
                <div className="space-y-6 text-sm mb-8 max-h-80 overflow-y-auto pr-2">
                  <div>
                    <h5 className="font-bold uppercase text-[10px] tracking-widest text-brand-teal mb-1">
                      The Challenge
                    </h5>
                    <p className="text-text-md leading-relaxed">{selectedProj.challenge}</p>
                  </div>

                  <div>
                    <h5 className="font-bold uppercase text-[10px] tracking-widest text-brand-teal mb-1">
                      The Tazka Solution
                    </h5>
                    <p className="text-text-md leading-relaxed">{selectedProj.solution}</p>
                  </div>

                  <div>
                    <h5 className="font-bold uppercase text-[10px] tracking-widest text-brand-teal mb-1">
                      The Tazka Lift
                    </h5>
                    <p className="text-text-md leading-relaxed">{selectedProj.lift}</p>
                  </div>
                </div>

                {/* CTA inside Project Modal */}
                <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-xs text-text-lo">
                    © 2026 Tazka · Client results verified.
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProj(null)}
                    className="w-full sm:w-auto text-center btn-teal bg-brand-teal hover:bg-brand-teal-dk text-white font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-xl transition-all"
                  >
                    Replicate this design
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
