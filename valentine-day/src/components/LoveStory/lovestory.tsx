"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const storyEvents = [
  { date: "El día que nos conocimos", description: "Pense que no ibamos a durar mucho pero aqui estamos puesh." },
  { date: "Nuestro primer viaje", description: "Me encanta compartir contigo, a pesar de todo, soy feliz con vos" },
  { date: "Cuando te pedí que fueras mi novia", description: "Amor nunca estuve tan nerviosito por algo, tenia una ansiedad, pero salio hermoso." },
  { date: "Cuando me dijiste te amo", description: "Puesh yo tenia pensado decirtelo en algun momento, pero saber que vos sentias lo mismo fue hermoso" },
]

export default function LoveStory() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">Nuestra Historia de Amor</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold text-gray-800">{storyEvents[currentIndex].date}</h3>
          <p className="text-gray-600">{storyEvents[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : storyEvents.length - 1))}
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev < storyEvents.length - 1 ? prev + 1 : 0))}
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

