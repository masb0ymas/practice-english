import React from "react"
import MainLayout from "~/components/layout/main-layout"

interface PracticeLayoutProps {
  children: React.ReactNode
}

export default function PracticeLayout({ children }: PracticeLayoutProps) {
  return <MainLayout>{children}</MainLayout>
}
