function EarlyWarning({ hours }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">

      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
        Early Warning
      </p>

      <div className="mt-3">
        <span className="text-4xl font-bold text-blue-900">
          {hours}
        </span>

        <span className="ml-2 text-sm text-blue-700">
          hours
        </span>
      </div>

      <p className="mt-2 text-sm text-blue-700">
        Estimated model lead time before the selected
        risk condition.
      </p>

    </div>
  );
}

export default EarlyWarning;