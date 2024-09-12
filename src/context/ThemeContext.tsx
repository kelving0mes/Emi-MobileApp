import {createContext, useState} from 'react';

interface ThemeContextData {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData | null>(null)

export const ThemeProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<string>('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export {ThemeContext};