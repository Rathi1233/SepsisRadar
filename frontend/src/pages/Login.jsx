import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Temporary demo login
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="hidden bg-[#0d1b2a] p-12 text-white md:flex md:flex-col md:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                S
              </div>

              <div>
                <h1 className="text-xl font-bold">
                  SepsisRadar
                </h1>

                <p className="text-xs text-slate-400">
                  ICU EARLY WARNING
                </p>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-4xl font-bold leading-tight">
                Detect risk.
                <br />
                Understand change.
                <br />
                Act earlier.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-slate-400">
                ML-assisted ICU risk monitoring using
                temporal patient data, risk trajectories
                and model explanations.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            SepsisRadar · Hackathon Prototype
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12">
          <div className="mx-auto max-w-md">

            <p className="text-sm font-medium text-blue-600">
              Hospital Portal
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to access the ICU monitoring dashboard.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="doctor@hospital.com"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* LOGIN */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Login
              </button>

            </form>

            <p className="mt-6 text-center text-xs text-slate-400">
              Demo authentication · FastAPI integration later
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;