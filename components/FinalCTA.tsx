export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 dark-section relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-brand-600 mx-auto flex items-center justify-center mb-8 shadow-xl shadow-brand-500/30">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              fill="white"
            />
            <circle cx="12" cy="9" r="2.5" fill="white" opacity="0.5" />
          </svg>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Want to stop fake field check-ins?
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join the waitlist and be first to access FieldProof when early access
          opens — with a locked-in founding price.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-all shadow-2xl shadow-brand-500/30 hover:-translate-y-0.5 text-sm"
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
            href="mailto:demo@fieldproof.app"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-0.5 text-sm"
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

        <p className="mt-8 text-slate-500 text-sm">
          No credit card required. Demo sessions available this month.
        </p>
      </div>
    </section>
  );
}
