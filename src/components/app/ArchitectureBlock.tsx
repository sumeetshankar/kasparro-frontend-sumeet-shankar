type Props = {
  title: string;
  description: string;
  items?: string[];
};

export default function ArchitectureBlock({
  title,
  description,
  items,
}: Props) {
  return (
    <div className="border border-zinc-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>

      {items && (
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
