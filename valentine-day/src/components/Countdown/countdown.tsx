"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Countdown({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(7)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer)
          onComplete()
        }
        return prevCount - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-white"
        >
          {count}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

