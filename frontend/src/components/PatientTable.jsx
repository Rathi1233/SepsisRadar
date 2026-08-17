import { useNavigate } from "react-router";
import RiskBadge from "./RiskBadge";

function PatientTable({ patients }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Patient Monitor
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {patients.length} patients · click any row to view details
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[900px]">

          <thead>
            <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="px-6 py-4">Patient ID</th>
              <th className="px-4 py-4">Age</th>
              <th className="px-4 py-4">Heart Rate</th>
              <th className="px-4 py-4">MAP</th>
              <th className="px-4 py-4">Temp</th>
              <th className="px-4 py-4">SpO₂</th>
              <th className="px-4 py-4">Risk</th>
              <th className="px-4 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.patient_id}
                onClick={() =>
                  navigate(`/patients/${patient.patient_id}`)
                }
                className="cursor-pointer border-t border-slate-100 transition hover:bg-slate-50"
              >

                <td className="px-6 py-5 font-semibold text-blue-600">
                  {patient.patient_id}
                </td>

                <td className="px-4 py-5 text-slate-700">
                  {patient.age}
                </td>

                <td className="px-4 py-5">
                  {patient.vitals.HR}
                  <span className="ml-1 text-xs text-slate-400">
                    bpm
                  </span>
                </td>

                <td className="px-4 py-5">
                  {patient.vitals.MAP}
                </td>

                <td className="px-4 py-5">
                  {patient.vitals.Temp}
                  <span className="ml-1 text-xs text-slate-400">
                    °C
                  </span>
                </td>

                <td className="px-4 py-5">
                  {patient.vitals.O2Sat}%
                </td>

                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">

                    <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{
                          width: `${patient.current_risk * 100}%`,
                        }}
                      />
                    </div>

                    <span className="font-semibold">
                      {patient.current_risk.toFixed(2)}
                    </span>

                  </div>
                </td>

                <td className="px-4 py-5">
                  <RiskBadge level={patient.risk_level} />
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default PatientTable;