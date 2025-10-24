import React from "react";
import { problems } from "../constants";

const Project = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Built with Purpose. Made to Endure.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-4/5 ">
        {problems.map(({ imgPath, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <img
              src={imgPath}
              alt={title}
              className="w-32 md:w-40 lg:w-44 h-auto object-contain rounded-lg mb-4  "
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              {title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
