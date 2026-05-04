/**
 * Screenshots Section
 *
 * Replace each placeholder div with an actual <Image> component once screenshots are ready.
 * Image files should be placed in /public/images/ directory.
 *
 * Example replacement:
 *   import Image from "next/image";
 *   <Image
 *     src="/images/admin-dashboard.png"
 *     alt="FieldProof Admin Dashboard"
 *     width={800}
 *     height={500}
 *     className="w-full h-full object-cover rounded-xl"
 *   />
 */

const screenshots = [
  {
    imagePath: "/images/admin-dashboard.png",
    alt: "FieldProof Admin Dashboard",
    caption: "Admin Dashboard",
    desc: "Full overview of employee check-ins, GPS proof, and task status in one central view.",
    size: "large", // spans 2 columns on desktop
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c82f5" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    color: "from-brand-50 to-brand-100",
    badge: "bg-brand-600",
  },
  {
    imagePath: "/images/mobile-checkin.png",
    alt: "Employee Mobile Check-in Screen",
    caption: "Mobile Check-in",
    desc: "Employee check-in flow with one-tap GPS capture and selfie prompt.",
    size: "small",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c82f5" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01M9 8h6" strokeLinecap="round" />
      </svg>
    ),
    color: "from-indigo-50 to-indigo-100",
    badge: "bg-indigo-500",
  },
  {
    imagePath: "/images/map-verification.png",
    alt: "Map-based Visit Verification",
    caption: "Map Verification",
    desc: "Interactive map view showing all field visits plotted by GPS coordinates.",
    size: "small",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c82f5" strokeWidth="1.5">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
    color: "from-violet-50 to-violet-100",
    badge: "bg-violet-500",
  },
  {
    imagePath: "/images/face-verification.png",
    alt: "Face / Selfie Verification Screen",
    caption: "Face Verification",
    desc: "Selfie capture screen with face detection confirmation during check-in.",
    size: "small",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c82f5" strokeWidth="1.5">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    color: "from-green-50 to-green-100",
    badge: "bg-green-500",
  },
  {
    imagePath: "/images/task-management.png",
    alt: "Task Management Screen",
    caption: "Task Management",
    desc: "Assign, track, and review field tasks with deadlines, locations, and completion proof.",
    size: "small",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0c82f5" strokeWidth="1.5">
        <path d="M9 12h6M9 16h4M9 8h6" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
    color: "from-orange-50 to-orange-100",
    badge: "bg-orange-500",
  },
];

function ScreenshotPlaceholder({
  item,
  className = "",
}: {
  item: (typeof screenshots)[0];
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {/*
        ===== REPLACE THIS DIV WITH YOUR ACTUAL SCREENSHOT =====
        Use this code once your screenshot image is ready:

        <Image
          src={item.imagePath}
          alt={item.alt}
          fill
          className="object-cover"
        />

        Make sure to add position="relative" to the parent and remove the placeholder div.
        =========================================================
      */}
      <div
        className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center min-h-[200px] relative`}
      >
        {/* Simulated UI chrome */}
        <div className="absolute inset-3 bg-white/60 rounded-xl border border-white/80 shadow-inner flex flex-col">
          {/* Simulated window bar */}
          <div className="h-7 bg-slate-900/5 rounded-t-xl border-b border-white/50 flex items-center px-3 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-300" />
            <div className="w-2 h-2 rounded-full bg-slate-300" />
            <div className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-3 opacity-60">{item.icon}</div>
              <p className="text-slate-400 text-xs font-medium">
                Screenshot coming soon
              </p>
              <p className="text-slate-300 text-xs mt-1 font-mono">
                {item.imagePath}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Caption overlay */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-white/80">
          <div className="flex items-center gap-2 mb-0.5">
            <div className={`w-2 h-2 rounded-full ${item.badge}`} />
            <span className="font-bold text-slate-900 text-xs">{item.caption}</span>
          </div>
          <p className="text-slate-500 text-xs leading-snug">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Screenshots() {
  const large = screenshots.find((s) => s.size === "large");
  const small = screenshots.filter((s) => s.size === "small");

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            Product Demo
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See FieldProof in action
          </h2>
          <p className="text-slate-500 text-lg">
            Actual screenshots from the working system. No mockup illusions.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Large: Admin dashboard — spans 2 cols */}
          {large && (
            <ScreenshotPlaceholder
              item={large}
              className="lg:col-span-2 aspect-[16/10]"
            />
          )}

          {/* First small screenshot */}
          {small[0] && (
            <ScreenshotPlaceholder
              item={small[0]}
              className="aspect-[4/3]"
            />
          )}

          {/* Remaining 3 small screenshots */}
          {small.slice(1).map((item, i) => (
            <ScreenshotPlaceholder
              key={i}
              item={item}
              className="aspect-[4/3]"
            />
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Replace placeholders with actual product screenshots from{" "}
          <code className="text-brand-600 font-mono text-xs bg-brand-50 px-1.5 py-0.5 rounded">
            /public/images/
          </code>
        </p>
      </div>
    </section>
  );
}
