import { modules } from "@/data/modules";

export default function Modules() {
  return (
    <section className="px-8 py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Core Modules</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div key={module} className="border p-4 rounded-lg">
            {module}
          </div>
        ))}
      </div>
    </section>
  );
}
