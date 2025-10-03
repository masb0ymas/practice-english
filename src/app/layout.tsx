import "~/styles/globals.css"

import type { Metadata } from "next"
import { Geist_Mono, Nunito_Sans } from "next/font/google"

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Practice English",
  description: "Try to practice your English skills",
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
