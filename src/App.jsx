import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from './Components/Homepage/Homepage'
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register"

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
