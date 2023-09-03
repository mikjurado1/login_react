import React from 'react'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>    
          <Route path='/home' element={<Home/>}></Route>         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
