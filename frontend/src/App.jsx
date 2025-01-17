import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <div className="w-[80%] m-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
