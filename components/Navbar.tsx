"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Couple", href: "#couple" },
    { label: "Event", href: "#event" },
    { label: "Gallery", href: "#gallery" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl font-bold tracking-widest uppercase">S & H</div>
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          <FaBars />
        </button>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button 
          onClick={toggleMenu} 
          className="absolute top-6 right-6 text-white text-3xl hover:rotate-90 transition-transform duration-300"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="text-3xl md:text-5xl font-serif text-white hover:text-amber-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
