import { cn } from '@/lib/utils';
import { BarChart3, FileText, FolderKanban, Package, TrendingUp, Users } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'clients', label: 'CRM Clients', icon: Users },
    { id: 'invoicing', label: 'Facturation', icon: FileText },
    { id: 'projects', label: 'Projets', icon: FolderKanban },
    { id: 'catalog', label: 'Catalogue', icon: Package },
    { id: 'analytics', label: 'Analytique', icon: TrendingUp }
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl z-50">
      {/* Logo */}
      <div className="p-6 border-b border-blue-900/50">
        <div className="flex items-center space-x-3">
          <img src="/images/innov'webtech.jpg" alt="Innov'WebTech" className="w-16 h-16 rounded-xl object-contain shadow-lg transform hover:scale-105 transition-transform bg-white" />
          <div>
            <h1 className="text-xl font-bold">InnovWebTech</h1>
            <p className="text-xs text-blue-300">ERP v1.0</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
              activeTab === item.id
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg scale-105"
                : "hover:bg-blue-900/30 hover:translate-x-1"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-900/50">
        <div className="flex items-center space-x-3 px-3 py-2 bg-blue-900/30 rounded-lg">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">
            SG
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Stéphane G.</p>
            <p className="text-xs text-blue-300">Administrateur</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
