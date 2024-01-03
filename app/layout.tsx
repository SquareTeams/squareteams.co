import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import './landing.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome To Square Teams'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        {children}
      </body>
    </html>
  )
}
