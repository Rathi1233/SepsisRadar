function VitalCard({ label, value, unit }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900">
          {value ?? "—"}
        </span>

        <span className="text-sm text-slate-400">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default VitalCard;