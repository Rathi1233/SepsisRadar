import { Link, useParams } from "react-router";

import Layout from "../components/Layout";
import RiskBadge from "../components/RiskBadge";
import VitalCard from "../components/VitalCard";
import RiskTrajectory from "../components/RiskTrajectory";
import RiskVelocity from "../components/RiskVelocity";
import EarlyWarning from "../components/EarlyWarning";
import SHAPChart from "../components/SHAPChart";
import AIExplanation from "../components/AIExplanation";

import { mockPatientDetails } from "../data/mockData";

function PatientDetails() {
  const { patientId } = useParams();

  const patient = {
    ...mockPatientDetails,
    patient_id: patientId,
  };

  const vitals = patient.vitals;

  return (
    <Layout>

      <div className="mx-auto max-w-7xl space-y-6">

        {/* BACK */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to Dashboard
        </Link>

        {/* HEADER */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>

              <p className="text-sm font-medium text-slate-400">
                Patient ID
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-4">

                <h1 className="text-3xl font-bold text-slate-900">
                  {patient.patient_id}
                </h1>

                <RiskBadge
                  level={patient.risk_level}
                />

              </div>

              <p className="mt-2 text-sm text-slate-500">
                ICU monitoring · Hourly physiological observations
              </p>

            </div>

            <div className="flex items-center gap-10">

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Risk Score
                </p>

                <p className="mt-1 text-5xl font-bold text-red-600">
                  {patient.current_risk.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Risk Velocity
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-800">
                  +{patient.risk_velocity.toFixed(2)}
                  <span className="ml-1 text-sm font-normal text-slate-400">
                    /hr
                  </span>
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* VITALS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          <VitalCard
            label="Heart Rate"
            value={vitals.HR}
            unit="bpm"
          />

          <VitalCard
            label="MAP"
            value={vitals.MAP}
            unit="mmHg"
          />

          <VitalCard
            label="Temperature"
            value={vitals.Temp}
            unit="°C"
          />

          <VitalCard
            label="SpO₂"
            value={vitals.O2Sat}
            unit="%"
          />

          <VitalCard
            label="Respiratory Rate"
            value={vitals.Resp}
            unit="/min"
          />

        </div>

        {/* TRAJECTORY + VELOCITY */}
        <div className="grid gap-6 xl:grid-cols-3">

          <div className="xl:col-span-2">
            <RiskTrajectory
              data={patient.trajectory}
            />
          </div>

          <RiskVelocity
            value={patient.risk_velocity}
          />

        </div>

        {/* EARLY WARNING */}
        <EarlyWarning
          hours={patient.early_warning_hours}
        />

        {/* SHAP */}
        <SHAPChart
          data={patient.shap}
        />

        {/* AI */}
        <AIExplanation
          explanation={patient.ai_explanation}
        />

      </div>

    </Layout>
  );
}

export default PatientDetails;