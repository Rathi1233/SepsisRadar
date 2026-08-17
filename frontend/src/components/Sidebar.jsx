import { Link, useLocation } from "react-router";

function Sidebar() {
  const location = useLocation();

  const isDashboard =
    location.pathname === "/dashboard";

  return (
    <aside className="fixed left-0 top-0 z-20 flex h-screen w-64 flex-col bg-[#0d1b2a] text-white">
      
      {/* Logo */}
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-3">
          
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
            S
          </div>

          <div>
            <h1 className="font-bold">
              SepsisRadar
            </h1>

            <p className="text-xs text-slate-400">
              ICU EARLY WARNING
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Navigation
        </p>

        <Link
          to="/dashboard"
          className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
            isDashboard
              ? "bg-blue-600 text-white"
              : "text-slate-300 hover:bg-white/5"
          }`}
        >
          <span>▦</span>
          Dashboard
        </Link>

      </div>

      {/* Bottom */}
      <div className="mt-auto border-t border-white/10 p-5">

        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          System online
        </div>

        <p className="mt-2 text-xs text-slate-500">
          ML risk monitoring active
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;