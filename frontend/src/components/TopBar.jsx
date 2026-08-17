function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-6 backdrop-blur">

      <div>
        <p className="text-sm font-semibold text-slate-700">
          ICU Monitoring Dashboard
        </p>

        <p className="text-xs text-slate-400">
          SepsisRadar · ML Early Warning
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Live
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102a43] text-sm font-semibold text-white">
          SR
        </div>

      </div>

    </header>
  );
}

export default TopBar;