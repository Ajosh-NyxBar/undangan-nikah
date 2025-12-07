"use client";
import { useState, useRef, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Auto-play attempt
    const attemptPlay = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked, waiting for interaction");
        }
      }
    };

    // Play on first click anywhere if not playing
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        attemptPlay();
      }
    };

    document.addEventListener("click", handleInteraction, { once: true });
    
    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 ${isPlaying ? "animate-spin-slow" : ""}`}
      >
        {isPlaying ? <FaMusic /> : <FaPause />}
      </button>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
