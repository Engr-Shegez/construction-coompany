import React from "react";

import AnimatedCounter from "./AnimatedCounter";

const Problem = () => {
  return (
    <section className="relative py-12 bg-gray-500">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden gap-3 ">
        {/* Left: Text Section */}
        <div className="bg-gray-700 pl-6 md:pl-10 lg:pl-16 pr-8 py-14 text-left rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
            Who We Are
          </h1>
          <p className="text-white leading-relaxed font-Poppins">
            We are a full-service real estate development firm that turns land
            into thriving, value-creating places. From the first parcel we
            evaluate to the final handover to an owner or homeowner, we manage
            every technical, financial and human detail so projects are
            delivered on brief, on budget and with market appeal. <br /> <br />
            Our work sits at the intersection of market insight, disciplined
            project delivery, responsible design and rigorous commercial
            execution. Our purpose is to create high-quality built environments
            that meet market needs, deliver strong returns to investors, and
            improve lives for residents and communities. <br /> <br />
            We identify the right land, design responsibly, build efficiently,
            and sell or lease with integrity — while managing risk and
            maximizing long-term value. As trusted owner-developers, we align
            design, finance, construction, and sales around a single commercial
            and ethical objective: to create lasting value.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="relative flex justify-center items-center">
          <img
            src="/images/platform.jpg"
            alt="Who We Are"
            className="w-4/5 md:w-3/4 h-98 lg:w-8/9 
            object-cover rounded-xl shadow-lg transform -rotate-3  transition-transform duration-400 hover:rotate-0"
          />
        </div>
      </div>

      {/* Optional: Counter below the section */}
      <div className="mt-12">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Problem;

{
}
