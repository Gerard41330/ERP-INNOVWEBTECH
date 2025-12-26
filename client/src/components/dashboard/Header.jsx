import { Box } from 'lucide-react';

export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <Box className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Innov'WebTech ERP</h1>
          <p className="text-sm text-gray-600">Tableau de bord</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Vue d'ensemble</h2>
        <p className="text-gray-600">Gérez votre micro-entreprise efficacement.</p>
      </div>
    </header>
  );
}
