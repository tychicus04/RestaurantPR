import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import RestaurantSpace from "./components/RestaurantSpace";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <div 
        style={{ 
          backgroundImage: "url('../src/assets/bg.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          position: 'relative', 
        }}
        className="bg-black bg-opacity-50"
      >
        <About />
        <Menu />
        <RestaurantSpace />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

export default App;