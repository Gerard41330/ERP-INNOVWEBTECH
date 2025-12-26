import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, DollarSign, FolderKanban, Users } from 'lucide-react';

export default function StatsGrid() {
  const stats = [
    {
      label: 'CA Mensuel',
      value: '12 450 €',
      change: '+18.3%',
      icon: DollarSign,
      color: 'from-blue-600 to-blue-700',
      detail: 'Décembre 2025'
    },
    {
      label: 'Projets Actifs',
      value: '8',
      change: '+2',
      icon: FolderKanban,
      color: 'from-cyan-600 to-cyan-700',
      detail: 'En cours'
    },
    {
      label: 'Clients',
      value: '24',
      change: '+5',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      detail: '18 pros, 6 particuliers'
    },
    {
      label: 'Factures en attente',
      value: '3',
      change: '5 780 €',
      icon: AlertCircle,
      color: 'from-amber-500 to-amber-600',
      detail: 'À relancer'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} className="hover:shadow-xl transition-all duration-300 border-slate-100 hover:border-blue-200 group">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.detail}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
