import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}


// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({children}) => {
    const storedTheme = localStorage.getItem("theme")
    const [isLightMode, setIsLightMode] = useState(storedTheme === "light" ? true : false)
   

    const toggleLightMode = () =>{
        setIsLightMode((prevMode) => !prevMode)
    }

    useEffect(() => {
        localStorage.setItem("theme", isLightMode ? "light" : "dark")
    }, [isLightMode])

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleLightMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useLightMode(){
    return useContext(ThemeContext)
}
