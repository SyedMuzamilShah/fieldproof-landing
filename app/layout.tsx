import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FieldProof — GPS + Selfie Verification for Field Employees",
  description:
    "FieldProof helps businesses verify employee field visits with GPS location proof and selfie check-ins. Reduce fake check-ins and manage field teams from one simple dashboard.",
  keywords: [
    "employee verification",
    "GPS check-in",
    "field employee tracking",
    "selfie verification",
    "attendance management",
    "field workforce management",
    "location verification",
  ],
  openGraph: {
    title: "FieldProof — GPS + Selfie Verification for Field Employees",
    description:
      "Verify employee field visits with GPS + selfie proof. Built on a working Flutter + Node.js system.",
    type: "website",
    siteName: "FieldProof",
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldProof — GPS + Selfie Verification",
    description:
      "Verify employee field visits with GPS + selfie proof. Reduce fake check-ins from one simple dashboard.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
