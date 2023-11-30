import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./page/Home/Home"
import Login from "./page/Login/Login"


export default function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
          <div className="container">
            <ThemeProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ThemeProvider>
          </div>
      </Router>
      <Footer/>
    </div>
  );
}