import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import ClientLayout from "./ClientLayout";

const fallbackStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
};

if (typeof globalThis !== "undefined") {
  const storage = (globalThis as { localStorage?: unknown }).localStorage as
    | { getItem?: unknown }
    | undefined;
  if (storage && typeof storage.getItem !== "function") {
    (globalThis as { localStorage?: unknown }).localStorage = fallbackStorage;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rishu Kumar - Frontend Developer",
    template: "%s | Rishu Kumar",
  },
  description:
    "Frontend Developer focused on building fast, clean, and scalable web applications using React and modern JavaScript.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rishu Kumar - Frontend Developer",
    description:
      "Frontend Developer building scalable web applications with React, Tailwind CSS, and modern JavaScript.",
    siteName: "Rishu Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishu Kumar - Frontend Developer",
    description:
      "Frontend Developer focused on building fast, clean, and scalable web applications using React and modern JavaScript.",
  },
  robots: {
    follow: true,
  },
  icons: {
    icon: "/2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
