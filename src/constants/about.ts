import { Zap, Shield, Target } from "lucide-react";
import type { Principle } from "@/types";

export const FOUNDER_BIO = {
  paragraphs: [
    "We started Accelprod after 10+ years building products across healthcare, finance, e-commerce, and AI. The pattern was clear: strong product ideas often fail because execution is slow, fragile, or disconnected from product thinking.",
    "Our focus is simple: help ambitious teams build production-grade software faster, using AI-accelerated engineering with senior technical discipline and no messy handoff.",
  ],
  founders: [
    { name: "Mithun Chandar V", initials: "MC", linkedin: "https://linkedin.com/in/mithunchandar" },
    { name: "Ramachandran K",   initials: "RK", linkedin: "https://linkedin.com/in/ramachandrank" },
  ],
  role: "Co-Founders · Accelprod",
} as const;

export const WHY_LYRNIQUE: Principle[] = [
  {
    icon: Target,
    title: "Early-Stage Startups",
    body: "For founders validating product ideas and moving from concept to MVP.",
  },
  {
    icon: Zap,
    title: "Funded SaaS Companies",
    body: "For teams adding AI capabilities, copilots, automation, or new product lines.",
  },
  {
    icon: Shield,
    title: "Product-Focused Businesses",
    body: "For businesses integrating AI into workflows, internal tools, dashboards, and API-driven systems.",
  },
];

/** @deprecated kept for type compat */
export const FOUNDERS = [] as never[];
export const PRINCIPLES = WHY_LYRNIQUE;
