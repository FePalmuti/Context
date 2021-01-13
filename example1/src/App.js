import React from 'react'
import { useTheme } from './Context/Theme'

import './App.css'

function App() {
  const { theme, setTheme } = useTheme()

  // setTheme("light")
  // setTheme("dark")

  return (
    <div className="App" style={{ backgroundColor: theme.primaryColor }} >
    </div>
  )
}

export default App
//-
