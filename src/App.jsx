import React from "react";
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";*/
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import Food from "./pages/Food";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Menu />
      <Food />
      <Services />
      <AboutUs />

      <Footer />
    </div>
  );
};

/*
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/food" element={<Food />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};*/

export default App;
