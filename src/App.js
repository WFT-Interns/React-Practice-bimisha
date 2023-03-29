import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Weather from './Components/Weather';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Weather' element={<Weather/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
