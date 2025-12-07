"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SaveTheDate() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Images to use (using 2 images as requested for the background toggle)
  const images = ["/4.jpg", "/5.jpg"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="save-the-date" ref={containerRef} className="relative h-screen w-full sticky top-0 -z-10 overflow-hidden">
      {/* Background Slideshow */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        
        {/* Photo Stack */}
        <div className="relative flex flex-col gap-4 items-center">
            {/* Top Photo */}
            <div className="relative w-48 h-64 md:w-64 md:h-80 border-4 border-white shadow-2xl transform -rotate-3">
                <Image src={images[0]} alt="Couple 1" fill className="object-cover" />
                
                {/* Save The Date Text */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -right-16 md:-right-24 top-4 md:top-10 text-white text-right"
                >
                    <h3 className="font-serif text-2xl md:text-4xl leading-none drop-shadow-lg">Save</h3>
                    <h3 className="font-serif text-2xl md:text-4xl leading-none drop-shadow-lg">The Date</h3>
                </motion.div>
            </div>

            {/* Bottom Photo */}
            <div className="relative w-48 h-64 md:w-64 md:h-80 border-4 border-white shadow-2xl transform rotate-3 -mt-10">
                <Image src={images[1]} alt="Couple 2" fill className="object-cover" />

                {/* With Love Text */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -right-16 md:-right-20 bottom-10 md:bottom-20 text-white text-left"
                >
                    <p className="font-serif text-lg md:text-xl italic tracking-widest drop-shadow-lg">...With</p>
                    <p className="font-serif text-lg md:text-xl italic tracking-widest drop-shadow-lg">Love</p>
                </motion.div>
            </div>
        </div>

        {/* Names at Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-10 text-center text-white"
        >
            <div className="flex items-center gap-4 justify-center">
                <span className="font-script text-3xl md:text-5xl">Mawar</span>
                <span className="text-2xl">♡</span>
                <span className="font-script text-3xl md:text-5xl">Santana</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
