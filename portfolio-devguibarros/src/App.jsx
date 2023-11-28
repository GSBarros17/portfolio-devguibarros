import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./page/Home/Home"

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        </Navbar>
      </BrowserRouter>
    </div>
  )
}