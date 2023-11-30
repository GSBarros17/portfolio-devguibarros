import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}


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

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}