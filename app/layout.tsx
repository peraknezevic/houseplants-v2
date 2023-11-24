import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./auth/Provider";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300`}
      >
        <AuthProvider>
          <Header />
          <div className="mx-auto my-8 max-w-4xl md:py-16">{children}</div>
          <Analytics />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
