import React from "react";

import { Link } from "react-router-dom";

const ExplorePage = () => {
  return (
    <section className="bg-amber-900 pt-25 ">
      <button className="mt-20 w-fit bg-cyan-900 hover:bg-cyan-500 text-white font-semibold  py-2 px-6 rounded-full transition">
        <Link to="/">Go Home</Link>
      </button>
    </section>
  );
};

export default ExplorePage;
