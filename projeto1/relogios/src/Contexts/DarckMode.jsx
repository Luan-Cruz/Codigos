import React, {createContext, useContext, useState} from "react";

export const DarkModeContext = createContext()

export function DarkModeProvider({ children}){
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    
return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
        </DarkModeContext.Provider>
    )
}

export const useThemeMode = () => {
    const context = useContext(DarkModeContext)

    if (!context){
        throw new Error("o contexto deve ser usado dentro de um provider")
    }
    return context 
}

