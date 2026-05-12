import {
  Globe, Bot, LayoutDashboard, GitMerge, Smartphone,
} from "lucide-react";
import type { Deliverable, Service } from "@/types";

export const DELIVERABLES: Deliverable[] = [
  { icon: Globe,           label: "SaaS Platforms" },
  { icon: Smartphone,      label: "Product MVPs" },
  { icon: Bot,             label: "AI Agents" },
  { icon: LayoutDashboard, label: "Internal Tools" },
  { icon: GitMerge,        label: "APIs & Backends" },
];

export const SERVICES: Service[] = [
  {
    num: "// 01",
    name: "AI-Accelerated Product Builds",
    line: "Product-grade applications with real user flows, data models, and launch-ready architecture.",
    outcome: "Turn product ideas into usable software",
    stack: ["Product MVPs", "SaaS Platforms", "AI Features", "Product UI"],
    delay: "",
  },
  {
    num: "// 02",
    name: "AI Agents & Knowledge Systems",
    line: "Agent workflows, retrieval, evaluations, observability, and human review designed into the product.",
    outcome: "Use AI reliably inside real workflows",
    stack: ["AI Agents", "Knowledge Systems", "RAG", "Evaluations"],
    delay: "rd1",
  },
  {
    num: "// 03",
    name: "Workflow Systems",
    line: "Internal tools, automation systems, dashboards, and operational platforms for fast-moving teams.",
    outcome: "Reduce manual work with maintainable systems",
    stack: ["Internal Tools", "Automation Pipelines", "Dashboards", "Analytics"],
    delay: "rd2",
  },
  {
    num: "// 04",
    name: "API & Cloud Engineering",
    line: "Backend services, API integrations, deployment pipelines, and cloud infrastructure for production use.",
    outcome: "Make products easier to scale and operate",
    stack: ["API Integrations", "Cloud Deployment", "DevOps Pipelines", "QA & Testing"],
    delay: "rd3",
  },
];
