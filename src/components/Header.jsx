import React from "react";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header>
      <div className="mx-auto max-w-11xl sm:px-6 px-4 lg:px-8 py-10 shadow-md rounded-md flex items-center justify-between">
        <a
          className="text-white text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105"
          href="#hero"
        >
          Rahim
          <span className="sm:hidden">
            <br />
          </span>
          Construction
        </a>

        <nav className="lg:flex items-center">
          <ul className="flex space-x-5 lg:space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="relative">
                <a href={link}>
                  <span className="transition-colors duration-300 hover:text-emerald-800">
                    {name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5">
          <a href="#contact">
            <div className="px-2 py-1 -ml-2 rounded-lg bg-amber-950 text-white hover:bg-white-50 transition-colors duration-300 hover:text-black-100 whitespace-nowrap lg:mx-2">
              <span>Contact</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
