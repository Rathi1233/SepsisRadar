function RiskVelocity({ value }) {
  const increasing = value > 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        Risk Velocity
      </p>

      <div className="mt-5 flex items-end gap-3">
        <span className="text-4xl font-bold text-slate-900">
          {value >= 0 ? "+" : ""}
          {Number(value).toFixed(2)}
        </span>

        <span className="mb-1 text-sm text-slate-400">
          risk/hour
        </span>
      </div>

      <div
        className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
          increasing
            ? "bg-red-50 text-red-600"
            : "bg-green-50 text-green-600"
        }`}
      >
        {increasing
          ? "↑ Increasing"
          : "↓ Decreasing / stable"}
      </div>
    </div>
  );
}

export default RiskVelocity;