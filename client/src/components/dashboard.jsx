import { useState } from 'react';
import Header from './dashboard/Header';
import Sidebar from './dashboard/Sidebar';
import StatsGrid from './dashboard/StatsGrid';
// Importez les autres composants...

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="ml-64 p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello World</h1>
        <Header />
        <StatsGrid />
        {/* Ajoutez les autres sections ici */}
      </main>
    </div>
  );
}
