"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is this constant employee tracking?",
    a: "No. FieldProof is built around proof-based check-ins, not background surveillance. The app only captures GPS and selfie data at the specific moment an employee checks in for an assigned task. There is no continuous or passive location tracking of any kind.",
  },
  {
    q: "Can employees fake their location?",
    a: "FieldProof makes it extremely difficult to fake a check-in by combining three layers of proof: accurate GPS coordinates, a real-time selfie, and a verified timestamp. This multi-layer approach significantly reduces the possibility of fraudulent check-ins compared to GPS-only or manual systems.",
  },
  {
    q: "Do I need any special hardware or devices?",
    a: "No special hardware is required. Employees simply need a standard smartphone with the FieldProof mobile app installed. The admin dashboard runs on any desktop or laptop computer. There are no dedicated devices, sensors, or on-site equipment needed.",
  },
  {
    q: "Is the product available right now?",
    a: "FieldProof is currently in early access. The underlying system is fully built and operational — we are now preparing the SaaS launch. Join the waitlist to be among the first to access the platform at early-access pricing.",
  },
  {
    q: "What happens to employee data and photos?",
    a: "Check-in data, GPS coordinates, and selfie photos are stored securely and accessible only to authorized admins within your organization. FieldProof does not share employee data with third parties. Detailed privacy policies will be published ahead of launch.",
  },
  {
    q: "Can I try it before the official launch?",
    a: "Yes. By joining the waitlist or booking a demo, you can get early access and experience the system firsthand before the public launch. Demo sessions are available to show you the admin dashboard and the employee check-in flow.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">{q}</span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0c82f5"
            strokeWidth="2.5"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 mesh-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            FAQ
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently asked questions
          </h2>
          <p className="text-slate-500 text-lg">
            Questions about privacy, features, and how FieldProof works.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
