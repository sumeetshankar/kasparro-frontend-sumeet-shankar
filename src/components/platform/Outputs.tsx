import SectionHeader from "@/components/shared/SectionHeader";

const outputs = [
  "AI Visibility Score",
  "Prompt-level brand presence",
  "AI sentiment & trust signals",
  "Competitor comparison inside AI answers",
  "Actionable optimization recommendations",
];

export default function Outputs() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">
      <SectionHeader
        title="What Brands Receive"
        subtitle="Outputs are designed for the AI-first search landscape."
      />

      <ul className="grid md:grid-cols-2 gap-4">
        {outputs.map((item) => (
          <li key={item} className="border rounded-lg p-4">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
