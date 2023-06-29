import React, {} from 'react';
import './App.css';
import Home from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './component/Auth';
import Register from './component/Register';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Auth/>} />
  <Route path="/home" element={<Home />} />
</Routes>
</BrowserRouter>
      
    </div>
    
  );
}

export default App;
