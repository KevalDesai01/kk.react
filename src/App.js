import React from 'react'
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/NAvbar';
import About from './Component2/About';
import Contact from './Component3/Contact';







function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/' element={<Navbar/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>









    </div>
  );
}

export default App;
