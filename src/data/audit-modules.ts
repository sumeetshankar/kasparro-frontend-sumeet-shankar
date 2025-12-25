import { AuditModule } from "@/types/audit";

export const auditModules: AuditModule[] = [
  {
    id: "visibility",
    name: "AI Visibility Index",
    score: 78,
    insights: [
      "Brand appears in 62% of relevant AI responses",
    ],
    issues: [
      "Low presence in comparison prompts",
    ],
    recommendations: [
      "Strengthen entity associations",
    ],
  },
  {
    id: "sentiment",
    name: "Brand Sentiment",
    score: 81,
    insights: ["Mostly positive AI summaries"],
    issues: ["Some neutral bias detected"],
    recommendations: ["Publish authoritative opinion pieces"],
  },
];
