import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import Project from "../components/Credibility";
import Solutions from "../components/Projects";
import Problem from "../components/MissionStatement";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const Home = () => {
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

export default Home;
