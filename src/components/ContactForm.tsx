import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orgName: "",
    orgType: "",
    challenge: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-mid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left Summary info */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-text-hi leading-tight">
              Ready to stop <em className="text-brand-teal">losing donors?</em>
            </h2>
            <p className="text-text-md text-base leading-relaxed mb-8">
              Book a free 20-minute strategy call. We’ll map out your current donor retention situation, show you a live demonstration, and tell you honestly if Tazka is the right fit.
            </p>

            {/* List items */}
            <div className="space-y-4">
              <div className="flex gap-4 items-center bg-bg-card border border-border-subtle p-4 rounded-xl hover:border-brand-teal/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/8 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-lo">
                    Email address
                  </span>
                  <div className="text-sm font-bold text-text-hi mt-0.5">
                    hello@tazka.org
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-bg-card border border-border-subtle p-4 rounded-xl hover:border-brand-teal/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-lo">
                    Operational hub
                  </span>
                  <div className="text-sm font-bold text-text-hi mt-0.5 leading-snug">
                    Columbus, Ohio · Serving USA Muslim Nonprofits
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-bg-card border border-border-subtle p-4 rounded-xl hover:border-brand-teal/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/8 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-lo">
                    Response Benchmark
                  </span>
                  <div className="text-sm font-bold text-text-hi mt-0.5">
                    Within 24 hours · Usually faster
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form panel */}
          <div className="bg-bg-card border-2 border-border-strong rounded-3xl p-6 sm:p-10 relative shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-text-lo pl-0.5">
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ahmed Hassan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-bg-mid border border-border-strong rounded-xl px-4 py-3 text-sm text-text-hi font-sans focus:border-brand-teal focus:outline-none transition-all placeholder:text-text-lo"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-text-lo pl-0.5">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="ahmed@yourmasjid.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-bg-mid border border-border-strong rounded-xl px-4 py-3 text-sm text-text-hi font-sans focus:border-brand-teal focus:outline-none transition-all placeholder:text-text-lo"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-text-lo pl-0.5">
                      Organization Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Islamic Center of Columbus"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="bg-bg-mid border border-border-strong rounded-xl px-4 py-3 text-sm text-text-hi font-sans focus:border-brand-teal focus:outline-none transition-all placeholder:text-text-lo"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-text-lo pl-0.5">
                      Organization Type
                    </label>
                    <select
                      required
                      value={formData.orgType}
                      onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                      className="bg-bg-mid border border-border-strong rounded-xl px-4 py-3.5 text-sm text-text-hi font-sans focus:border-brand-teal focus:outline-none transition-all appearance-none cursor-pointer text-text-hi select-none"
                    >
                      <option value="" disabled>Select organization type</option>
                      <option value="masjid">Masjid / Islamic Center</option>
                      <option value="school">Islamic School / Academy</option>
                      <option value="charity">Islamic Charity / NGO</option>
                      <option value="other">Other Muslim Nonprofit</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-text-lo pl-0.5">
                      What is your biggest donor retention challenge?
                    </label>
                    <textarea
                      placeholder="Tell us a bit about your situation..."
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="bg-bg-mid border border-border-strong rounded-xl px-4 py-3 text-sm text-text-hi font-sans focus:border-brand-teal focus:outline-none transition-all h-24 resize-none placeholder:text-text-lo"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-center inline-flex justify-center items-center gap-2 bg-brand-teal hover:bg-brand-teal-dk text-white font-bold uppercase tracking-wider text-xs py-4 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4 py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto border border-brand-teal/20">
                    <CheckCircle className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h4 className="text-xl font-serif text-text-hi font-medium">
                    Barakallahu Feek!
                  </h4>
                  <p className="text-xs text-text-md max-w-sm mx-auto leading-relaxed">
                    Message sent successfully. Ahmed, our onboarding team will reach out to you within 24 hours to schedule your free diagnostic consultation.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", orgName: "", orgType: "", challenge: "" });
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-brand-teal hover:text-brand-teal-dk pt-4 cursor-pointer"
                  >
                    Send another query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
