import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./auth/Provider";
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
    <html lang="en" className="bg-pink-50">
      <body className={`${GeistSans.className} text-emerald-950`}>
        <AuthProvider>
          <Header />
          <div className="mx-auto max-w-4xl py-10">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
