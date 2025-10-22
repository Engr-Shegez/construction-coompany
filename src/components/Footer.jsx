import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-gray-950 text-gray-200 pt-12 pb-8"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/shop" className="hover:text-blue-400 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-300 mb-2">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:support@novagadget.com"
              className="hover:text-blue-400 transition-colors"
            >
              support@novagadget.com
            </a>
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-blue-400 transition-colors"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Address:</span> 123 Market Street,
            Lagos, Nigeria
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Stay Updated
          </h3>
          <p className="mb-4 text-sm text-gray-400">
            Subscribe to our newsletter for exclusive deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider & Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Rahim Construction</span>.
          All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 space-x-6 text-2xl">
          <a href="#" className="hover:text-pink-500 transition-colors">
            <AiFillInstagram />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <AiFillLinkedin />
          </a>
          <a href="#" className="hover:text-gray-100 transition-colors">
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
