"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/7.jpg" // Reuse hero image or another one
          alt="Footer Background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center px-4 z-10"
      >
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.
        </p>
        
        <h2 className="text-2xl md:text-3xl font-serif mb-12">Kami yang Berbahagia</h2>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
          Mawar & Sartana
        </h1>

        <div className="text-sm opacity-50 mt-20">
          © 2025. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
