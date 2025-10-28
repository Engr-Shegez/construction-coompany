import React, { useState } from "react";
import { navLinks } from "../constants";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-gray-900 shadow-md">
      <div className="max-w-8xl mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <a
          className="text-white flex text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105"
          href="#hero"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-20 h-20 md:w-25 -ml-4 md:h-25 lg:w-30 lg:h-30 object-contain"
          />

          <div className="flex flex-col md:flex-row md:items-center md:gap-2 items-center leading-tight uppercase mt-3">
            <span className="text-lg -ml-15 md:ml-0 md:text-2xl lg:text-2xl font-extrabold text-gray-100 ">
              Rahim
            </span>
            <span className="text-lg md:text-md lg:text-2xl text-1ray-600 sm:-mt-1 md:mt-0 font-extrabold">
              Construction
            </span>
          </div>
        </a>

        {/* ✅ Desktop Nav + Contact */}
        <div className="hidden lg:flex items-center ml-auto">
          <nav className="flex items-center">
            <ul className="flex space-x-5 lg:space-x-8 text-xl">
              {navLinks
                .filter(({ name }) =>
                  ["Home", "Project", "About"].includes(name)
                )
                .map(({ link, name }) => (
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
          {/* Contact button on the right */}
          <div className="ml-8 text-xl">
            <a href="#contact">
              <div className="px-3 py-2 rounded-2xl bg-amber-950 text-white hover:bg-white-50 transition-colors duration-300 hover:text-black-100 whitespace-nowrap">
                <span>Contact</span>
              </div>
            </a>
          </div>
        </div>

        {/* ✅ Mobile Hamburger (moved outside hidden div) */}
        <div className="lg:hidden mr-4">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 relative w-8 h-5"
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
      </div>

      {/* ✅ Mobile Dropdown */}
      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-40">
          {/* Background overlay */}
          <div
            className="fixed top-[90px] left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setOpen(false)}
          ></div>

          {/* Right-side dropdown panel */}
          <div
            className={`absolute right-0 md:w-2/5 w-1/2 bg-transparent shadow-2xl px-6 py-8 transition-transform duration-300 ease-out ${
              open
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
            style={{ minHeight: "calc(100vh - 80px)" }}
          >
            <ul className="flex flex-col space-y-7 font-bold text-xl">
              {navLinks.map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    onClick={handleLinkClick}
                    className="block text-white text-lg px-2 py-2 rounded hover:bg-gray-900 transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-block px-3 py-2 rounded bg-amber-950 hover:bg-orange-900 text-white hover:opacity-90 transition"
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
