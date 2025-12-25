import ArchitectureBlock from "@/components/app/ArchitectureBlock";

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-4">
        Kasparro System Architecture
      </h1>

      {/* Inputs */}
      <ArchitectureBlock
        title="Inputs"
        description="Raw signals collected from the AI-visible web and brand ecosystem."
        items={[
          "Brand websites",
          "Public content & citations",
          "Competitor brands",
          "AI prompt patterns",
          "Knowledge graph signals",
        ]}
      />

      {/* Input Assembler */}
      <ArchitectureBlock
        title="InputAssembler"
        description="Normalizes and structures raw inputs into machine-readable context."
        items={[
          "Entity extraction",
          "Content normalization",
          "Prompt alignment",
        ]}
      />

      {/* Context Pack */}
      <ArchitectureBlock
        title="ContextPack"
        description="A structured representation of brand context used by AI systems."
        items={[
          "Brand entities",
          "Topical authority signals",
          "Trust & sentiment context",
        ]}
      />

      {/* Audit Modules */}
      <ArchitectureBlock
        title="Audit Modules"
        description="Independent, modular analyzers that evaluate brand performance inside AI systems."
        items={[
          "AI Visibility Index",
          "Prompt Presence",
          "Brand Sentiment",
          "Citation Tracking",
          "Competitor AI Share",
          "Content Authority",
          "AI Crawlability",
        ]}
      />

      {/* Outputs */}
      <ArchitectureBlock
        title="Output Surfaces"
        description="Actionable insights delivered to users."
        items={[
          "Dashboard metrics",
          "Module-level insights",
          "Recommendations",
          "Trend analysis",
        ]}
      />
    </div>
  );
}
