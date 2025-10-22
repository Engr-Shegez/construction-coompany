import React, { useState } from "react";
import { navLinks } from "../constants";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-md">
      <div className="relative mx-auto max-w-11xl sm:px-6 px-4 lg:px-8 py-10 shadow-md rounded-md flex items-center justify-between bg-gray-900">
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
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-5 lg:space-x-8 text-xl">
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

        {/* Mobile hamburger button */}
        <div className="lg:hidden mr-4">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 relative w-8 h-8"
          >
            <div className="absolute left-1 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>
        <div className="lg:flex  gap-5 hidden text-xl ">
          <a href="#contact">
            <div className="px-2 py-1 -ml-2 rounded-lg bg-amber-950 text-white hover:bg-white-50 transition-colors duration-300 hover:text-black-100 whitespace-nowrap lg:mx-2">
              <span>Contact</span>
            </div>
          </a>
        </div>
      </div>
      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-40">
          {/* Background overlay (blurs everything except navbar) */}
          <div
            className="fixed top-[96px] left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setOpen(false)}
          ></div>
          {/* right-side dropdown panel */}
          <div
            className={`absolute right-0 w-3/4 sm:w-1/2 bg-gray-900 shadow-2xl px-6 py-8 transition-transform duration-300 ease-out ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
            style={{ minHeight: "calc(100vh - 80px)" }} // adjust if your navbar is taller
          >
            <ul className="flex flex-col space-y-7 font-bold text-xl">
              {navLinks.map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    onClick={handleLinkClick}
                    className="block text-white text-lg px-2 py-2 rounded hover:bg-white/10 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-block px-3 py-2 rounded bg-amber-950 text-white hover:opacity-90 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
