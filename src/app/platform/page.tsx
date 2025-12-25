import AuditFlow from "@/components/platform/AuditFlow";
import Inputs from "@/components/platform/Inputs";
import Outputs from "@/components/platform/Outputs";

export default function PlatformPage() {
  return (
    <>
      <AuditFlow />
      <Inputs />
      <Outputs />
    </>
  );
}
