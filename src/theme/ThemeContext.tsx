import { createContext, useContext, useEffect, useState, FC, ReactNode } from 'react'
import { usePrevious } from '../hooks/usePrevious'

type ThemeContextType = {
  darkMode: boolean
  themeController: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  themeController: () => null,
})

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const prevDarkMode = usePrevious(darkMode)

  const themeController = () => setDarkMode(prevState => !prevState)

  useEffect(() => {
    const data = window.localStorage.getItem('dark-mode')
    const isDark = JSON.parse(data as string)

    if (isDark) {
      setDarkMode(isDark)
    }
  }, [])

  useEffect(() => {
    if (darkMode !== prevDarkMode) {
      window.localStorage.setItem(
        'dark-mode',
        JSON.stringify(darkMode)
      )
    }
  }, [darkMode, prevDarkMode])


  return (
    <ThemeContext.Provider value={{
      darkMode,
      themeController,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
