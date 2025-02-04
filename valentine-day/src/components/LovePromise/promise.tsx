"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function LovePromise() {
  const [isRevealed, setIsRevealed] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Mi Promesa de Amor</h2>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsRevealed(true)}
        className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
      >
        Revelar Promesa
      </motion.button>
      {isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-gray-800 text-center"
        >
          <p>Guillermina, prometo amarte cada día más,</p>
          <p>ser tu compañero en las alegrías y en las tristezas,</p>
          <p>apoyarte en tus sueños y estar siempre a tu lado.</p>
          <p>Esta promesa es tan eterna como mi amor por ti.</p>
        </motion.div>
      )}
    </div>
  )
}

