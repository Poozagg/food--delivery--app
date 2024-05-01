import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from './AppRoutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*  use router instead of app to keep code cleaner & more organised*/}
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
)
