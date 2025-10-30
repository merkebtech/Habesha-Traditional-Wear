import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Cof from "./pages/Cof";
import Wed from "./pages/Wed";
import Gro from "./pages/Gro";
import Eve from "./pages/Eve";
import Sim from "./pages/Sim";
import Cap from "./pages/Cap";
import Men from "./pages/men";
import Contact from "./pages/contact";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      {/* Navbar always on top */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cof" element={<Cof />} />
          <Route path="/wed" element={<Wed />} />
          <Route path="/eve" element={<Eve />} />
          <Route path="/gro" element={<Gro />} />
          <Route path="/sim" element={<Sim />} />
          <Route path="/cap" element={<Cap />} />
          <Route path="/men" element={<Men />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

   < Footer/>
    
    </Router>
  );
};

export default App;
