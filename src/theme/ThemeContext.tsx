import { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react'
import { usePrevious } from '../hooks/usePrevious'

type ThemeContextType = {
  isDarkMode: boolean
  themeController: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  themeController: () => null,
})

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setisDarkMode] = useState(false)
  const previsDarkMode = usePrevious(isDarkMode)

  const themeController = () => setisDarkMode(prevState => !prevState)

  useEffect(() => {
    const data = window.localStorage.getItem('dark-mode')
    const isDark = JSON.parse(data as string)

    if (isDark) {
      setisDarkMode(isDark)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode !== previsDarkMode) {
      window.localStorage.setItem(
        'dark-mode',
        JSON.stringify(isDarkMode)
      )
    }
  }, [isDarkMode, previsDarkMode])


  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      themeController,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
