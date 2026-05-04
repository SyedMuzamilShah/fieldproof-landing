const steps = [
  {
    number: "01",
    title: "Employee checks in only when required",
    desc: "No background tracking. The app is only active during scheduled or assigned check-ins — fully respecting employee privacy.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" />
        <path d="M9 7h6M9 11h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "GPS location is captured",
    desc: "At the moment of check-in, precise GPS coordinates and a timestamp are recorded and tied to the specific task or location.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Face authentication confirms the user",
    desc: "Face authentication runs alongside GPS data, confirming the real employee is present during check-in.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Admin reviews proof in dashboard",
    desc: "Managers see all check-ins, GPS points, face authentication status, and timestamps in a clean dashboard — and can approve or flag any submission.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              The FieldProof Approach
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Proof-based field verification,{" "}
              <span className="text-brand-600">not constant employee spying.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              FieldProof is built around check-in moments — not continuous
              surveillance. Employees keep their privacy. Managers get the proof
              they need. Everyone wins.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 border border-green-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-green-800 text-sm font-semibold">Privacy-first design. No background location tracking.</span>
            </div>
          </div>

          {/* Right steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 group-hover:bg-brand-200 transition-colors flex items-center justify-center text-brand-600">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-500 mb-1">{step.number}</div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
