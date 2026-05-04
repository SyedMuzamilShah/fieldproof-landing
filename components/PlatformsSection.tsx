const platforms = [
  {
    title: "Mobile App",
    desc: "Field employees can check in from their phone with GPS proof, face authentication, timestamps, and assigned task details.",
    tag: "For field teams",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M12 18h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Web Dashboard",
    desc: "Managers can review check-ins, employee activity, visit history, photos, and reports from any modern browser.",
    tag: "For managers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 22h8M12 18v4M3 9h18" />
      </svg>
    ),
  },
  {
    title: "Desktop View",
    desc: "Office teams get a larger workspace for approvals, map review, employee management, and attendance records.",
    tag: "For operations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M6 21h12M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Tablet Friendly",
    desc: "Supervisors can review activity, open maps, and check visit proof from a tablet while moving between sites.",
    tag: "For supervisors",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-5">
              Platforms
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Works across every platform your team uses
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              FieldProof supports the full field verification workflow across
              mobile, web, desktop, and tablet experiences, so every role can
              work from the device that fits the moment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {platforms.map((platform) => (
              <div
                key={platform.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5">
                  {platform.icon}
                </div>
                <div className="inline-flex px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-3">
                  {platform.tag}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {platform.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
