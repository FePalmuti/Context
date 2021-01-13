import React, { useState, createContext, useContext } from 'react'

const Context = createContext()

export default props => {
  const [actualTheme, setActualTheme] = useState("light")

  const themes = {
    light: {
      primaryColor: "#00F",
    },
    dark: {
      primaryColor: "#007",
    },
  }

  const value = {
    theme: themes[actualTheme],
    setTheme: setActualTheme,
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(Context)
  const { theme, setTheme } = context
  return ({
    theme,
    setTheme,
  })
}
