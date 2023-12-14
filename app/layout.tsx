'use client'

import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import StyledComponentsRegistry from '../lib/registry'
import GoogleAnalytics from './_components/GoogleAnalytics'
import GlobalStyles from '../styles/GlobalStyles'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className={roboto.className}>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics
            ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
          />
        )}
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
