import React from "react";
import CountUp from "react-countup";
import { counterItems } from "../constants";

export default function AnimatedCounter() {
  return (
    <div id="counter" className="w-full bg-cyan-900 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white/70 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
