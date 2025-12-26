/**
 * AuditFlow Component
 * 
 * This component renders the AI-SEO Audit Pipeline section. It includes a section header
 * and a grid layout showcasing the pipeline steps: Input, AI Modules, and Actionable Insights.
 *
 * Props: None
 *
 * Usage:
 * ```jsx
 * <AuditFlow />
 * ```
 */
import SectionHeader from "@/components/shared/SectionHeader";

export default function AuditFlow() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <SectionHeader
        title="AI-SEO Audit Pipeline"
        subtitle="Kasparro analyzes how AI systems understand, rank, and recommend your brand."
      />

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-2">Input</h3>
          <p className="text-gray-500 text-sm">
            Brand data, content, competitors, prompts, and AI-visible sources. For example,
            ensuring your brand's data is structured for AI systems to interpret effectively.
          </p>
        </div>

        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-2">AI Modules</h3>
          <p className="text-gray-500 text-sm">
            Modules that simulate AI behavior to evaluate how your brand is ranked and recommended.
            This includes testing visibility in AI-generated summaries and responses.
          </p>
        </div>
      </div>
    </section>
  );
}
