import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FaqItem } from "../types";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      id: "pct",
      question: "Do you take a percentage of donations?",
      answer: "Never. Tazka charges a flat monthly fee only. Every dollar you raise belongs 100% to your nonprofit. We don't benefit from your donation volume — this is an absolute, non-negotiable principle for us.",
    },
    {
      id: "funds",
      question: "Do you hold our donor funds?",
      answer: "No. Your donors give directly through your own connected Stripe, Authorize.Net, or CardConnect gateway account. Tazka is a technology configuration and automation layer — we never see, touch, or hold a single penny of your funds.",
    },
    {
      id: "dfy",
      question: "What does 'done-for-you' actually mean?",
      answer: "We configure your entire donor retention sandbox. We write any custom messaging. We set up physical mobile SMS and email pathways, manage local moon offset preferences, and handle technical connections. You click approve, then monitor your dashboard. You manage your community. We manage the system.",
    },
    {
      id: "diff",
      question: "How is Tazka different from Bloomerang?",
      answer: "Bloomerang is a generic nonprofit CRM built for secular charities. Tazka is a retention engine built specifically for US Muslim nonprofits. We natively understand Zakat designation vs. general Sadaqah, we calculate the shifting Hijri calendar automatedly, our templates are Shariah-pre-approved, and we are flat-fee.",
    },
    {
      id: "moon",
      question: "Do you support local moon sighting or regional discrepancies?",
      answer: "Yes. Growth and Enterprise subscribers enjoy manual override controls. If your Masjid observes physical local moon sighting rather than the standard lunar calculations, you can change your Ramadan or Eid start date in one click.",
    },
    {
      id: "onboarding",
      question: "How long does onboarding take?",
      answer: "Typically under 2 weeks. Week 1 is securing safe connections and importing donors. Week 2 is copywriting adjustments, calendar tuning, and launch training. We handle 95% of this work.",
    },
    {
      id: "leave",
      question: "What happens if we want to cancel?",
      answer: "You are free to leave whenever you wish. There are no cancellation fees, lock-ins, or exit traps. We provide a full, formatted export of your entire donor database, giving logs, and campaign assets. Your donors are yours.",
    }
  ];

  return (
    <section id="faq" className="py-36 lg:py-40 bg-bg-deep select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
            Q&amp;A
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-text-hi leading-none mb-4">
            Common <em className="text-brand-teal">Questions.</em>
          </h2>
          <p className="text-text-md text-lg sm:text-xl md:text-2xl mt-2 leading-relaxed max-w-2xl mx-auto">
            Everything you need to understand about our retention tech, fund routing, and lunar automation.
          </p>
        </div>

        {/* Accordeon list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.id}
                className="bg-bg-card border border-border-strong/70 hover:border-brand-teal/30 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5.5 h-5.5 text-text-lo shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg font-bold text-text-hi leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${isOpen ? "border-brand-teal bg-brand-teal text-white" : "border-border-strong text-text-lo"} transition-all`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-text-md leading-relaxed border-t border-border-subtle/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
