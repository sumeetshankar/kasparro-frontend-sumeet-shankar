import SectionHeader from "@/components/shared/SectionHeader";

const inputs = [
  "Website content",
  "Brand entities & knowledge graph signals",
  "Competitor brands",
  "AI prompt patterns",
  "Public citations & references",
];

export default function Inputs() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <SectionHeader
        title="What Data Kasparro Consumes"
        subtitle="Kasparro ingests data that AI systems actually use — not just search engine crawlers."
      />

      <ul className="grid md:grid-cols-2 gap-4">
        {inputs.map((item) => (
          <li key={item} className="border rounded-lg p-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
