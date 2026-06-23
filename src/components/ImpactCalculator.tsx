import { useState } from "react";
import { motion } from "motion/react";
import { Coins, ShieldAlert, Sparkles, TrendingUp, HeartHandshake } from "lucide-react";

export default function ImpactCalculator() {
  const [annualDonations, setAnnualDonations] = useState(250000);
  const [retentionRate, setRetentionRate] = useState(35);

  // Core calculations
  const lostAnnualBaseline = annualDonations * (1 - retentionRate / 100);
  const tazkaSecured = annualDonations * 0.78;
  const netSavingsGain = Math.max(0, tazkaSecured - (annualDonations * (retentionRate / 100)));

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-bg-deep select-none">
      {/* Decorative background glows */}
      <div className="absolute right-[-100px] top-[10%] w-[350px] h-[350px] rounded-full bg-radial from-brand-teal/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-3 block">
            Impact ROI Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-hi leading-none mb-4">
            Calculate your donor <em className="text-brand-teal">retention leakage.</em>
          </h2>
          <p className="text-text-md text-sm sm:text-base">
            Most nonprofits don't realize they lose 65% of their donors every single year. Use our interactive estimator to visualize what you are losing compared to what Tazka secures.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Panel Sliders */}
          <div className="lg:col-span-7 bg-bg-card border border-border-strong rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-text-hi uppercase tracking-widest block mb-6 px-1 border-b border-border-subtle/40 pb-3">
                1. Input your current metrics
              </span>

              {/* Slider 1: Annual Donations */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wide text-text-md flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-brand-teal" />
                    Annual Donations
                  </label>
                  <span className="text-lg font-serif text-text-hi font-bold">
                    ${annualDonations.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="25000"
                  value={annualDonations}
                  onChange={(e) => setAnnualDonations(Number(e.target.value))}
                  className="w-full h-2 bg-border-subtle rounded-lg appearance-none cursor-pointer accent-brand-teal focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #0F5E46 0%, #0F5E46 ${((annualDonations - 25000) / 975000) * 100}%, #CBD5E1 ${((annualDonations - 25000) / 975000) * 100}%, #CBD5E1 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-text-lo mt-2 font-semibold">
                  <span>$25,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              {/* Slider 2: Retention Rate */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-wide text-text-md flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-brand-saffron" />
                    Current Retention Rate
                  </label>
                  <span className="text-lg font-serif text-brand-saffron font-bold">
                    {retentionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="5"
                  value={retentionRate}
                  onChange={(e) => setRetentionRate(Number(e.target.value))}
                  className="w-full h-2 bg-border-subtle rounded-lg appearance-none cursor-pointer accent-brand-saffron focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #A16207 0%, #A16207 ${((retentionRate - 10) / 80) * 100}%, #CBD5E1 ${((retentionRate - 10) / 80) * 100}%, #CBD5E1 100%)`
                  }}
                />
                <div className="flex justify-between text-[10px] text-text-lo mt-2 font-semibold">
                  <span>10% (Churby)</span>
                  <span>35% (Masjid National Avg)</span>
                  <span>90% (Elite Retention)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border-subtle/50 text-[11px] text-text-lo leading-relaxed">
              *Calculated based on standard RFM nonprofit giving behaviors and a verified average of 78% retention maintained by Tazka’s automated moon-sighting workflows.
            </div>
          </div>

          {/* Right Panel Calculations & Outputs */}
          <div className="lg:col-span-5 bg-bg-card2 border-2 border-border-strong rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient gold glow highlight inside the card block */}
            <div className="absolute right-[-80px] bottom-[-80px] w-48 h-48 rounded-full bg-radial from-brand-saffron/10 to-transparent pointer-events-none" />

            <div>
              <span className="text-xs font-bold text-text-hi uppercase tracking-widest block mb-6 pb-3 border-b border-border-subtle/40">
                2. Your Tazka Savings
              </span>

              {/* Box 1: Annual Leakage */}
              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-text-lo flex items-center gap-1">
                  Yearly Donor Value Leakage
                </span>
                <div className="text-2xl font-serif text-red-700 mt-1 font-bold">
                  -${lostAnnualBaseline.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <span className="text-[10px] text-text-lo">
                  Lost annually from incomplete donation follow-up.
                </span>
              </div>

              {/* Box 2: Secure savings with Tazka */}
              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-teal flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
                  Secured with Tazka (78% Retention)
                </span>
                <div className="text-3xl font-serif text-brand-teal mt-1 font-bold">
                  ${tazkaSecured.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <span className="text-[10px] text-text-lo">
                  Active donor funds safely retained year-over-year.
                </span>
              </div>

              <div className="h-[1px] bg-border-subtle my-5" />

              {/* Net annual increase */}
              <div className="p-4 rounded-xl bg-bg-mid border border-border-subtle">
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-text-lo">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-teal" />
                  Net Fundraising Gains
                </div>
                <div className="text-2xl font-serif text-text-hi mt-1 font-bold">
                  +${netSavingsGain.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <span className="text-[10px] text-text-lo mt-1 block leading-relaxed">
                  Additional Zakat &amp; Sadaqah saved from churn every single year.
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="w-full text-center inline-flex justify-center items-center gap-2 bg-brand-teal hover:bg-brand-teal-dk text-white font-bold uppercase tracking-wider text-xs py-4 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4" />
                Claim your salvaged donations
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
