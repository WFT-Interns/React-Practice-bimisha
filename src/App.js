import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home"
import Weather from './Components/Weather';
import  {FoodRecipe} from './Components/FoodRecipe';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Weather' element={<Weather/>}/>
          <Route path='/FoodRecipe' element={<FoodRecipe/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
