import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Nav from "./components/Nav";

// pages
import Home from "./pages/home";
import Careers from "./pages/careers";
import About from "./pages/about";

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
