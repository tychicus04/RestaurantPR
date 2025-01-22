import React from "react";
import { RESTAURANTSPACE, settings } from "../constants";
import Slider from "react-slick";

const RestaurantSpace = () => {

  return (
    <section className="text-white py-10 px-6 bg-black bg-opacity-70" id="restaurantSpace">
      <h1 className="text-3xl font-bold text-center mb-10 text-yellow-500">{RESTAURANTSPACE.header}</h1>
      <p className="text-center mb-8">
        {RESTAURANTSPACE.content}
      </p>
      <div className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {RESTAURANTSPACE.images.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-3 text-yellow-500">{section.title}</h2>
              <p className="text-gray-400">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Image Gallery (Mobile) */}
      <div className="flex flex-col gap-4 lg:hidden">
        <Slider {...settings}>
          {RESTAURANTSPACE.images.map((section, index) => (
            <div
              key={index}
              className="relative w-full h-48 lg:h-64"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-105 "
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-3 text-yellow-500">{section.title}</h2>
                <p className="text-gray-400">{section.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RestaurantSpace;
