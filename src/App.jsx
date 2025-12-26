import React from "react";
import Navbar from "./components/Navbar";
import ScrollNav from "./components/ScrollNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sections.css";

function App() {
  return (
    <Router>


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <ScrollNav />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Footer />
            </>
          }
        />

        <Route path="/portfolio/:id" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;

