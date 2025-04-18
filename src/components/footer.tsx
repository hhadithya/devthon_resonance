"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile accordion-style sections */}
        <div className="block sm:hidden">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <img
                src="/logo-white.png"
                alt="Resonance Logo"
                className="h-7 mr-2"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Breakthrough science through collaboration
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
              <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* App Download Buttons for Mobile */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-row space-x-3">
              <button className="flex items-center bg-gray-800 text-white py-2 px-3 hover:bg-gray-700 transition flex-1">
                <FaApple className="text-xl mr-2" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download now</p>
                  <p className="text-sm font-medium">App Store</p>
                </div>
              </button>

              <button className="flex items-center bg-gray-800 text-white py-2 px-3 hover:bg-gray-700 transition flex-1">
                <FaGooglePlay className="text-xl mr-2" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download now</p>
                  <p className="text-sm font-medium">Play Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Links for Mobile */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/become-researcher" className="text-gray-400 hover:text-white text-sm">
                  Become Researcher
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-gray-400 hover:text-white text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-white text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo-white.png"
                alt="Resonance Logo"
                className="h-8 mr-2"
              />
            </div>
            <p className="text-gray-400">
              Breakthrough science through collaboration
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
              <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/become-researcher"
                  className="text-gray-400 hover:text-white"
                >
                  Become Researcher
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 hover:text-white"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Our App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <div className="space-y-4">
              <button className="flex items-center bg-gray-800 text-white py-2 px-5 hover:bg-gray-700 transition">
                <FaApple className="text-2xl mr-3" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download now</p>
                  <p className="text-md font-medium">App Store</p>
                </div>
              </button>

              {/* Play Store Button */}
              <button className="flex items-center bg-gray-800 text-white py-2 px-5 hover:bg-gray-700 transition">
                <FaGooglePlay className="text-2xl mr-3" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download now</p>
                  <p className="text-md font-medium">Play Store</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 text-center text-gray-400 text-sm px-4">
        <p>© 2025 - Designed by VirtualKnights. All rights reserved.</p>
      </div>
    </footer>
  );
}