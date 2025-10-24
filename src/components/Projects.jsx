import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Solutions = () => {
  return (
    <section id="project" className="py-16 bg-gray-900 relative z-0">
      {/* Title animation */}
      <motion.h2
        className="text-4xl font-bold text-yellow-500 -mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Recent Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-y-22 gap-x-0.5 mt-16">
        {projects.map(({ imgPath, title }, index) => {
          const direction = index % 2 === 0 ? -80 : 80; // alternate slide direction
          return (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                transition: { type: "spring", stiffness: 200 },
              }}
              variants={fadeUp}
              initial={{ opacity: 0, x: direction, y: 60 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="relative w-4/5 mx-auto">
                <img
                  src={imgPath}
                  alt={title}
                  className="w-full h-80 object-cover rounded-md"
                />

                {/* Label overlay that straddles the bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-cyan-900 text-gray-200 font-semibold px-8 py-4 rounded-md shadow-lg text-center md:text-xl w-[85%] flex flex-col items-center text-xl z-20">
                  <span>{title}</span>
                  <Link
                    to="/viewProject"
                    className="mt-2 text-yellow-400 underline hover:text-white hover:cursor-pointer transition-colors text-sm z-30 relative"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Solutions;
