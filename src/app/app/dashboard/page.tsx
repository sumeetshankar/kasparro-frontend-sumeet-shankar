import BrandSelector from "@/components/app/BrandSelector";
import StatCard from "@/components/app/StatCard";
import { dashboardData } from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <>
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <BrandSelector />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard label="AI Visibility Score" value={dashboardData.aiVisibilityScore} />
        <StatCard label="Trust / EEAT Score" value={dashboardData.trustScore} />
        <StatCard label="Keyword Coverage" value={`${dashboardData.keywordCoverage}%`} />
        <StatCard label="Last Audit" value={dashboardData.lastAudit} />
      </div>
    </>
  );
}
