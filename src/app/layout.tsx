"use client"

import { Provider } from "react-redux"
import { store } from "../store/store"
import { ReactNode } from "react"
import "../app/globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}