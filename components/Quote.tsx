"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex items-center gap-4 md:gap-6">
    <span className="text-5xl md:text-6xl font-bold font-serif leading-none text-stone-900 [writing-mode:vertical-lr]">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-xs md:text-sm uppercase tracking-widest [writing-mode:vertical-lr] text-stone-500">
      {label}
    </span>
  </div>
);

export default function Quote() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-14T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-stone-900 text-white flex items-center py-20">
      {/* Parallax Background Image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <Image
          src="/6.jpg" // Using a different image for variety
          alt="Background"
          fill
          className="object-cover brightness-[0.3]"
        />
      </motion.div>

      {/* White Side Background */}
      <div className="absolute top-0 right-0 h-full w-[40%] md:w-[35%] bg-white z-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>

      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col md:flex-row justify-center md:justify-between items-start pt-10 md:pt-0 gap-12 md:gap-0">
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-[60%] md:w-1/2 flex flex-col justify-start relative z-20 pt-24 md:pt-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-2">Menghitung</h2>
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Hari</h2>
          
          <div className="max-w-xl mb-12">
            <p className="text-sm md:text-base leading-relaxed mb-6 font-light text-stone-200">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            </p>
            <p className="font-bold text-lg text-amber-400">QS. Ar-Rum: 21</p>
          </div>
        </motion.div>

        {/* Right Area - Vertical Countdown */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute top-12 right-6 md:static w-auto flex flex-col gap-6 md:gap-12 items-start z-20 md:pr-10 md:-mt-32"
        >
          <CountdownItem value={timeLeft.days} label="Hari" />
          <CountdownItem value={timeLeft.hours} label="Jam" />
          <CountdownItem value={timeLeft.minutes} label="Menit" />
          <CountdownItem value={timeLeft.seconds} label="Detik" />
        </motion.div>
      </div>

      {/* Small Image Bottom Right (Overlapping) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 md:right-20 w-1/2 md:w-1/3 h-[30vh] md:h-[40vh] z-40 translate-y-10"
      >
        <div className="relative w-full h-full border-t-8 border-l-8 border-white/10 shadow-2xl">
            <Image
            src="/7.jpg" // Another couple photo
            alt="Couple Portrait"
            fill
            className="object-cover"
            />
        </div>
      </motion.div>
      
      {/* Slanted Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-stone-950 z-30" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
}
