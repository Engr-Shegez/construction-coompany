import React from "react";
import { projects } from "../constants";

const Solutions = () => {
  return (
    <section id="project" className="py-16 bg-gray-900">
      <h2 className="text-4xl font-bold text-yellow-500 -mb-10 text-center">
        Recent Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-center items-center">
        {projects.map(({ imgPath, title }, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-12 "
          >
            <div className="relative w-4/5 max-w-mmd mx-auto">
              <img
                src={imgPath}
                alt={title}
                className="w-full h-80 object-cover rounded-md mt-25"
              />

              {/* Label that straddles the bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-cyan-900 text-gray-200 font-semibold px-8 py-4 rounded-md shadow-lg text-center md:text-xl w-[85%] flex flex-col items-center text-xl">
                <span>{title}</span>
                <a
                  href="#"
                  className="mt-2  text-yellow-300 underline hover:text-white transition-colors text-sm"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
