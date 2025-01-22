import React from "react";
import { ABOUT, settings } from "../constants";
import { IoRestaurantOutline } from "react-icons/io5";
import Slider from "react-slick";

const About = () => {
  return (
    <section 
      className="text-white py-12 px-2 pt-[5rem] bg-black bg-opacity-70" 
      id="about"
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-5xl text-yellow-500 font-bold text-center mb-8">
            <IoRestaurantOutline className="mx-auto" />
          </div>
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">{ABOUT.header}</h2>
          <p className="text-sm leading-relaxed">{ABOUT.content}</p>
        </div>

        {/* Image Gallery */}
        <div className="hidden lg:flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ABOUT.images.map((image, index) => (
            <div key={index} className="relative w-full h-48 lg:h-64">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Image Gallery (Mobile) */}
        <div className="flex flex-col gap-4 lg:hidden">
          <Slider {...settings}>
            {ABOUT.images.map((image, index) => (
              <div key={index} className="relative w-full h-48 lg:h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105 "
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default About;