"use client"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 z-0"
      animate={{
        background: [
          "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
          "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
          "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
          "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
          "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}
