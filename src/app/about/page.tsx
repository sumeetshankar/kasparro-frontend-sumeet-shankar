import SectionHeader from "@/components/shared/SectionHeader";

export default function AboutPage() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">
      <SectionHeader
        title="Our Mission"
        subtitle="Building visibility for brands in the AI-first search era."
      />
      <p className="text-gray-400 mb-16">
        Kasparro exists to help brands understand how AI systems perceive,
        summarize, and recommend them — beyond traditional SEO metrics.
      </p>

      <SectionHeader
        title="Product Philosophy"
        subtitle="Built by engineers, for an AI-native future."
      />
      <p className="text-gray-400 mb-16">
        We believe AI search requires a new mental model. Kasparro is designed
        as a system of interpretable modules that reflect how modern AI engines
        reason about brands.
      </p>

      <SectionHeader
        title="Vision"
        subtitle="SEO beyond search engines."
      />
      <p className="text-gray-400">
        As AI becomes the default interface to knowledge, Kasparro aims to be
        the source of truth for brand intelligence inside AI systems.
      </p>
    </section>
  );
}
