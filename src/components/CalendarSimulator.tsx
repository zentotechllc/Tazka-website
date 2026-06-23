import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LunarPhase } from "../types";
import { Calendar, Moon, MessageSquare, Bell, ArrowRight, ShieldCheck, MoonStar } from "lucide-react";

export default function CalendarSimulator() {
  const [phase, setPhase] = useState<LunarPhase>("offseason");

  const phasesContent = {
    offseason: {
      date: "14 Safar 1447 AH",
      moonIcon: "🌙",
      phaseName: "Waxing Crescent (24%)",
      notifTitle: "Donor Milestone Triggered",
      notifDesc: "Anniversary sequence launched for 12 monthly donors.",
      smsText: "Assalamu Alaikum Ahmed, thank you for your regular Sadaqah donation of $50 this month. Your contribution helped maintain our pediatric clinic channels. Read our 1-min winter report: tazka.org/r/myc-r",
      statusText: "Idle season: Running standard expired-card failure recovery loops and annual donor anniversary sequences.",
      themeColor: "from-blue-500/10 to-transparent",
    },
    ramadan: {
      date: "1 Ramadan 1447 AH",
      moonIcon: "🌙",
      phaseName: "New Crescent (1%)",
      notifTitle: "Ramadan Campaign Initiated",
      notifDesc: "Welcoming 847 donors to the month of purification.",
      smsText: "Ramadan Mubarak Ahmed! Water project sponsorships are officially open for this beautiful night. Customize your daily Sadaqah automatically so you never miss giving: tazka.org/r/ramadan",
      statusText: "Zakat soliciting active: Automating donor segmentation to request Ramadan sponsorships safely and beautifully.",
      themeColor: "from-brand-teal/20 to-transparent",
    },
    last10: {
      date: "27 Ramadan 1447 AH",
      moonIcon: "🌘",
      phaseName: "Waning Gibbous (8%)",
      notifTitle: "Laylatul Qadr Schedule Active",
      notifDesc: "Delivering automation queues for the peak 27th night.",
      smsText: "Ahmed, it is the 27th night of Ramadan, which may cover Laylatul Qadr. Your automatic giving pledge is scheduled ($100 to Building Fund). Secure your multiply rewards: tazka.org/r/lqt",
      statusText: "Peak lunar delivery: Nightly automation pipelines are tuned for Laylatul Qadr with 99.8% server deliverability.",
      themeColor: "from-brand-saffron/20 to-transparent",
    },
    dhulhijjah: {
      date: "1 Dhul Hijjah 1447 AH",
      moonIcon: "🌙",
      phaseName: "New Crescent (3%)",
      notifTitle: "Qurbani Campaigns Active",
      notifDesc: "Launching campaigns for the best 10 days of the year.",
      smsText: "Assalamu Alaikum Ahmed, the blessed 10 days of Dhul Hijjah have begun. Secure your Qurbani distribution share for orphans. Fixed rate: $150. Instant confirmation: tazka.org/r/qur",
      statusText: "Sovereign campaigns: Automating Sadaqah and designated Qurbani campaigns with native gateway processing.",
      themeColor: "from-emerald-500/15 to-transparent",
    },
  };

  const current = phasesContent[phase];

  return (
    <section id="simulator" className="py-24 bg-bg-mid relative overflow-hidden">
      
      {/* Decorative vector background design glows */}
      <div className="absolute top-[30%] left-[-150px] w-96 h-96 rounded-full bg-radial from-brand-teal/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
            Core Engine Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-hi leading-none mb-4">
            Automated <em className="text-brand-teal">lunar campaign cycles.</em>
          </h2>
          <p className="text-text-md text-sm sm:text-base">
            The Hijri calendar shifts 11 days every solar year. Tazka’s automated engine tracks the lunar cycles nightly so your mosque campaigns fire precisely when the blessings begin — without any manual work.
          </p>

          {/* Interactive Navigation Menu Selector */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-xl mx-auto bg-bg-deep border border-border-subtle p-1 rounded-xl">
            {(["offseason", "ramadan", "last10", "dhulhijjah"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setPhase(tab)}
                className={`flex-1 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  phase === tab
                    ? "bg-brand-teal text-white font-semibold shadow-md shadow-brand-teal/10"
                    : "text-text-md hover:text-text-hi hover:bg-border-subtle/50"
                }`}
              >
                {tab === "offseason" ? "Off-Season" : tab === "ramadan" ? "Ramadan" : tab === "last10" ? "Last 10 Nights" : "Dhul Hijjah"}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left panel explaining what happening on selected season */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-lo bg-bg-deep border border-border-subtle px-3 py-1 rounded-full inline-block">
                    Current Hijri Date: {current.date}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif text-text-hi mt-4 leading-normal">
                    Tazka automates <br />
                    giving for{" "}
                    <span className="text-brand-teal italic font-medium font-normal">
                      {phase === "offseason"
                        ? "Regular Days"
                        : phase === "ramadan"
                        ? "Ramadan Opening"
                        : phase === "last10"
                        ? "Laylatul Qadr Peak"
                        : "Dhul Hijjah Days"}
                    </span>
                  </h3>
                </div>

                <p className="text-text-md text-sm sm:text-base leading-relaxed">
                  {current.statusText}
                </p>

                {/* Sub features block */}
                <div className="space-y-3.5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                    </div>
                    <span className="text-xs font-bold text-text-hi">
                      Approved by Shariah Scholars &amp; Imams
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <MoonStar className="w-3.5 h-3.5 text-brand-teal" />
                    </div>
                    <span className="text-xs font-bold text-text-hi">
                      Integrated timezone offsets &amp; sunset boundaries
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-teal hover:text-brand-teal-dk transition-colors"
                  >
                    Discuss your campaign templates
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right panel Mock Phone Interface rendering campaign outputs */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Base frame */}
            <div className="relative w-72 sm:w-[310px] h-[550px] bg-slate-900 border-[8px] border-border-strong rounded-[40px] shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Phone ear notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-border-strong rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Dynamic screen with seasonal gradients */}
              <div className={`absolute inset-0 bg-gradient-to-b ${current.themeColor} to-bg-deep z-0 transition-all duration-500`} />

              {/* Screen Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full pt-8 px-4 pb-4 justify-between">
                
                {/* Simulated Phone Top header status */}
                <div className="flex justify-between items-center text-xs text-text-lo font-semibold tracking-wider border-b border-border-subtle/40 pb-2">
                  <span>Tazka Net</span>
                  <div className="flex items-center gap-1.5 bg-bg-deep/50 px-2 py-0.5 rounded-full text-[11px]">
                    <Moon className="w-2.5 h-2.5 text-brand-teal" />
                    <span>Calculated: 1447 AH</span>
                  </div>
                </div>

                {/* Smartphone Notification & SMS bubble */}
                <div className="my-auto space-y-4">
                  <AnimatePresence mode="wait">
                    {/* Simulated OS Notification */}
                    <motion.div
                      key={`notif-${phase}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="bg-bg-card/90 border border-border-strong/80 p-3 rounded-2xl shadow-lg flex gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                        <Bell className="w-3.5 h-3.5 text-brand-teal" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text-hi block">
                          {current.notifTitle}
                        </span>
                        <p className="text-xs text-text-lo mt-0.5 leading-snug">
                          {current.notifDesc}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {/* Simulated Text Message chat bubble */}
                    <motion.div
                      key={`sms-${phase}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-1.5"
                    >
                      <span className="text-[11px] text-text-lo font-bold tracking-widest uppercase pl-1 block">
                        SMS appeal delivered
                      </span>
                      <div className="bg-border-strong/90 text-text-hi p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed max-w-[90%] shadow-lg border border-border-strong relative">
                        {current.smsText}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Simulated Phone Bottom Widget */}
                <div className="bg-bg-deep/70 backdrop-blur border border-border-subtle p-3 rounded-2xl text-center">
                  <span className="text-xs uppercase font-bold text-text-lo tracking-wider block">
                    Active Lunar Phase
                  </span>
                  <div className="text-xs font-bold text-text-hi mt-1 flex items-center justify-center gap-1.5">
                    <span className="text-sm">{current.moonIcon}</span>
                    <span>{current.phaseName}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
