import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import './landing.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome To Square Teams',
  description: 'Hub of passionate creators and innovators, united by a shared mission to empower and elevate.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Square Teams, creators, innovators, empowerment" />
        
        <meta property="og:title" content="Square Teams" />
        <meta property="og:description" content="A dynamic hub of passionate creators and innovators, united by a shared mission to empower and elevate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${process.env.NEXT_PUBLIC_HOST_URL}/`} />
        <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_HOST_URL}/assets/og/default.png`} />
        <meta property="og:image:alt" content="Square Teams" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Square Teams" />
        <meta name="twitter:description" content="A dynamic hub of passionate creators and innovators, united by a shared mission to empower and elevate." />
        <meta name="twitter:image" content={`https://${process.env.NEXT_PUBLIC_HOST_URL}/assets/og/default.png`}></meta>
      </head>
      <body className={robotoCondensed.className}>
        {children}
      </body>
    </html>
  )
}
