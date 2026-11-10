import "./globals.css";

import { Outfit, Zilla_Slab } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { PostHogProvider } from "./providers";

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
    <html lang="en" className={`${outfit.variable} ${zillaSlab.variable}`}>
      <PostHogProvider>
        <body className="bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-emerald-950 focus:shadow-lg"
          >
            Skip to content
          </a>
          <Header />
          <main
            id="main-content"
            tabIndex={-1}
            className="mx-auto my-8 max-w-4xl focus:outline-none md:py-16"
          >
            {children}
          </main>
          <Footer />
        </body>
      </PostHogProvider>
    </html>
  );
};

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
};

export default RootLayout;
