"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const EventCard = ({ title, date, time, location, address, mapLink, imageSrc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: delay }}
    viewport={{ once: true }}
    className="event-card relative w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500"
  >
    <div className="relative h-64 w-full">
      <Image src={imageSrc} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-3xl font-serif font-bold mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-sm opacity-90">
            <FaCalendarAlt />
            <span>{date}</span>
        </div>
      </div>
    </div>
    
    <div className="p-6 text-white">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-5xl font-serif font-bold text-amber-400">14</div>
        <div className="flex flex-col justify-center h-full pt-1">
            <span className="text-lg font-semibold">Minggu</span>
            <span className="text-sm opacity-75">Desember 2025</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3">
            <FaClock className="text-amber-400" />
            <span>{time}</span>
        </div>
        <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-amber-400 mt-1" />
            <div>
                <p className="font-semibold">{location}</p>
                <p className="text-sm opacity-75 mt-1">{address}</p>
            </div>
        </div>
      </div>

      <a 
        href={mapLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full py-3 text-center bg-amber-600 hover:bg-amber-700 transition-colors rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        <span>Google Maps</span>
        <FaExternalLinkAlt className="text-xs" />
      </a>
    </div>
  </motion.div>
);

export default function EventDetails() {
  return (
    <section className="py-24 px-4 bg-stone-950 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Rangkaian Acara</h2>
          <p className="text-white/60">Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan kami pada:</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <EventCard 
            title="Akad Nikah"
            date="14 Desember 2025"
            time="09.00 WIB s.d Selesai"
            location="Kediaman Mempelai Wanita"
            address="Kp. Nunuk Rt.01 Rw.06 Ds. Hegarmanah Kec. Cikancung Kab. Bandung (Pinggir Sekolah MA Al-Hasan)"
            mapLink="https://maps.google.com"
            imageSrc="/2.jpg"
            delay={0.2}
          />
          <EventCard 
            title="Resepsi"
            date="14 Desember 2025"
            time="11.00 WIB s.d Selesai"
            location="Kediaman Mempelai Wanita"
            address="Kp. Nunuk Rt.01 Rw.06 Ds. Hegarmanah Kec. Cikancung Kab. Bandung"
            mapLink="https://maps.google.com"
            imageSrc="/3.jpg"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
