import { Navigate, Route, Routes } from "react-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
  path="/patients/:patientId"
  element={<PatientDetails />}
/>

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default App;