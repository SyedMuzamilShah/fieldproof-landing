const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
      </svg>
    ),
    title: "Employees can fake field visits",
    desc: "A simple GPS ping or manual entry is easy to fabricate. Without proof, managers can't know if an employee truly visited a location.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: "Managers lack proof of work",
    desc: "Field visits are often self-reported. There's no reliable way to confirm that tasks were actually completed on-site.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12h6M9 16h6M9 8h6" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
    title: "Manual reporting is unreliable",
    desc: "Spreadsheets, WhatsApp reports, and paper forms create errors, delays, and disputes that cost businesses time and money.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Location-only tracking raises privacy concerns",
    desc: "Constant background location tracking creates legal risk and erodes employee trust. Businesses need a smarter, privacy-respecting approach.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            The Problem
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Field management is broken for most businesses
          </h2>
          <p className="text-slate-400 text-lg">
            Without reliable verification, businesses pay for field visits that
            may never happen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                {problem.icon}
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">{problem.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
