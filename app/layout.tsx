'use client'

import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '../lib/registry'
import GoogleAnalytics from './_components/google-analytics'
import GlobalStyles from '../styles/global-styles'
import theme from '../styles/theme'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className={inter.className}>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics
            ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
          />
        )}
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Analytics />
          <SpeedInsights />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
