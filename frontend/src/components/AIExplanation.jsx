function AIExplanation({ explanation }) {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">

      <div className="flex items-start gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-lg">
          ✦
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            AI-Assisted Explanation
          </h2>

          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-500">
            Model output summary
          </p>
        </div>

      </div>

      <p className="mt-5 leading-7 text-slate-600">
        {explanation}
      </p>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-500">
        This explanation summarizes model-derived signals
        and is intended to support, not replace, clinical
        judgment.
      </div>

    </div>
  );
}

export default AIExplanation;