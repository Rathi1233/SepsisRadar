function SHAPChart({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Top Contributing Factors
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Model-derived feature contributions
        </p>
      </div>

      <div className="space-y-5">

        {data.map((item) => {
          const width = Math.min(
            Math.abs(item.impact) * 100 * 3,
            100
          );

          return (
            <div key={item.feature}>

              <div className="mb-2 flex items-center justify-between">

                <div>
                  <span className="font-semibold text-slate-800">
                    {item.feature}
                  </span>

                  <span className="ml-3 text-sm text-slate-400">
                    {item.value}
                  </span>
                </div>

                <span className="text-sm font-semibold text-slate-600">
                  +{item.impact.toFixed(2)}
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-red-500"
                  style={{
                    width: `${width}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
        SHAP values represent model-derived contribution
        strength and should not be interpreted as clinical
        severity rankings.
      </div>

    </div>
  );
}

export default SHAPChart;