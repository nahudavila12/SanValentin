"use client"
import { motion } from "framer-motion"

const emojis = ["💖", "😘", "🌹", "💕", "💘", "💞", "💓", "💗", "💟"]

export default function EmojiRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: -50,
          }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 1000,
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {emojis[Math.floor(Math.random() * emojis.length)]}
        </motion.div>
      ))}
    </div>
  )
}
