import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "./NavBar"
import AuthProvider from "./auth/Provider"
import { GeistSans } from "geist/font"

export const metadata: Metadata = {
  title: "Houseplants",
  description: "All about your indoor plants",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <AuthProvider>
          <NavBar />
          <div>{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
