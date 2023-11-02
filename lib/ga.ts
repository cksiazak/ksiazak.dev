export type GtaggedWindow = Window & typeof globalThis & {
  gtag: (event: string, action: string, params?: Record<string, unknown>) => void
}

// log the pageview with their URL
export const pageview = (url: string) => {
  (window as GtaggedWindow).gtag(
    "config",
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string,
    {
      page_path: url,
    }
  )
}

// log specific events happening.
export const event = ({ action, params }: { action: string, params?: Record<string, unknown>}) => {
  (window as GtaggedWindow).gtag("event", action, params)
}
