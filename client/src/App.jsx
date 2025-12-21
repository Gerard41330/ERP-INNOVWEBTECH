export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full rounded-3xl bg-slate-900 p-8 shadow-2xl border border-slate-800">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-lg shadow-blue-500/40">
            I
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">INNOV'WEBTECH</h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">ERP Management v1.0</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <p className="text-xs text-slate-500 mb-1 font-bold">SYMFONY API</p>
            <p className="text-emerald-400 font-medium flex items-center gap-2 text-sm">
              <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
              En attente de connexion
            </p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <p className="text-xs text-slate-500 mb-1 font-bold">REACT FRONTEND</p>
            <p className="text-blue-400 font-medium flex items-center gap-2 text-sm">
              Tailwind v4 opérationnel
            </p>
          </div>
        </div>

        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-600/20">
          Lancer le Dashboard
        </button>
      </div>
    </div>
  )
}
