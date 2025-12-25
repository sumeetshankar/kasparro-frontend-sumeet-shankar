import SectionHeader from "@/components/shared/SectionHeader";

export default function AuditFlow() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <SectionHeader
        title="AI-SEO Audit Pipeline"
        subtitle="Kasparro analyzes how AI systems understand, rank, and recommend your brand."
      />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Input</h3>
          <p className="text-gray-400 text-sm">
            Brand data, content, competitors, prompts, and AI-visible sources.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">AI Modules</h3>
          <p className="text-gray-400 text-sm">
            Models analyze visibility, sentiment, citations, and authority.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Output</h3>
          <p className="text-gray-400 text-sm">
            Actionable insights on how AI systems perceive your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
