import type { Metadata } from "next"
import { Gabarito, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"
import Header from "@/components/layout/Header"
import { TailwindIndicator } from "@/components/TailwindIndicator"

import "./globals.css"

const space = Plus_Jakarta_Sans({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "selection:bg-theColor bg-bgColor antialiased selection:text-white",
            space.className
          )}
        >
          <div className="bg-bgColor relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {/* <SiteFooter /> */}
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
