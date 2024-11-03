import "./globals.css";

import { Outfit, Zilla_Slab } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { PHProvider } from "./providers";
import PostHogPageview from "./PostHogPageView";
import { Suspense } from "react";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-zilla-slab",
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${zillaSlab.variable}`}
      suppressHydrationWarning
    >
      <PHProvider>
        <body className="bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300">
          <Suspense>
            <PostHogPageview />
          </Suspense>
          <ThemeProvider attribute="class">
            <Header />
            <div className="mx-auto my-8 min-h-screen max-w-4xl md:py-16">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};

export default RootLayout;
