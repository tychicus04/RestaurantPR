import { useState } from "react";
import logo from "../assets/logo.png";
import { LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-4 z-50 w-full flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between p-4 bg-black bg-opacity-50 backdrop-blur-lg lg:my-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg lg:px-6">
                <img src={logo} alt="logo" className="w-20 h-auto" />
                <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link, index) => (
                        <a key={index} 
                            href={`#${link.targetId}`} 
                            className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-70`} 
                            onClick={(e) => handleScroll(e, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="w-full bg-black bg-opacity-50 p-4 backdrop-blur-lg lg:hidden">
                    {LINKS.map((link, index) => (
                        <a key={index} 
                            href={`#${link.targetId}`} 
                            className="block py-2 text-center text-sm uppercase tracking-tight text-white hover:opacity-70" 
                            onClick={(e) => handleScroll(e, link.targetId)}>
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;