import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { ThemeProvider } from './context/themeContext'
import { AuthProvider } from './context/AuthContext'
import useAuthentication from './hooks/useAuthentication'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./page/Home/Home"
import Login from "./page/Login/Login"




export default function App() {
  
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  console.log(user)
  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>carregando...</p>
  }

  return (
    <div className="container">
      <AuthProvider value={{user}}>
        <Router>
          <Navbar />
            <div className="container">
              <ThemeProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
                </Routes>
              </ThemeProvider>
            </div>
            <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}