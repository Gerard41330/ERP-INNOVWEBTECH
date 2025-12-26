import { Sidebar } from "@/components/shared/Sidebar";

export function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden text-slate-900">
      {/* Barre latérale (Sidebar) - Reste fixe à gauche */}
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        {/* Barre du haut (Header) */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
          <div className="font-semibold text-blue-600">INNOV'WEBTECH <span className="text-slate-400 ml-2">/ ERP v1.0</span></div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
          </div>
        </header>

        {/* Contenu principal - C'est ici que tes pages s'afficheront */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
