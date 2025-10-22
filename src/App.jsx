import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Project from "./components/Project";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <About />
      <Project />
      <Solutions />

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
