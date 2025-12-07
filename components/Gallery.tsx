"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/1.jpg", // Reuse for demo
  "/2.jpg",
  "/3.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-center text-white mb-16"
        >
          Our Gallery
        </motion.h2>
        
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative rounded-lg overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
