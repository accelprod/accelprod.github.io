import { Bot, Building2, ShieldCheck } from "lucide-react";
import type { Principle } from "@/types";

export const ENGINEERING_PRINCIPLES: Principle[] = [
  {
    icon: Bot,
    title: "AI Built In",
    body: "AI agents, knowledge workflows, evaluation, and human review are designed where they create real product value.",
  },
  {
    icon: Building2,
    title: "Production Architecture",
    body: "Authentication, permissions, backend structure, deployment, monitoring, and analytics are part of the build.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Handoff",
    body: "You get maintainable code, documentation, deployment access, and a system your team can keep improving.",
  },
];

/** @deprecated kept for backwards compat during transition */
export const COMPARISON_ROWS = [] as never[];
