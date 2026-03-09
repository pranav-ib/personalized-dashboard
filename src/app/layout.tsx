"use client"

import { ReactNode } from "react";
import {Poppins} from "next/font/google";
import "../app/globals.css"
import Navbar from "@/src/components/Navbar"
import Sidebar from "@/src/components/Sidebar"
import ReduxProvider from "@/src/provider/ReduxProvider"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300","400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className={poppins.className}>
        <ReduxProvider>
                <Navbar />
          <div className="flex min-h-screen p-5">
            <Sidebar />

            <div className="flex-1 flex flex-col">

                
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