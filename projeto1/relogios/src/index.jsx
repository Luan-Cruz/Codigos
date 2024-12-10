import './styles.css';
import React from 'react';
import ReactDom from 'react-dom'
import {DarkModeProvider} from './Contexts/DarckMode.jsx';
import App from './App.jsx'

const root = ReactDom.createRoot(
    document.getElementById("root")

)

root.render(
<DarkModeProvider>
<App/>
</DarkModeProvider>)