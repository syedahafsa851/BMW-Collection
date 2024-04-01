import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import OurCars from "./Components/OurCars";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourcars" element={<OurCars />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;