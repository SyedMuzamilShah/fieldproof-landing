export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden mesh-bg">
      {/* Decorative blobs */}
      <div className="absolute top-24 -left-32 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Early Access Opening Soon
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-fade-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Verify field employees with{" "}
              <span className="text-brand-600">GPS + face</span> authentication.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
              FieldProof helps businesses confirm employee visits, reduce fake
              check-ins, and manage field tasks from one simple dashboard —
              without invasive background surveillance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
              >
                Join Waitlist
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 border border-slate-200 transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
                Book Demo
              </a>
            </div>

            {/* Social proof micro-copy */}
            <p className="mt-6 text-xs text-slate-400 animate-fade-up delay-400">
              Built as a production-ready system for teams on any platform. No
              beta promises — real working software.
            </p>
          </div>

          {/* Right: Hero mockup */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative">
              {/* Main dashboard mockup */}
              {/* 
                REPLACE THIS BLOCK with your actual admin dashboard screenshot:
                <Image src="/images/admin-dashboard.png" alt="FieldProof Admin Dashboard" width={700} height={480} className="rounded-2xl shadow-2xl" />
              */}
              <div className="screenshot-placeholder rounded-2xl shadow-2xl w-full aspect-[16/10] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white" />
                <div className="absolute inset-0 p-6">
                  {/* Simulated dashboard UI */}
                  <div className="w-full h-full rounded-xl bg-white/80 border border-slate-200 shadow-sm overflow-hidden">
                    {/* Dashboard header */}
                    <div className="h-9 bg-slate-900 flex items-center gap-2 px-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="px-4 py-0.5 rounded bg-slate-700 text-slate-300 text-xs">
                          FieldProof Admin Dashboard
                        </div>
                      </div>
                    </div>
                    {/* Dashboard body */}
                    <div className="flex h-[calc(100%-36px)]">
                      {/* Sidebar */}
                      <div className="w-12 bg-slate-900 flex flex-col items-center pt-3 gap-3">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded ${i === 0 ? "bg-brand-500" : "bg-slate-700"}`}
                          />
                        ))}
                      </div>
                      {/* Main content */}
                      <div className="flex-1 p-3 bg-slate-50">
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {["24 Active", "18 Verified", "3 Pending"].map(
                            (stat, i) => (
                              <div
                                key={i}
                                className="bg-white rounded-lg p-2 shadow-sm border border-slate-100"
                              >
                                <div className="text-xs font-bold text-slate-800">
                                  {stat}
                                </div>
                                <div className="text-xs text-slate-400 mt-0.5">
                                  {["Employees", "Check-ins", "Tasks"][i]}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-2 h-24 flex flex-col gap-1.5">
                          <div className="text-xs font-semibold text-slate-700">
                            Recent Verifications
                          </div>
                          {["Ali Hassan — GPS ✓ Face ✓", "Sara Khan — GPS ✓ Face ✓", "Umar Farooq — GPS ✓ Face ✓"].map((row, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between text-xs text-slate-600 py-0.5 border-b border-slate-50 last:border-0"
                            >
                              <span>{row}</span>
                              <span className="text-green-500 font-semibold text-xs">
                                Verified
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Overlay label */}
                <div className="absolute bottom-3 right-3 bg-brand-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                  Admin Dashboard
                </div>
              </div>

              {/* Floating mobile card */}
              {/*
                REPLACE with: <Image src="/images/mobile-checkin.png" alt="Mobile Check-in" width={160} height={280} className="absolute -bottom-6 -left-6 rounded-2xl shadow-xl border-4 border-white" />
              */}
              <div className="absolute -bottom-6 -left-6 w-28 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-float">
                <div className="bg-brand-600 h-8 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    FieldProof
                  </span>
                </div>
                <div className="p-2.5">
                  <div className="w-full h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill="#0c82f5"
                      />
                    </svg>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded mb-1.5" />
                  <div className="w-3/4 h-2 bg-slate-100 rounded mb-3" />
                  <div className="w-full py-1.5 rounded-lg bg-brand-600 text-center text-white text-xs font-semibold">
                    Check In
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 bg-green-400 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  ✓
                </div>
              </div>

              {/* Floating verification badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">
                    Verified
                  </div>
                  <div className="text-xs text-slate-400">GPS + Face</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
