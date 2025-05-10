import React from "react";
import Navbar from "../components/Navbar";

function ContactForm() {
  return (
    <>
        <Navbar/>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl relative">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
            Contact Us
            </h2>
            <p className="text-center text-gray-600 mb-6">
            Some contact information on how to reach out
            </p>

            <form className="space-y-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition">
                Send Message
            </button>
            </form>

            {/* Left-side Illustration */}
            <div className="absolute left-0 bottom-0 transform -translate-x-1/2">
            <img src="/illustration1.png" alt="Illustration" className="w-32" />
            </div>

            {/* Right-side Illustration */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/2">
            <img src="/illustration2.png" alt="Illustration" className="w-20" />
            </div>
        </div>
        </section>
    </>
  );
}

export default ContactForm;
