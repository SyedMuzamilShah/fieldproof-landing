const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "Try FieldProof with a small team at no cost.",
    features: [
      "Up to 3 employees",
      "Basic GPS check-ins",
      "Manual reports",
      "Mobile app access",
    ],
    missing: ["Face authentication", "Admin dashboard", "Priority support"],
    cta: "Get Started Free",
    ctaStyle:
      "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    desc: "For small teams that need verified field check-ins.",
    features: [
      "Up to 10 employees",
      "GPS + face authentication",
      "Task assignment",
      "Check-in history",
      "Basic admin view",
    ],
    missing: ["Priority support"],
    cta: "Join Waitlist",
    ctaStyle:
      "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-500/25",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Business",
    price: "$29",
    period: "/month",
    desc: "For growing teams needing full dashboard control.",
    features: [
      "Up to 50 employees",
      "GPS + face authentication",
      "Full admin dashboard",
      "Map visit history",
      "Reports & attendance export",
      "Priority support",
    ],
    missing: [],
    cta: "Join Waitlist",
    ctaStyle:
      "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
    highlight: false,
  },
];

function Check() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16a34a"
      strokeWidth="2.5"
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            Early Access Pricing
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg">
            Early access pricing available now. Lock in your rate before full
            launch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 border transition-all ${
                plan.highlight
                  ? "border-brand-500 shadow-2xl shadow-brand-500/15 scale-[1.02]"
                  : "border-slate-200 hover:border-brand-200 hover:shadow-lg"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-600 text-white text-xs font-bold shadow-md">
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="text-sm font-semibold text-slate-500 mb-2">
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="text-4xl font-bold text-slate-900"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {plan.price}
                </span>
                <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
              </div>

              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {plan.desc}
              </p>

              {/* CTA */}
              <a
                href="#"
                className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all mb-7 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <div className="space-y-2.5">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <Check />
                    <span className="text-sm text-slate-700">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5 opacity-50">
                    <Cross />
                    <span className="text-sm text-slate-500">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <p className="text-center text-slate-400 text-sm mt-8">
          ⚠️ Pricing may change after early access. Lock in your rate by joining
          the waitlist.
        </p>
      </div>
    </section>
  );
}
