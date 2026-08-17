import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function RiskTrajectory({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Risk Trajectory
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Patient-specific model risk across ICU hours
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="hour"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              domain={[0, 1]}
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              formatter={(value) => [
                Number(value).toFixed(2),
                "Risk",
              ]}
            />

            <Line
              type="monotone"
              dataKey="risk"
              stroke="#dc2626"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RiskTrajectory;