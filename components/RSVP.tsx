"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="py-24 px-4 bg-stone-950 relative">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative z-10"
      >
        <div className="p-8">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-2">RSVP</h2>
          <h3 className="text-xl font-serif text-stone-600 mb-6">Doa & Ucapan</h3>
          <p className="text-stone-500 text-sm mb-8">
            Doakan dan berikan ucapan terbaik untuk Kami di hari pernikahan kami.
          </p>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-serif text-stone-800 mb-2">Terima Kasih!</h3>
              <p className="text-stone-600">Ucapan dan konfirmasi Anda telah kami terima.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                />
              </div>
              
              <div>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-stone-600"
                >
                  <option value="">Konfirmasi Kehadiran</option>
                  <option value="hadir">Hadir</option>
                  <option value="tidak_hadir">Tidak Hadir</option>
                  <option value="ragu">Masih Ragu</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Tulis ucapan"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-stone-900 text-white rounded-lg font-semibold hover:bg-stone-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          )}
        </div>
        
        {/* Decorative bottom border */}
        <div className="h-2 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400" />
      </motion.div>
    </section>
  );
}
