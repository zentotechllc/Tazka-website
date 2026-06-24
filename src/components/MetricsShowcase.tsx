import { motion } from "motion/react";
import { Calendar, BookOpen, CreditCard, BarChart3, ArrowUpRight } from "lucide-react";

export default function MetricsShowcase() {
  const features = [
    {
      icon: <Calendar className="w-5 h-5 text-brand-teal" />,
      title: "Hijri Calendar Engine",
      desc: "Nightly lunar recalculations. Key dates like Ramadan peaks and Last 10 Nights trigger appeals automatically.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-brand-teal" />,
      title: "Scholar-Reviewed Templates",
      desc: "Comprehensive appeal templates pre-vetted for Islamic compliance, and matching strict charitable protocols.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-brand-teal" />,
      title: "Card Failure Recovery",
      desc: "Instant card failure detection and automated, polite recovery pipelines before campaigns expire.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-brand-teal" />,
      title: "Retention Analytics",
      desc: "First of its kind visualization dashboard tracking your core retention score and donation trends.",
    },
  ];

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 mt-[-3rem] md:mt-[-4rem]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-bg-card border border-border-strong rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-900/5"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-border-subtle/80">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className={`pt-6 sm:pt-0 lg:px-6 first:pl-0 last:pr-0 border-t sm:border-t-0 border-border-subtle/40 group cursor-default`}
              >
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-xl bg-brand-teal/8 border border-brand-teal/15 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-teal/15 transition-all duration-300">
                  {feat.icon}
                </div>

                <div className="flex items-center gap-1.5 mb-2.5">
                  <h4 className="text-base font-bold text-text-hi group-hover:text-brand-teal transition-colors duration-300">
                    {feat.title}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-lo group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-0 group-hover:opacity-100 transition-all" />
                </div>

                <p className="text-sm sm:text-base text-text-md leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
