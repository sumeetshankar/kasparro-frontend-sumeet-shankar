/**
 * SectionHeader Component
 * 
 * This component renders a section header with a title and an optional subtitle.
 * It is used to provide a consistent look and feel for section headers across the application.
 *
 * Props:
 * - title (string): The main title to display.
 * - subtitle (string, optional): An optional subtitle to display below the title.
 *
 * Usage:
 * ```jsx
 * <SectionHeader title="Main Title" subtitle="Optional Subtitle" />
 * ```
 */
type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-medium mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
