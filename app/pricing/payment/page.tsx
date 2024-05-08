"use client";
import React, { useState } from "react";
import Script from "next/script";
import axios from "axios";
import customers from "razorpay/dist/types/customers";

export default function Checkout() {
  const idRef = React.useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    telegram: "",
    community: "",
    amount: 0,
  });

  const getAmount = (community: string): number => {
    switch (community) {
      case "Standard":
        return 999;
      case "Premium":
        return 2799;
      case "Business":
        return 5499;
      default:
        return 0;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Calculate amount based on selected community value
    const amount = getAmount(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      amount: amount,
    }));
  };

  // const amount = formData.amount;
  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: formData.amount * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const id = data.orderId;
      idRef.current = id;
      // setLoading1(false)
      return;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };
  const processPayment = async () => {
    createOrderId();
    const orderId = idRef.current;

    try {
      const options = {
        key: process.env.key_id,
        amount: formData.amount * 100,
        currency: "INR",
        name: "Payment", //busniess name
        description: "Payment",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.number,
        },
        order_id: orderId,
        handler: async function (response: any) {
          const { name, email, number, telegram, community, amount } = formData;

          try {
            const data = {
              ...formData,
              orderCreationId: orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              status: "payment done",
            };

            const paymentResponse = await axios.post("/api/paymentForm", data);

            if (paymentResponse.data.success) {
              alert("Payment successful!");
            } else {
              alert("Failed to insert payment data");
            }
          } catch (error) {
            console.error("Error processing payment:", error);
            alert("Payment failed. Please try again.");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.description);
      });

      paymentObject.open();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    processPayment();
  };
  // if(loading1) return <div className="container h-screen flex justify-center items-center">
  //   <LoaderCircle className=" animate-spin h-20 w-20 text-primary" />
  //   </div>
  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="w-full flex flex-col justify-center items-center mt-24 mb-6 h-[50vh]">
        <h1 className="w-full text-xl text-center">Payment Details</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-y-3 mt-6 w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
        >
          <div className="flex flex-row gap-x-2 w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700 text-black"
              required
            />
          </div>
          <div className="flex flex-row gap-x-2 w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700 text-black"
              required
            />
          </div>
          <div className="flex flex-row gap-x-2 w-full">
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700 text-black"
              required
            />
          </div>
          <div className="flex flex-row gap-x-2 w-full">
            <input
              type="text"
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleInputChange}
              placeholder="Telegram Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700 text-black"
              required
            />
          </div>
          <div className="flex flex-row gap-x-2 w-full">
            <select
              id="community"
              name="community"
              // placeholder="Community Plan"
              value={formData.community}
              onChange={handleSelectChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700 text-black"
              required
            >
              <option
                value=""
                className="text-black/40"
                disabled
                selected
                hidden
              >
                Select a plan
              </option>
              <option value="Standard" className="text-black">
                Standard 1 month
              </option>
              <option value="Premium" className="text-black">
                Premium 3 months
              </option>
              <option value="Business" className="text-black">
                Business 6 months
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-blue-600"
          >
            Payment
          </button>
        </form>
      </div>
    </>
  );
}
