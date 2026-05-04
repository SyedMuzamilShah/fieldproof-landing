const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Verified Check-ins",
    desc: "Each check-in is tied to a GPS coordinate, timestamp, and selfie — making it nearly impossible to fake.",
    highlight: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "GPS Location Proof",
    desc: "Precise coordinates are captured at check-in and matched against expected visit locations.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: "Selfie / Face Verification",
    desc: "A selfie is required at check-in, giving managers a visual confirmation of who performed the visit.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12h6M9 16h4M9 8h6" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M16 2v4M8 2v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Task Assignment",
    desc: "Admins assign specific tasks to field employees with location, deadline, and instructions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Admin Dashboard",
    desc: "A clean, centralized view of all employees, check-ins, tasks, and field activity in real time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
    title: "Map-based Visit History",
    desc: "See all field visits plotted on an interactive map with timestamps and employee details.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Employee Management",
    desc: "Add, edit, and organize employees. Assign roles, view activity history, and manage access.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Privacy-first Verification",
    desc: "Check-ins happen only at required moments. No continuous background tracking. Employees stay in control.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    title: "Reports & Attendance History",
    desc: "Export attendance logs, check-in proofs, and visit summaries for payroll, compliance, or audits.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-28 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            Features
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything your field team needs
          </h2>
          <p className="text-slate-500 text-lg">
            From mobile check-ins to admin reports — FieldProof covers the full
            field verification workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                feature.highlight
                  ? "bg-brand-600 border-brand-500 text-white shadow-xl shadow-brand-500/20"
                  : "bg-white border-slate-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${
                  feature.highlight
                    ? "bg-white/20 text-white"
                    : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                } transition-colors`}
              >
                {feature.icon}
              </div>
              <h3
                className={`font-bold mb-2 ${
                  feature.highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? "text-white/80" : "text-slate-500"
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
