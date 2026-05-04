const techStack = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" fill="#0c82f5" opacity="0.15" />
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="#0c82f5" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="1.5" fill="#0c82f5" />
        <rect x="8" y="6" width="8" height="7" rx="1" fill="#0c82f5" opacity="0.3" />
      </svg>
    ),
    title: "Mobile Employee App",
    desc: "Flutter-built iOS & Android app for GPS check-in and selfie verification in the field.",
    tag: "Flutter Mobile",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2" fill="#0c82f5" opacity="0.15" />
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="#0c82f5" strokeWidth="1.5" />
        <path d="M8 22h8M12 18v4" stroke="#0c82f5" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="7" width="14" height="8" rx="1" fill="#0c82f5" opacity="0.3" />
      </svg>
    ),
    title: "Desktop Admin Dashboard",
    desc: "Flutter desktop panel for managers to review check-ins, tasks, maps, and employee history.",
    tag: "Flutter Desktop",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#0c82f5" opacity="0.15" stroke="#0c82f5" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="#0c82f5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 12h1M16 12h1M12 7V6M12 18v-1" stroke="#0c82f5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Node.js Backend",
    desc: "Production API with MongoDB — handles auth, GPS data, photo uploads, task management, and reporting.",
    tag: "Node.js + MongoDB",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0c82f5" opacity="0.2" stroke="#0c82f5" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="2.5" fill="#0c82f5" opacity="0.5" />
        <path d="M16 20c0-2.21-1.79-4-4-4s-4 1.79-4 4" stroke="#0c82f5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "GPS + Face Verification",
    desc: "Combines accurate GPS coordinates with selfie capture and timestamp for multi-layer check-in proof.",
    tag: "Core Feature",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold mb-4">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Not Just an Idea — A Working System
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built from a working employee verification system
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            FieldProof isn&apos;t a concept. It&apos;s a SaaS layer being built on top of a
            fully functional, production-tested system already deployed and in use.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold mb-3">
                {item.tag}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex -space-x-2">
              {["bg-brand-400", "bg-brand-500", "bg-brand-600"].map((bg, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${bg} border-2 border-white flex items-center justify-center`}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Real codebase.</span>{" "}
              Flutter + Node.js + MongoDB. Ready to evolve into a full SaaS product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
