
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/home'
import CadastroColaborador from './components/CadastroColaborador/cadastroColaborador'
import App from './App'

import FuncionarioHomePage from './pages/funcionarioHomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastroColaborador" element={<CadastroColaborador />} />
        <Route path="/app" element={<App />} />
        <Route path="/funcionario" element={<FuncionarioHomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default Main
