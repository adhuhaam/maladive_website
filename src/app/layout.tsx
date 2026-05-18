import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-overpass",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maladive - Premium Watersports Experiences",
  description:
    "Premium watersports experiences and equipment at the world's most beautiful resort destinations.",
  viewport: { width: "device-width", initialScale: 1, maximumScale: 5 },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={overpass.variable}>
      <head>
        <link rel="stylesheet" href="/build/css/css.css" />
        <link rel="stylesheet" href="/css/app.css" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
