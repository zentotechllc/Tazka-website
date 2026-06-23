export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  category: "masjid" | "school" | "charity" | "all";
  typeLabel: string;
  metrics: {
    retentionRate: number;
    initialRetention: number;
    recoveredAmount: number;
    donorCount: number;
    buildingFundProgress?: number;
    lapsedRecoveredProgress?: number;
  };
  headline: string;
  challenge: string;
  solution: string;
  lift: string;
  emoji: string;
  bgGradient: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  id: string;
  price: string;
  period: string;
  isPopular?: boolean;
  descr: string;
  features: string[];
  ctaText: string;
}

export type LunarPhase = "offseason" | "ramadan" | "last10" | "dhulhijjah";
