"use client";

import { useState } from "react";
import { auditModules } from "@/data/audit-modules";
import ModuleList from "@/components/app/ModuleList";
import ModuleDetail from "@/components/app/ModuleDetail";

export default function AuditPage() {
  const [selectedModuleId, setSelectedModuleId] = useState(
    auditModules[0].id
  );

  const selectedModule = auditModules.find(
    (m) => m.id === selectedModuleId
  );

  if (!selectedModule) return null;

  return (
    <div className="flex h-full">
      <ModuleList
        modules={auditModules}
        selectedId={selectedModuleId}
        onSelect={setSelectedModuleId}
      />

      <ModuleDetail module={selectedModule} />
    </div>
  );
}
