import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Err from './pages/Err';
import Room from './pages/Room';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='rooms' element={<Rooms />} />
      <Route path='rooms/:slug' element={<Room />} />
      <Route path='*' element={<Err />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App