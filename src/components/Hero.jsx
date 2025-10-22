import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[60vh] lg:h-[70vh] md:h-screen overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/images/region.jpg"
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/*  Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>s{/* Hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-10 md:px-16 text-white">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 mt-20 sm:mb-4 leading-tight">
          Crafting Landmark Properties with Purpose
        </h2>
        <p className="text-[18px] sm:text-[20px] md:text-[24px] max-w-md sm:max-w-xl text-gray-100 font-semibold">
          We design, develop, and deliver premium real estate projects that set
          new benchmarks in architecture, sustainability, and livability.
        </p>
        <button className="mt-20 w-fit bg-cyan-900 hover:bg-cyan-500 text-white font-semibold  py-2 px-6 rounded-full transition">
          EXPLORE ⇨
        </button>
      </div>
    </section>
  );
};

export default Hero;
