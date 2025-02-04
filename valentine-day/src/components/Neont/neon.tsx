"use client"
import { motion } from "framer-motion"
import type React from "react"

export default function NeonText({ children, color = "pink" }: { children: React.ReactNode; color?: string }) {
  return (
    <motion.span
      className={`text-${color}-500 font-bold`}
      style={{
        textShadow: `
          0 0 7px #fff,
          0 0 10px #fff,
          0 0 21px #fff,
          0 0 42px #${color},
          0 0 82px #${color},
          0 0 92px #${color},
          0 0 102px #${color},
          0 0 151px #${color}
        `,
      }}
      animate={{
        opacity: [1, 0.8, 1],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.span>
  )
}

