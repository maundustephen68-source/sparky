import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bubble Busters | Hostel Laundry Pickup in Meru & Nchiru",
  description: "Affordable student laundry. We collect from your hostel, wash, fold and deliver. Pay after delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="font-sans text-slate-800">{children}</body></html>);
}
