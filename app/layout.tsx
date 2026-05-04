import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FieldProof — GPS + Face Authentication for Field Employees",
  description:
    "FieldProof helps businesses verify employee field visits with GPS location proof and real-user face authentication on their device. Reduce fake check-ins and manage field teams from one simple dashboard.",
  keywords: [
    "employee verification",
    "GPS check-in",
    "field employee tracking",
    "face authentication",
    "attendance management",
    "field workforce management",
    "location verification",
  ],
  openGraph: {
    title: "FieldProof — GPS + Face Authentication for Field Employees",
    description:
      "Verify employee field visits with GPS proof and face authentication. Built for teams on any platform.",
    type: "website",
    siteName: "FieldProof",
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldProof — GPS + Face Authentication",
    description:
      "Verify employee field visits with GPS proof and face authentication. Reduce fake check-ins from one simple dashboard.",
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
