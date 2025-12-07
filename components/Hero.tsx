"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

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
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -z-10">
        <Image
          src="/6.jpg"
          alt="Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center justify-center w-full max-w-md px-4 text-center h-full py-10"
      >
        {/* Header Text */}
        <div className="mb-6 text-white">
          <h2 className="text-xs md:text-sm font-light tracking-[0.2em] uppercase mb-1">
            The Wedding Of
          </h2>
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
            SINDI & HAMDANI
          </h1>
        </div>

        {/* Photo Frame */}
        <div className="relative mb-8 group">
           {/* Tape Top Left */}
           <div className="absolute -top-3 -left-3 w-12 h-4 bg-[#e0d8c8] opacity-90 rotate-[-45deg] shadow-sm z-20"></div>
           {/* Tape Bottom Right */}
           <div className="absolute -bottom-3 -right-3 w-12 h-4 bg-[#e0d8c8] opacity-90 rotate-[-45deg] shadow-sm z-20"></div>

          <div className="relative bg-white p-3 pb-8 shadow-2xl rotate-[-2deg] transition-transform duration-500 group-hover:rotate-0">
            <div className="relative w-48 h-64 md:w-56 md:h-72 overflow-hidden">
              <Image
                src="/6.jpg"
                alt="Couple Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Invitation Text */}
        <div className="text-white space-y-3 mb-8">
          <p className="text-sm font-light tracking-widest uppercase">Kepada</p>
          <p className="text-xs md:text-sm font-light leading-relaxed opacity-90 max-w-xs mx-auto">
            Dengan penuh rasa syukur, kami mengundang kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami yang penuh bahagia ini
          </p>
          <div className="flex justify-center gap-1">
             <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
             <span className="w-1 h-1 bg-white rounded-full opacity-100"></span>
             <span className="w-1 h-1 bg-white rounded-full opacity-50"></span>
          </div>
        </div>

        {/* Button */}
        {!isOpened && (
          <button
            onClick={onOpen}
            className="bg-black text-white px-6 py-2 rounded-md text-sm font-bold tracking-wide hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 border border-white/20 shadow-lg"
          >
            Open Invitation <FaPaperPlane className="text-xs" />
          </button>
        )}
        
        {isOpened && (
             <div className="animate-bounce text-white mt-4">
                <span className="text-xs tracking-widest">SCROLL DOWN</span>
             </div>
        )}

      </motion.div>
    </section>
  );
}
