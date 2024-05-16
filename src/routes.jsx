import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import App from './App'
import FuncionarioHomePage from './pages/funcionarioHomePage'

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/funcionario" element={<FuncionarioHomePage/>}/>
      </Routes>
    </Router>
  )
}

export default Main
