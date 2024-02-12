import './App.css';
import React from 'react'
import SearchProfile from './Pages/SearchProfile/SearchProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Claim from './Pages/Claim/Claim';
import CreateClaim from './Pages/CreateClaim/CreateClaim';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/create" element={<CreateClaim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
