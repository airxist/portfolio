import React from "react";
import About from "./components/about/About";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/Header";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Anime from './components/anime/Anime'

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/anime" element={<Anime />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
