import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthProvider } from './context/AuthContext'
import { useTheme } from './context/themeContext'
import useAuthentication from './hooks/useAuthentication'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./page/Home/Home"
import Login from "./page/Login/Login"
import Contact from "./page/Contact/Contact"
import Dashboard from './page/Dashboard/Dashboard'
import CreateCard from './page/CreateCard/CreateCard'
import EditCard from './page/EditCard/EditCard'





export default function App() {
  
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user === undefined
  const {isLightMode} = useTheme()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{user}}>
        <Router>
            <Navbar />
              <div className={`${"container"} ${isLightMode ? "light" : ""}`}>
                  <Routes>
                    <Route path="/portfolio-devguibarros/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={!user ? <Login/> : <Navigate to="/portfolio-devguibarros/"/>}/>
                    <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
                    <Route path="/editcard/:id" element={user ? <EditCard/> : <Navigate to="/login"/>}/>
                    <Route path="/createcard" element={user ? <CreateCard/> : <Navigate to="/login"/>}/>
                  </Routes>
                  <lightModeToggle />
              </div>
              <Footer/>
        </Router>
      </AuthProvider>
    </>
  );
}