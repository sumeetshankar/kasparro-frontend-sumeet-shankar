import AppSidebar from "@/components/app/AppSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 p-8 bg-zinc-950 text-white">
        {children}
      </main>
    </div>
  );
}
