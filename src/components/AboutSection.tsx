import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Target, ShieldCheck, UserCheck } from "lucide-react";

export default function AboutSection() {
  const points = [
    {
      icon: <Target className="w-5 h-5 text-brand-teal" />,
      title: "Designation Tracking",
      desc: "Zakat, Sadaqah, Lillah, Qurbani, or Building Fund — tracked separately and automatically routed.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
      title: "Fixed Fee, No Cuts",
      desc: "Flat monthly billing only. We never take a percentage of your donor’s hard-earned generosity.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-brand-teal" />,
      title: "Always human-in-the-loop",
      desc: "Every lunar campaign or failure email requires your approval before any message goes to donors.",
    },
  ];

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left card with bento elements inside */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-bg-card border border-border-strong rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl"
          >
            {/* Absolute radial glow */}
            <div className="absolute top-[-60px] right-[-60px] w-60 h-60 rounded-full bg-radial from-brand-teal/10 to-transparent pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/8 border border-brand-teal/20 text-xs text-brand-teal font-bold uppercase tracking-wider mb-6">
              ✦ Built for your community
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-text-hi leading-snug mb-8">
              The system that understands <em className="text-brand-teal font-serif font-medium font-normal">Zakat</em>,{" "}
              <span className="text-brand-teal font-serif italic">Sadaqah</span>, and{" "}
              <span className="text-brand-teal font-serif italic">Laylatul Qadr</span>.
            </h3>

            {/* Inner items list */}
            <div className="space-y-4">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-bg-mid border border-border-subtle hover:border-brand-teal/30 p-4.5 rounded-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/8 flex items-center justify-center shrink-0">
                    {pt.icon}
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-text-hi mb-1">
                      {pt.title}
                    </h5>
                    <p className="text-sm text-text-md leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right text story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center lg:py-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
              Our Origin
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif text-text-hi leading-tight mb-6">
              We watched a community center wait <em className="text-brand-teal">seven years.</em>
            </h2>

            <p className="text-text-md text-base sm:text-lg leading-relaxed mb-5">
              In 2019, Muslim Youth Central broke ground on a community center in Columbus, Ohio. By 2026, it was still half-finished — not from lack of will, but from lack of a systematic donor retention program. We built Tazka to solve this once and for all.
            </p>

            <p className="text-text-md text-base sm:text-lg leading-relaxed mb-6">
              Tazka comes from the Arabic root <strong>ز-ك-و</strong> — the same root as{" "}
              <em className="text-brand-teal not-italic">Zakat</em> and{" "}
              <em className="text-brand-teal not-italic">Tazkiyah</em>. To purify. To grow. We built it for primary caretakers, volunteers, and organizations doing the most vital community work, who are left completely underserved by standard modern commercial CRM systems.
            </p>

            <div className="border-l-[3.5px] border-brand-teal pl-5 my-6">
              <blockquote className="text-base sm:text-xl font-serif text-text-hi italic leading-relaxed">
                "The community built the foundation. Now let’s finish what we started together."
              </blockquote>
              <cite className="text-[10px] font-bold text-text-lo tracking-widest uppercase mt-2.5 block not-italic">
                — MYC Campaign Core Vision · Columbus, Ohio
              </cite>
            </div>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex self-start items-center gap-2 border border-brand-teal/40 hover:border-brand-teal hover:bg-brand-teal/5 text-brand-teal font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-all"
            >
              See if Tazka fits your organization
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
