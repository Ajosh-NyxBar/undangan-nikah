"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaEnvelopeOpenText } from "react-icons/fa";

interface HeroProps {
  onOpen?: () => void;
  isOpened?: boolean;
}

export default function Hero({ onOpen, isOpened = true }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -z-10">
        <Image
          src="/1.jpg" // Assuming 1.jpg is the hero image
          alt="Wedding Couple"
          fill
          className="object-cover brightness-50"
          priority
        />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="text-center text-white z-10 px-4"
      >
        <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] mb-4 uppercase">
          The Wedding Of
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">
          Mawar & Sartana
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest">
          09 . 11 . 2025
        </p>
      </motion.div>

      {!isOpened ? (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={onOpen}
            className="bg-white/20 backdrop-blur-sm border border-white/50 text-white px-8 py-3 rounded-full text-lg tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <FaEnvelopeOpenText />
            BUKA UNDANGAN
          </button>
        </div>
      ) : (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <span className="text-sm tracking-widest">SCROLL</span>
        </div>
      )}
    </section>
  );
}
