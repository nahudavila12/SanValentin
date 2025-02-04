'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function ValentineProposal({ onAccept }: { onAccept: () => void }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const handleYesClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    onAccept()
  }

  const handleNoHover = () => {
    setNoButtonPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-300 to-red-400 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-4">¿Quieres ser mi San Valentín?</h2>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white px-4 py-2 rounded-full"
            onClick={handleYesClick}
          >
            ¡Sí!
          </motion.button>
          <motion.button
            className="bg-red-500 text-white px-4 py-2 rounded-full"
            animate={noButtonPosition}
            onHoverStart={handleNoHover}
            whileHover={{ scale: 0.9 }}
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
