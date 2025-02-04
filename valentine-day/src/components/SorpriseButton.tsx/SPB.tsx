"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SurpriseButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-lg"
      >
        {isOpen ? "Cerrar Sorpresa" : "Abrir Sorpresa"}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 bg-white rounded-lg p-4 shadow-lg"
          >
            <p className="text-pink-600 text-lg">
              Guillermina, eres la luz de mi vida. Cada momento contigo es un tesoro que guardo en mi corazón. Te
              prometo amor, risas y aventuras para toda la vida. ¡Te amo infinitamente!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

