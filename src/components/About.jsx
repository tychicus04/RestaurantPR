import React from "react";
import { ABOUT } from "../constants";
import { IoRestaurantOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className="relative text-white py-12 px-6 pt-[80px] bg-black bg-opacity-70" id="about">
      {/* Content */}
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-5xl text-yellow-500 font-bold text-center mb-8">
          <IoRestaurantOutline className="mx-auto" />
            </div>
            <div>
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">{ABOUT.header}</h2>
          <p className="text-sm leading-relaxed">{ABOUT.content}</p>
            </div>
          </div>

          {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ABOUT.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
