import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-black py-10"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-full text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-20 -mt-10 text-center">
            About Our Development Practice
          </h2>
          <p className="text-lg text-gray-100 mb-4">
            At Rahim Construction company, we are committed to shaping vibrant,
            sustainable communities through innovative real estate development.
            Our approach combines strategic vision, meticulous planning, and
            disciplined execution to deliver projects that stand the test of
            time. From master planning to design, construction, and asset
            management, every stage is guided by a commitment to quality,
            efficiency, and long-term value creation.
          </p>

          <p className="text-lg text-gray-100 mb-4">
            We specialize in high-quality residential, commercial, and mixed-use
            developments that harmonize with their surroundings and meet the
            evolving needs of communities. Leveraging market insights, rigorous
            feasibility analysis, and a design-led approach, we ensure each
            project achieves maximum return on investment while enhancing
            livability and functionality.
          </p>

          <p className="text-lg text-gray-100 mb-6">
            Sustainability, resilience, and innovation are at the core of our
            philosophy. We integrate modern construction techniques,
            environmentally responsible materials, and efficient operational
            practices to deliver spaces that are not only visually striking but
            built to last for generations.
          </p>

          <ul className="list-disc pl-5 text-gray-100 mb-6 space-y-2">
            <li>
              Comprehensive site selection and feasibility studies to optimize
              investment outcomes.
            </li>
            <li>
              Integrated design-build approach that ensures timely delivery and
              cost certainty.
            </li>
            <li>
              Commitment to sustainable construction, resilient infrastructure,
              and long-term asset stewardship.
            </li>
            <li>
              Collaborative partnerships with architects, engineers, and local
              communities to deliver projects that inspire and endure.
            </li>
          </ul>

          <a
            href="#contact"
            className="inline-block bg-cyan-900 text-white px-8 py-3 mt-8 rounded-lg font-semibold hover:bg-cyan-700 transition"
          >
            Work with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
