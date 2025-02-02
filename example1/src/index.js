import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import ThemeProvider from './Context/Theme'

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
)
