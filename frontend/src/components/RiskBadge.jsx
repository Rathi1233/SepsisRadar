function RiskBadge({ level }) {
  const normalized = level?.toUpperCase() || "LOW";

  const styles = {
    LOW: "bg-green-50 text-green-700 border-green-200",
    MODERATE: "bg-yellow-50 text-yellow-700 border-yellow-200",
    HIGH: "bg-orange-50 text-orange-700 border-orange-200",
    CRITICAL: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[normalized] || styles.LOW
      }`}
    >
      <span>●</span>
      {normalized}
    </span>
  );
}

export default RiskBadge;