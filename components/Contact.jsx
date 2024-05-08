import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 bg-zinc-50 justify-around">
      <div className=" pl-5 pt-5  flex-col gap-10 items-center md:w-1/2">
        <div className="p-4 pl-5 font-semibold text-md text-green-700 ">
          <p>CONTACT DETAILS</p>
        </div>
        <div className="p-4 pl-5 font-bold text-4xl">
          <p>Get in Touch</p>
        </div>
        <div className="p-4 pl-5 font-semibold text-lg">
          <p>
            Have any query ? or want to know more ? Contact us and we will be
            happy to help.
          </p>
        </div>
        <div className="p-5 flex gap-2 items-center group">
          <CiLocationOn className="text-7xl text-green-700 group-hover:bg-green-700 group-hover:text-white duration-500 rounded-md" />
          <div>
            <h1 className="font-bold text-xl">Our Address</h1>
            <p>
              UG Floor, Regus TOWER-2, Assotech Bussiness Cresterra Plot No.22,
              Sector 135, Noida, Uttar Pradesh 201301
            </p>
          </div>
        </div>
        <div className="p-5 flex gap-2 items-center group">
          <MdOutlineEmail className="text-7xl text-green-700 group-hover:bg-green-700 group-hover:text-white duration-500 rounded-md" />
          <div className="p-2">
            <h1 className="text-xl font-bold">E-mail</h1>
            <div>
              <p className="font-semibold">General Enquiry:</p>
              <p className="text-green-700">info@abc.com</p>
              <p className="font-semibold">Business Enquiry:</p>
              <p className="text-green-700">deals@abc.com</p>
            </div>
          </div>
        </div>
        <div className="p-5 flex gap-2 items-center group">
          <FaPhoneAlt className="p-2 text-7xl text-green-700 group-hover:bg-green-700 group-hover:text-white duration-500 rounded-md" />
          <div>
            <h1 className="text-xl font-bold">Contact</h1>
            <p className="font-semibold">
              Mobile: <span className="text-green-700">+ 91 2452531</span>
            </p>
          </div>
        </div>
        <div className="p-5 flex gap-2 items-center group">
          <IoMdTime className="p-1 text-7xl text-green-700 group-hover:bg-green-700 group-hover:text-white duration-500 rounded-md" />
          <div>
            <h1 className="text-xl font-bold">Hours of Operation</h1>
            <p className="font-semibold">Everyday: 10:00 AM - 05:00 PM IST</p>
          </div>
        </div>
      </div>
      <div className="p-10  md:w-1/2 text-white justify-center md:items-start flex flex-col gap-4 rounded-lg bg-gray-900">
        <div className="text-4xl font-bold text-white">
          <p>Ready to Get Started?</p>
        </div>
        <div>
          <p>
            Fill Up The Form to get a Call from our Academic Counselor & to
            Download our Brochure*
          </p>
        </div>
        <form className="flex flex-col gap-4  ">
          <div>
            <label htmlFor="firstName">Name*</label>
            <div className="flex sm:flex-row flex-col gap-2">
              <div>
                <input
                  type="text"
                  id="firstName"
                  className="h-8 rounded-md w-full text-black"
                />
                <label className="block text-xs" htmlFor="firstName">
                  First Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  className="h-8 rounded-md w-full text-black"
                />
                <label className="block text-xs" htmlFor="lastName">
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="h-8 rounded-md w-full text-black"
            />
          </div>

          <div>
            <label htmlFor="num" className="block">
              Phone*
            </label>
            <input
              type="number"
              id="num"
              className="h-8 rounded-md w-full text-black"
            />
          </div>

          <div>
            <label htmlFor="city" className="block">
              City*
            </label>
            <input
              type="text"
              id="city"
              className="h-8 rounded-md w-full text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Which plan do you want to join*
            </label>
            <select
              name="batch"
              id="batch"
              className="text-black w-full h-8 rounded-md "
            >
              <option value="Select">Please Select</option>
              <option value="May 2024">1 Month</option>
              <option value="June 2024">3 Month</option>
              <option value="July 2024">6 Month</option>
            </select>
          </div>
          <div>
            <label htmlFor="amount" className="block">
              Initial amount for trading
            </label>
            <select
              name="amount"
              id="amount"
              className="text-black w-full h-8 rounded-md"
            >
              <option value="Select">Please Select</option>
              <option value="0-50000">0-50000</option>
              <option value="50000-100000">50000-100000</option>
              <option value="100000-500000">100000-500000</option>
              <option value="500000+">500000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="query" className="block">
              Your Query*
            </label>
            <input
              type="text"
              id="query"
              className="h-8 rounded-md w-full text-black"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5 rounded-md text-black" />
            <p>Accept Terms and Privacy Policy</p>
          </div>
          <button className="p-3 bg-green-800 hover:bg-green-600 w-2/3 rounded-md m-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
