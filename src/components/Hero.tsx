import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Sparkles, Moon, DollarSign } from "lucide-react";

export default function Hero() {
  const [activeDonors, setActiveDonors] = useState([
    { initials: "AH", color: "#0F5E46", bg: "#E6F4EA", name: "Ahmed Hassan", status: "Active", amount: "$500", desc: "Sadaqah — 3 mins ago", tagClass: "text-green-800 bg-green-100" },
    { initials: "FK", color: "#1D4ED8", bg: "#EFF6FF", name: "Fatima Khan", status: "New", amount: "$150", desc: "Zakat — 11 mins ago", tagClass: "text-blue-800 bg-blue-100" },
    { initials: "MA", color: "#A16207", bg: "#FEF3C7", name: "Mohammed Ali", status: "At Risk", amount: "$—", desc: "Lapsed last 6mo", tagClass: "text-amber-800 bg-amber-100" },
  ]);

  const [counterDonor, setCounterDonor] = useState(820);
  const [counterRaised, setCounterRaised] = useState(3800);

  useEffect(() => {
    // Elegant counts ticker
    const interval = setInterval(() => {
      setCounterDonor((prev) => (prev < 847 ? prev + 1 : prev));
      setCounterRaised((prev) => (prev < 4200 ? prev + 15 : prev));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const chartData = [28, 42, 36, 50, 94, 76, 54, 62, 40, 48, 52, 70];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 lg:py-0 overflow-hidden">
      {/* Decorative Blur Background Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full bg-radial from-brand-teal/8 to-transparent blur-3xl pointer-events-none glow-drift-1" />
      <div className="absolute bottom-[5%] left-[-10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-radial from-brand-saffron/4 to-transparent blur-3xl pointer-events-none glow-drift-2" />

      {/* Subtle Dot Grid Mask */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-template-columns lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text and Marketing Layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* High-end decorative chip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-xs text-brand-teal font-bold uppercase tracking-wider mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              Done-for-you · Muslim Nonprofits · US
            </motion.div>

            {/* Title display */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.08] tracking-tight text-text-hi mb-6"
            >
              Keep the donors <br />
              you worked <span className="relative inline-block text-brand-teal italic">
                hard to find.
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-[2.5px] bg-brand-teal/70 rounded"
                />
              </span>
            </motion.h1>

            {/* Description Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-md text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              Muslim nonprofits lose <span className="text-text-hi font-semibold">60–70% of donors</span> every year — not from lack of generosity, but from lack of follow-up. Tazka is the retention engine built specifically for your community.
            </motion.p>

            {/* Lead actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="btn-teal inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dk text-white font-bold uppercase tracking-wider text-xs px-8 py-5 rounded-xl transition-all shadow-lg shadow-brand-teal/10 hover:scale-[1.03] active:scale-[0.98]"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="btn-outline inline-flex items-center gap-2 border border-brand-teal/40 hover:border-brand-teal hover:bg-brand-teal/5 text-brand-teal font-bold tracking-wider text-xs px-8 py-4 rounded-xl transition-all"
              >
                See Case Studies
              </a>
            </motion.div>

            {/* Premium quick validation counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border-subtle"
            >
              <div className="border-l-2 border-brand-teal pl-4">
                <div className="text-2xl sm:text-3xl font-serif text-text-hi font-medium">78%</div>
                <div className="text-[10px] sm:text-xs text-text-lo font-semibold uppercase tracking-wider mt-1 leading-snug">
                  Avg. Retention<br />Rate with Tazka
                </div>
              </div>

              <div className="border-l-2 border-border-strong pl-4">
                <div className="text-2xl sm:text-3xl font-serif text-text-hi font-medium">2 Wks</div>
                <div className="text-[10px] sm:text-xs text-text-lo font-semibold uppercase tracking-wider mt-1 leading-snug">
                  Onboarding to<br />Go-Live Setup
                </div>
              </div>

              <div className="border-l-2 border-border-strong pl-4">
                <div className="text-2xl sm:text-3xl font-serif text-text-hi font-medium">0%</div>
                <div className="text-[10px] sm:text-xs text-text-lo font-semibold uppercase tracking-wider mt-1 leading-snug">
                  Donation Cuts<br />Flat Fee Model
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Live Dashboard mock visual */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-black/40 relative z-10 border border-border-strong"
            >
              {/* Header */}
              <div className="bg-bg-mid border-b border-border-subtle px-5 py-4 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider uppercase text-text-hi font-sans">
                  Tazka — Pilot Live Console
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                  Live active
                </span>
              </div>

              {/* Stats Block */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-bg-mid border border-border-subtle rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-text-lo">
                      Donors Synced
                    </div>
                    <div className="text-2xl font-serif text-text-hi mt-1 font-medium">
                      {counterDonor}
                      <span className="text-brand-teal text-sm ml-0.5">+</span>
                    </div>
                    <span className="text-xs font-semibold text-green-800 bg-green-100 px-2.5 py-1 rounded-full mt-2 inline-block">
                      ↑ +18% vs last year
                    </span>
                  </div>

                  <div className="bg-bg-mid border border-border-subtle rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-text-lo">
                      Failures Recovered
                    </div>
                    <div className="text-2xl font-serif text-text-hi mt-1 font-medium">
                      ${counterRaised}
                    </div>
                    <span className="text-xs font-semibold text-green-800 bg-green-100 px-2.5 py-1 rounded-full mt-2 inline-block">
                      Saved this Qtr
                    </span>
                  </div>
                </div>

                {/* Micro Bar Chart */}
                <div className="mb-5 bg-bg-mid/40 border border-border-subtle/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-lo">
                      12-Month Giving Cycle
                    </span>
                    <span className="text-xs font-bold text-green-800 tracking-wider bg-green-100 px-2.5 py-1 rounded">
                      Ramadan Spike ↗
                    </span>
                  </div>
                  
                  {/* Bars layout */}
                  <div className="flex items-end gap-2.5 h-16 pt-2 select-none">
                    {chartData.map((val, i) => {
                      const isPeak = i === 4; // Ramadan index
                      const isCurrentM = i === 11; // Current
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                          <motion.div
                            initial={{ height: 4 }}
                            animate={{ height: `${(val / 100) * 100}%` }}
                            transition={{ duration: 1, delay: 0.1 * i }}
                            className={`w-full rounded-t-sm ${
                              isPeak
                                ? "bg-brand-teal shadow-md shadow-brand-teal/20"
                                : isCurrentM
                                ? "bg-brand-saffron shadow-md shadow-brand-saffron/20"
                                : "bg-border-strong hover:bg-text-lo transition-colors"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="h-[1px] bg-border-subtle my-4" />

                {/* Donor Feed Items */}
                <div className="space-y-3">
                  {activeDonors.map((donor, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-border-subtle/40 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0"
                          style={{ backgroundColor: donor.bg, color: donor.color }}
                        >
                          {donor.initials}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-hi leading-normal">
                            {donor.name}
                          </div>
                          <div className="text-xs text-text-lo tracking-wide">
                            {donor.desc}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-text-hi">{donor.amount}</span>
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${donor.tagClass}`}>
                          {donor.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Live notification popup block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-[-20px] left-[-30px] z-20 hidden md:flex items-center gap-3.5 bg-bg-card2 border border-border-strong px-5 py-4 rounded-xl shadow-xl max-w-xs"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-teal/10 border border-brand-teal/25 flex items-center justify-center text-lg shrink-0">
                🌙
              </div>
              <div>
                <span className="text-xs font-bold text-text-hi block">
                  Ramadan campaign triggered
                </span>
                <span className="text-xs text-text-md leading-normal block mt-0.5">
                  47 inactive donors reactivated automatically.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
