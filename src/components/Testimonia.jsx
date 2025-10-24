import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Daniel, Homeowner",
    text: `Thank you again for all of your hard work on our BEAUTIFUL HOME!
      No words can express how comfortable, beautiful, and truly amazing it turned out.
      Your patience, talent, and vision in bringing it all together were exceptional!`,
  },
  {
    id: 2,
    name: "Sarah, Developer",
    text: `Working with your team has been seamless from start to finish.
      The attention to detail and commitment to quality construction exceeded my expectations.`,
  },
  {
    id: 3,
    name: "Michael, Investor",
    text: `Your professionalism and transparency made the entire development process easy.
      The finished property speaks volumes of your expertise and dedication.`,
  },
];

const Testimonia = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
        Testimonials
      </h1>

      {/* Image + label container */}
      <div className="relative w-4/5 mx-auto">
        <img
          src="/images/site.jpg"
          alt="Hero"
          className="w-full h-[400px] md:h-[700px] object-cover rounded-sm mt-10 transition-all duration-700"
        />

        {/* Label overlay (same position across all screen sizes) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-cyan-900 text-gray-200 font-semibold px-6 py-6 rounded-md shadow-lg text-center w-[90%] md:w-[60%] lg:w-[60%] flex flex-col items-center transition-all duration-500  lg:h-[300px]">
          <h2 className="text-yellow-400 mb-4 md:text-2xl text-xl font-semibold">
            What Our Clients are saying
          </h2>
          <p className="text-white leading-relaxed text-sm md:text-base font-Poppins mb-3">
            "{testimonials[current].text}"
          </p>
          <span className="text-yellow-300 font-medium text-sm md:text-base">
            - {testimonials[current].name}
          </span>

          {/* Arrows (responsive inside label) */}
          <div className="flex justify-between w-full mt-5 px-4">
            <button
              onClick={prevSlide}
              className="bg-yellow-700 hover:bg-yellow-400 text-white p-2 rounded-full transition-all size-9 flex items-center justify-center"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-yellow-700 hover:bg-yellow-400 text-white p-2 rounded-full transition-all size-9 flex items-center justify-center"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonia;
