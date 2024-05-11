import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 ">
        <div className="p-5 ">
          <ul className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img
                src="/images/logo.png"
                className="w-10 h-10 md:w-20 md:h-20 rounded-full "
                alt=""
              />
              <p className="text-gray-800 font-bold text-lg md:text-2xl pb-6">
                NITian's <span className="text-green-700">Traders</span>
              </p>
            </div>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer text-pink-600 transition duration-100 transform hover:scale-110" />
              <FaTwitter className="text-2xl cursor-pointer text-blue-600 transition duration-100 transform hover:scale-110" />
              <FaLinkedin className="text-2xl cursor-pointer text-blue-600 transition duration-100 transform hover:scale-110" />
              <FaYoutube className="text-2xl cursor-pointer text-red-600 transition duration-100 transform hover:scale-110" />
            </div>
          </ul>
        </div>
        <div className="p-5 flex flex-col gap-2 items-center justify-center">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <Link href="/about">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/blogs">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Blogs
              </li>
            </Link>
            <Link href="/pricing">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Pricing
              </li>
            </Link>
            <Link href="#community">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Community
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
              Contact
            </li> */}
            <Link href="/testimonials">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Testimonials
              </li>
            </Link>
            <Link href="/faqs">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Faq's
              </li>
            </Link>
            <Link href="/terms">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Terms and Conditions
              </li>
            </Link>
            <Link href="/privacy">
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
                Privacy Policy
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Address</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
              UG Floor, Regus TOWER-2,
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
              Assotech Bussiness Cresterra Plot No.22,
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-purple-600 cursor-pointer">
              Sector 135, Noida, Uttar Pradesh 201301
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2024 All rights reserved | Build with ❤ by{" "}
          <span className="text-blue-700 font-bold cursor-pointer">
            <a href="https://www.teksila.in/" target="_blank">
              Teksila
            </a>
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
