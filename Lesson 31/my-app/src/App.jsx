import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Blogs from './Component/Blogs';
import About from './Component/About';
import Login from './Component/Login';
import Register from './Component/Register';
import MainSection from './Component/MainSection';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
