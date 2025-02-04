"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error("Error al reproducir:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/cancion.mp3" preload="auto" loop />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="fixed bottom-4 right-4 bg-white text-pink-600 p-3 rounded-full shadow-lg"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </motion.button>
    </>
  );
}
