import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

export const metadata: Metadata = {
  title: "Maladive - Premium Watersports Experiences",
  description: "Premium watersports experiences at the world's most beautiful resort destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={overpass.variable}>
      <body className="min-h-screen antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
