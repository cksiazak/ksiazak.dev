'use client'

import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '../lib/registry'
import GlobalStyles from '../styles/global-styles'
import theme from '../styles/theme'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const handleMeta = async () => {
  await fetch('/api/meta/')
}
 
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => { handleMeta() }, [])

  return (
    <html lang='en' className={inter.className}>
      <body suppressHydrationWarning>
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
          />
        )}
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
