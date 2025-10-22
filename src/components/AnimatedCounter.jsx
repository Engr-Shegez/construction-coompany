import React from "react";

import CountUp from "react-countup";
import { counterItems } from "../constants";

export default function AnimatedCounter() {
  return (
    <div id="counter" className="padding-x-lg xl:mt-o mt-12">
      <div className="mx-auto grid grid-cols-4">
        {counterItems.map((item) => (
          <div className="bg-cyan-900 p-7 flex flex-col justify-center">
            <div
              key={counterItems.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
