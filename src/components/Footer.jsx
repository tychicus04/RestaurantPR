import React from "react";
import { FOOTER } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white p-10" 
    style={{ 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      position: 'relative', 
      zIndex: '-1', 
    }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Section */}
        <div>
          <h3 className="text-yellow-500 text-lg font-bold mb-3">{FOOTER.contact}</h3>
          <p className="text-sm mb-2">
            {FOOTER.brand}
          </p>
          {FOOTER.contactInfo.map((info) => (
            <div key={info.id} className="flex items-center space-x-2 mb-2">
              <i className="text-white">{info.icon}</i>
              <span className="text-sm">{info.value}</span>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-yellow-500 text-lg font-bold mb-3">{FOOTER.library}</h3>
          <div className="grid grid-cols-3 gap-2">
            {FOOTER.gallery.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full h-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Customer Feedback Section */}
        <div>
          <h3 className="text-yellow-500 text-lg font-bold mb-3">{FOOTER.testimonies}</h3>
          <p className="text-sm mb-3">
            {FOOTER.testiContent}
          </p>
          <div className="flex space-x-4">
            {FOOTER.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-yellow-500 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            {FOOTER.chatWithAdmin}
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm">
            {FOOTER.bookTable}
          </button>
        </div>
        <p className="text-xs text-center mt-4 md:mt-0">{FOOTER.copyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
