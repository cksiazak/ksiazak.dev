import { createContext, useContext, useEffect, useState } from 'react';
import { usePrevious } from '../hooks/usePrevious'

type ThemeContextType = {
  darkMode: boolean
  themeController: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  themeController: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  const prevDarkMode = usePrevious(darkMode)

  const themeController = () => setDarkMode(prevState => !prevState)

  useEffect(() => {
    const data = window.localStorage.getItem('dark-mode');
    const isDark = JSON.parse(data);

    if (isDark) {
      setDarkMode(isDark)
    }
  }, []);

  useEffect(() => {
    if (darkMode !== prevDarkMode) {
      window.localStorage.setItem(
        'dark-mode',
        JSON.stringify(darkMode)
      );
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

export default ThemeProvider;
