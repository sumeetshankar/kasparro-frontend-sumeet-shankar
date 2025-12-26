import { AuditModule } from "@/types/audit";

type Props = {
  modules: AuditModule[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function ModuleList({
  modules,
  selectedId,
  onSelect,
}: Props) {
  return (
    <aside className="w-64 border-r border-zinc-800 p-4 space-y-2">
      {modules.map((module) => (
        <button
          key={module.id}
          onClick={() => onSelect(module.id)}
          className={`w-full text-left p-3 rounded ${
            selectedId === module.id
              ? "bg-white text-black"
              : "hover:bg-zinc-800"
          }`}
        >
          {module.name}
        </button>
      ))}
    </aside>
  );
}