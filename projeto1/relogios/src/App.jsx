
import React from "react"
import Relogios from "./Components/Relogios"
import {ToggleTheme}  from "./Components/ButtonDarkMode"
import { useThemeMode } from "./Contexts/DarckMode"

function App() {
    const { isDarkMode} = useThemeMode()
    return (
        <div className={`container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <div className="buttonMd">
            <ToggleTheme/>
            </div>
            <div className="containerMid">
                <h1 className="tittle">
                    Horario Atual
                </h1>
                <Relogios/>
            </div>
        </div>
        
    )
}
export default App