import React from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Main/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Header />}  />
          

          
          
        </Routes>
      </Router>
    </div>
  )
}

export default App