"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ValentineCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <motion.div
        className="relative w-64 h-80 mx-auto cursor-pointer"
        animate={{ rotateY: isOpen ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="absolute w-full h-full backface-hidden bg-pink-100 rounded-lg shadow-lg flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-2xl font-bold text-pink-600">Para Guillermina</h3>
        </motion.div>
        <motion.div
          className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", rotateY: 180 }}
        >
          <h3 className="text-xl font-bold text-pink-600 mb-4">Mi Amor Eterno</h3>
          <p className="text-gray-800 text-center">
            Guillermina, cada día contigo es una bendición. Tu sonrisa ilumina mi mundo y tu amor me hace la persona más
            feliz. Te amo más allá de las palabras.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

