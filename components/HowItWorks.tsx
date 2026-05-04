const steps = [
  {
    step: "01",
    title: "Admin creates task or visit location",
    desc: "The manager logs into the desktop dashboard and assigns a field task to an employee, specifying the required visit location and deadline.",
    color: "bg-brand-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 12h8M12 8v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Employee checks in from mobile app",
    desc: "When the employee arrives at the location, they open the FieldProof mobile app and initiate a check-in for the assigned task.",
    color: "bg-indigo-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" strokeLinecap="round" />
        <path d="M9 8h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "App captures GPS + face authentication",
    desc: "Automatically, the app records the GPS coordinates, timestamp, and confirms the real user through face authentication on the device.",
    color: "bg-violet-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Manager verifies from dashboard",
    desc: "All check-in data — GPS proof, face authentication status, timestamp, and task details — appears in the admin dashboard for review, approval, or follow-up.",
    color: "bg-green-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            How It Works
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From task to verified proof in 4 steps
          </h2>
          <p className="text-slate-500 text-lg">
            Simple for employees. Powerful for managers.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-300 via-indigo-300 to-green-300 pointer-events-none" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {/* Step circle */}
              <div
                className={`w-16 h-16 rounded-2xl ${step.color} shadow-lg flex items-center justify-center mb-5 z-10`}
              >
                {step.icon}
              </div>
              <div className="text-xs font-bold text-slate-400 mb-2">{step.step}</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm leading-snug">
                {step.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl ${step.color} shadow-md flex items-center justify-center flex-shrink-0`}
                >
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200 mt-3" />
                )}
              </div>
              <div className="pb-6">
                <div className="text-xs font-bold text-slate-400 mb-1">{step.step}</div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
