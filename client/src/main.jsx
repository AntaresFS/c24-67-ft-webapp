import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppWithContext from './App.jsx'

// Obtén el elemento donde se montará la aplicación
const rootElement = document.querySelector("#root")

// Usa createRoot para inicializar el renderizado
const root =createRoot(rootElement);

// Renderiza la aplicación
root.render(<AppWithContext />)
