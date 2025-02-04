"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const poem = [
  "Guillermina, luz de mi vida,",
  "En cada sonrisa, en cada mirada,",
  "Encuentro el amor, mi alma encantada,",
  "Contigo cada día es una nueva partida.",
  "",
  "Tus ojos, estrellas en mi universo,",
  "Guían mis pasos, iluminan mi ser,",
  "En tus brazos encuentro mi verso,",
  "Y en tu corazón, mi razón de ser.",
  "",
  "Te amo más allá de las palabras,",
  "Más allá del tiempo y la distancia,",
  "Eres mi presente y mi mañana,",
  "Mi amor eterno, mi dulce constancia.",
]

export default function LovePoem() {
  const [visibleLines, setVisibleLines] = useState(0)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Un Poema para Ti</h2>
      <div className="space-y-2">
        {poem.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={visibleLines > index ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-gray-800 text-center"
          >
            {line}
          </motion.p>
        ))}
      </div>
      {visibleLines < poem.length && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setVisibleLines(visibleLines + 1)}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full mx-auto block hover:bg-pink-600 transition-colors"
        >
          Revelar siguiente línea
        </motion.button>
      )}
    </div>
  )
}
