"use client"

import { ReactNode } from "react"
import "../app/globals.css"
import Navbar from "@/src/components/Navbar"
import Sidebar from "@/src/components/Sidebar"
import ReduxProvider from "@/src/provider/ReduxProvider"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ReduxProvider>

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />
                
                <main className="p-8">
                  {children}
                </main>
            </div>

        </div>
        </ReduxProvider>
      </body>
    </html>
  )
}