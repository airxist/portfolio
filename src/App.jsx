import React from "react";
import About from "./components/about/About";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/Header";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Anime from "./components/anime/Anime";
import { Spotlight } from "./components/_ui/SpotLight";

const App = () => {
  const location = useLocation();
  return (
    <div className="relative mx-auto overflow-hidden overflow-x-hidden max-w-screen-2xl">
      <Spotlight
        className="left-0 -top-40 md:left-60 md:-top-20"
        // fill="#4B0082"
        fill="rgb(239, 212, 154)"
      />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
