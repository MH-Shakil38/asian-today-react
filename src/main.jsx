import React from 'react'
import ReactDOM from 'react-dom/client'

// router config
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
// import './index.css'
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
