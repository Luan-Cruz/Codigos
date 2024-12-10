import React, {useState} from 'react';
import {  useThemeMode } from '../Contexts/DarckMode';

export function ButtonTheme(){
    const {isDarkMode, toggleDarkMode} = useThemeMode()
    return(
        <button className='buttonDarkMode' onClick = {toggleDarkMode}>
     {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
)
} 

export function ToggleTheme(){ 
    const { toggleDarkMode} = useThemeMode()
    const [moved,setMoved] = useState(false)
    
    const toggleMove = () =>{
        setMoved(!moved)
        toggleDarkMode()
    }
    
    
    return(
        <div className='containerBt'>
    <button className={ `buttonDarkMode ${moved ? 'moveR' : 'moveL'}`} onClick={toggleMove} ></button>
    </div>
)
}




