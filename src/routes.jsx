import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import App from './App'

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
       
      </Routes>
    </Router>
  )
}

export default Main
