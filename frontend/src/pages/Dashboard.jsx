import Layout from "../components/Layout";
import PatientTable from "../components/PatientTable";
import { mockPatients } from "../data/mockData";

function Dashboard() {
  const patients = mockPatients;

  const criticalCount = patients.filter(
    (patient) => patient.risk_level === "CRITICAL"
  ).length;

  const highCount = patients.filter(
    (patient) => patient.risk_level === "HIGH"
  ).length;

  return (
    <Layout>
      <div className="mx-auto max-w-7xl space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            ICU Monitoring Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Patient risk overview and model-generated alerts
          </p>
        </div>

        {/* SUMMARY */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Patients
            </p>

            <p className="mt-3 text-4xl font-bold">
              {patients.length}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Under monitoring
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              High Risk
            </p>

            <p className="mt-3 text-4xl font-bold text-orange-600">
              {highCount}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Require close watch
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Critical
            </p>

            <p className="mt-3 text-4xl font-bold text-red-600">
              {criticalCount}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Immediate attention
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Active Alerts
            </p>

            <p className="mt-3 text-4xl font-bold text-amber-600">
              {criticalCount + highCount}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Model-generated
            </p>
          </div>

        </div>

        {/* PATIENT TABLE */}
        <PatientTable patients={patients} />

      </div>
    </Layout>
  );
}

export default Dashboard;