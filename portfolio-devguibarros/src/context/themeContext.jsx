import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}


// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({children}) => {
    const [isLightMode, setIsLightMode] = useState(false)

    const toggleLightMode = () =>{
        setIsLightMode((prevMode) => !prevMode)
    }

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleLightMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useLightMode(){
    return useContext(ThemeContext)
}
