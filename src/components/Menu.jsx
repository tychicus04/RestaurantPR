import React from "react";
import DishCard from "./DishCard";
import { MENU } from "../constants";
import { useState, useEffect } from "react";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewAllClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="text-white py-10 bg-black bg-opacity-70" id="menu">
      <h1 className="text-3xl font-bold text-center mb-10">{MENU.header}</h1>
      <p className="text-center mb-8">{MENU.content}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {MENU.dishes.map((dish, index) => (
          <DishCard key={index} dish={dish} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          className="bg-yellow-500 text-black py-2 px-5 rounded-lg hover:bg-yellow-400"
          onClick={handleViewAllClick}
        >
          {MENU.viewAll}
        </button>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div 
            className="relative bg-white p-5 rounded-lg shadow-lg max-w-3xl w-full sm:max-w-md transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-700 font-bold text-2xl hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src="../src/assets/menu.jpg"
              alt="Menu"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
