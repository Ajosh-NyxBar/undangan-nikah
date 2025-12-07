"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SaveTheDate() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const containerRef = useRef(null);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Images to use (using 2 images as requested for the background toggle)
  const images = ["/6.jpg", "/7.jpg"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-12-14T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

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
        <div className="relative flex flex-col gap-4 items-center mb-8">
            {/* Top Photo */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 1, delay: 2 }}
                viewport={{ once: true }}
                className="relative w-48 h-64 md:w-64 md:h-80 border-4 border-white shadow-2xl"
            >
                <Image src={images[0]} alt="Couple 1" fill className="object-cover" />
                
                {/* Save The Date Text */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                  viewport={{ once: true }}
                  className="absolute -right-16 md:-right-24 top-4 md:top-10 text-white text-right"
                >
                    <h3 className="font-serif text-2xl md:text-4xl leading-none drop-shadow-lg">Save</h3>
                    <h3 className="font-serif text-2xl md:text-4xl leading-none drop-shadow-lg">The Date</h3>
                </motion.div>
            </motion.div>

            {/* Bottom Photo */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                viewport={{ once: true }}
                className="relative w-48 h-64 md:w-64 md:h-80 border-4 border-white shadow-2xl -mt-10"
            >
                <Image src={images[1]} alt="Couple 2" fill className="object-cover" />

                {/* With Love Text */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                  viewport={{ once: true }}
                  className="absolute -right-16 md:-right-20 bottom-10 md:bottom-20 text-white text-left"
                >
                    <p className="font-serif text-lg md:text-xl italic tracking-widest drop-shadow-lg">...With</p>
                    <p className="font-serif text-lg md:text-xl italic tracking-widest drop-shadow-lg">Love</p>
                </motion.div>
            </motion.div>
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="flex gap-4 md:gap-8 text-white mb-8"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl md:text-4xl font-bold font-serif">{item.value}</span>
              <span className="text-xs md:text-sm uppercase tracking-widest opacity-80">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Names at Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-10 text-center text-white"
        >
            <div className="flex items-center gap-4 justify-center">
                <span className="font-script text-3xl md:text-5xl">Sindi</span>
                <span className="text-2xl">♡</span>
                <span className="font-script text-3xl md:text-5xl">Hamdani</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
