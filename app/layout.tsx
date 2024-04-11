import "./globals.css";

import { PHProvider, PostHogPageview } from "./providers";

import AuthProvider from "./auth/Provider";
import Footer from "../components/footer";
import { GeistSans } from "geist/font";
import Header from "../components/header";
import type { Metadata } from "next";
import { Suspense } from "react";
import { TNode } from "@/lib/types";

export default function RootLayout({ children }: TNode) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body
          className={`${GeistSans.className} bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300`}
        >
          <AuthProvider>
            <Header />
            <div className="mx-auto my-8 max-w-4xl md:py-16">{children}</div>
            <Footer />
          </AuthProvider>
        </body>
      </PHProvider>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};
