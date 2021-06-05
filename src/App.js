import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from "./component/Navbar/Navbar"
import './App.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
    </div>
  );
}

export default App;
