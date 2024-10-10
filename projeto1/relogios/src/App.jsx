
import React from "react"
import Relogios from "./Components/Relogios"
import DarkMode from "./Components/ButtoDarkMode"
function App() {
    return (
        
            
            <div className='container'>
              <div className="buttonMd">
                <DarkMode/>
                </div>
                <div className="containerMid">
                    <h1 className="tittle">
                        Horario Atual
                    </h1>
                    <Relogios />
                </div>
            </div>

    )
}
export default App