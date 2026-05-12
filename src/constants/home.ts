import {
  HeartPulse, Smartphone, CreditCard, ShoppingBag, Truck,
} from "lucide-react";
import type { Stat, Industry } from "@/types";

export const VALUE_PROPS: Stat[] = [
  { n: "Product Builds", l: "MVPs, SaaS platforms, agents, dashboards, and workflow products built for real users" },
  { n: "Production Engineering", l: "Architecture, auth, deployment, monitoring, QA, and handoff included" },
  { n: "Faster Shipping", l: "AI-accelerated engineering workflows shorten the path from idea to launch" },
];

/** @deprecated kept for type-compatibility; not used on main site */
export const HERO_STATS = VALUE_PROPS;

export const INDUSTRIES: Industry[] = [
  { label: "Fintech",       icon: CreditCard },
  { label: "SaaS",          icon: Smartphone },
  { label: "Healthcare",    icon: HeartPulse },
  { label: "E-commerce",    icon: ShoppingBag },
  { label: "Operations",    icon: Truck },
];

export const WORKFLOWS: string[] = [
  "Product Build",
  "Production Systems",
  "Clean Architecture",
  "Production Launch",
];
