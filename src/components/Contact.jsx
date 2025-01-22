import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-10"
      style={{ backgroundImage: "url('../src/assets/about.jpg')" }}
      id="contact"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-yellow-500 text-2xl font-bold mb-4">{CONTACT.header}</h2>
        <p className="text-sm mb-6">
          {CONTACT.content}
        </p>

        {/* Input Section */}
        <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Nhập địa chỉ Email"
            className="w-full md:w-2/3 px-4 py-2 bg-white text-black rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            {CONTACT.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
