import React from "react";
import { ABOUT, settings } from "../constants";
import { IoRestaurantOutline } from "react-icons/io5";
import Slider from "react-slick";

const About = () => {
  return (
    <section className="text-white pt-20 pb-12 px-4 bg-black bg-opacity-70" id="about">
      {/* Content */}
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <IoRestaurantOutline className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">{ABOUT.header}</h2>
          <p className="text-base leading-relaxed mb-8">{ABOUT.content}</p>
        </div>

        {/* Image Gallery */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
        <div className="flex flex-col gap-4 lg:hidden px-2">
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