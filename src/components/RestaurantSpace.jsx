import React from "react";
import { RESTAURANTSPACE, settings } from "../constants";
import Slider from "react-slick";
import GalleryItem from "./GalleryItem.jsx";

const RestaurantSpace = () => {

  return (
    <section className="text-white py-10 px-6 bg-black bg-opacity-70" id="restaurantSpace">
      <h1 className="text-3xl font-bold text-center mb-10 text-yellow-500">{RESTAURANTSPACE.header}</h1>
      <p className="text-center mb-8">
        {RESTAURANTSPACE.content}
      </p>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {RESTAURANTSPACE.images.map((section, index) => (
          <GalleryItem key={index} image={section.image} />
        ))}
      </div>
      {/* Image Gallery (Mobile) */}
      <div className="flex flex-col gap-4 lg:hidden">
        <Slider {...settings}>
          {RESTAURANTSPACE.images.map((section, index) => (
            <GalleryItem key={index} {...section} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RestaurantSpace;
