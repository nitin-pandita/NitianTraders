"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbar(false);
        setShowLoginOptions(false); // Close login options when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-black bg-white w-full h-[10vh]  z-100 ">
      <nav
        className="w-full bg-white shadow-md shadow-black border-t-1 text-black fixed top-0 left-0 right-0 z-[60]"
        ref={navbarRef}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="w-[3.8rem] rounded-full object-cover"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none text-green-400"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center py-3 mt-2 w-full md:block md:pb-0 md:mt-0 ${
                navbar ? " block" : "hidden"
              }`}
            >
              <ul className="md:h-auto items-center justify-center md:flex gap-10">
                <li className="text-xl p-2 text-center border-b-2 md:border-b-0 hover:bg-green-700/70 border-green-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-xl p-2 text-center border-b-2 md:border-b-0 hover:bg-green-700/70 border-green-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/blogs" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="text-xl p-2 text-center border-b-2 md:border-b-0 hover:bg-green-700/70 border-green-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/faqs" onClick={() => setNavbar(!navbar)}>
                    Faq's
                  </Link>
                </li>
                <li className="text-xl p-2 text-center border-b-2 md:border-b-0 hover:bg-green-700/70 border-green-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/pricing" onClick={() => setNavbar(!navbar)}>
                    Join Community
                  </Link>
                </li>
                <li className="text-xl p-2 text-center border-b-2 md:border-b-0 hover:bg-green-700/70 border-green-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
