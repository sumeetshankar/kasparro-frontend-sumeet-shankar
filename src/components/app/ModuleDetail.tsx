import { AuditModule } from "@/types/audit";

type Props = {
  module: AuditModule;
};

export default function ModuleDetail({ module }: Props) {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">{module.name}</h2>

      <p className="mb-6">
        <span className="text-gray-400">Score:</span>{" "}
        <span className="text-xl font-semibold">{module.score}</span>
      </p>

      <Section title="Key Insights" items={module.insights} />
      <Section title="Issues / Flags" items={module.issues} />
      <Section
        title="Recommendations"
        items={module.recommendations}
      />
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-1">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
