type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
