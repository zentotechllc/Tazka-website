import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ListTodo, CheckCircle2, RefreshCw, Layers, Calendar, ChevronRight } from "lucide-react";

export default function ImplementationRoadmap() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "Phase 1: Kickoff & Import",
      days: "Days 1 — 4",
      title: "PCI-compliant gateway integration & secure database synthesis",
      descr: "Our engineers bind securely to your standard processing engine (Stripe, Authorize.Net, or CardConnect) using PCI-compliant, secure API tokens. We clean, de-duplicate, and organize your donor profile history, identifying active monthly commitments vs. lapsed supporters.",
      owner: "Tazka (95%) / You (5% Link Signoff)",
      deliverable: "Secure Tazka Sandbox created with fully cleaned donor files synced.",
      icon: <Layers className="w-5 h-5 text-brand-teal" />,
    },
    {
      label: "Phase 2: Customization & Approvals",
      days: "Days 5 — 9",
      title: "Lunar campaigns & content tailoring",
      descr: "Using your custom branding and messaging style guidelines, Tazka copywriting experts tailor a standard lunar campaign catalog pre-vetted by credentialed Shariah scholars. We establish timezone triggers, moon-sighting preferences, and Zakat offsets.",
      owner: "Tazka (100% Done-for-you)",
      deliverable: "All SMS appeals and email layouts tailored and loaded for final sign-off.",
      icon: <Calendar className="w-5 h-5 text-brand-teal" />,
    },
    {
      label: "Phase 3: Final Approval & Live",
      days: "Days 10 — 14",
      title: "One-click activation & live lunar tracking",
      descr: "Enjoy an interactive personal walkthrough of your live Tazka board. When you click 'Approve', automated card failure recovery starts working instantly, and the Hijri lunar calendar engine active-tracks moon sighting. Your fundraising results are 100% yours.",
      owner: "You (1-click Approval)",
      deliverable: "Live system outputting results, saving card expirations, and tracking donations.",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-teal" />,
    },
  ];

  return (
    <section className="py-36 lg:py-40 bg-bg-deep relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
            Implementation Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-hi leading-none mb-4">
            From onboarding to live in <em className="text-brand-teal">two weeks.</em>
          </h2>
          <p className="text-text-md text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            We manage 95% of the setup work. You review and click approve. The timeline is fast, transparent, and completely automated.
          </p>
        </div>

        {/* Timeline Horizontal / Clickable Indicators */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-3 gap-3">
            {steps.map((st, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`border rounded-2xl p-4.5 text-left transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-bg-card border-brand-teal shadow-xl shadow-brand-teal/5"
                      : "bg-bg-card2/50 border-border-strong/70 hover:border-text-lo"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[11px] sm:text-xs font-extrabold uppercase tracking-widest ${isActive ? "text-brand-teal" : "text-text-lo"}`}>
                      {st.days}
                    </span>
                    <span className="text-xs">{st.icon}</span>
                  </div>
                  <h4 className={`text-xs sm:text-sm font-bold leading-snug ${isActive ? "text-text-hi" : "text-text-md"}`}>
                    {st.label}
                  </h4>
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineGlow"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-teal"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Panel */}
        <div className="max-w-4xl mx-auto bg-bg-card border-2 border-border-strong rounded-3xl p-6 sm:p-10 relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left summary info */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full border border-brand-teal/15">
                    {steps[activeStep].days}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-lo">
                    Managed by: {steps[activeStep].owner}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-text-hi font-medium leading-snug">
                  {steps[activeStep].title}
                </h3>

                <p className="text-text-md text-sm sm:text-base leading-relaxed">
                  {steps[activeStep].descr}
                </p>
              </div>

              {/* Right deliverable details */}
              <div className="md:col-span-4 bg-bg-mid/90 p-5 rounded-2xl border border-border-subtle flex flex-col justify-between h-full min-h-[170px]">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-text-lo flex items-center gap-1.5 mb-2.5">
                    <ListTodo className="w-3.5 h-3.5 text-brand-teal" />
                    Key Deliverable
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-text-hi leading-relaxed">
                    {steps[activeStep].deliverable}
                  </p>
                </div>

                <div className="border-t border-border-subtle/60 pt-4.5 mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-teal">
                  <span>Week {activeStep + 1} Pipeline</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
