import { Button } from "@/components/ui/button";
import { Box, FileText, LayoutDashboard, LogOut, Settings, Users } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "#" },
  { icon: Users, label: "Clients (CRM)", href: "#" },
  { icon: FileText, label: "Factures", href: "#" },
  { icon: Settings, label: "Paramètres", href: "#" },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col border-r bg-card shadow-lg">
      <div className="flex h-20 items-center px-6 border-b">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
            <Box className="h-5 w-5" />
          </div>
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InnovWebTech</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-3 py-6">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-3 font-medium rounded-lg transition-all duration-200 px-4 py-6"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="border-t p-4">
        <Button variant="ghost" className="w-full justify-start gap-3 rounded-lg transition-all duration-200 px-4 py-6">
          <LogOut className="h-5 w-5" />
          Déconnexion
        </Button>
      </div>
    </div>
  );
}
