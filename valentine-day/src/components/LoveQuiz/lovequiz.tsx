"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const questions = [
  {
    question: "¿Cuál fue el primer regalo que te di?",
    options: ["Un libro", "Una flor", "Un peluche", "Una joya"],
    correctAnswer: 1,
  },
  {
    question: "¿Dónde fue nuestro primer beso?",
    options: ["En el parque", "En el cine", "En la Unca", "En la beby"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es mi comida favorita que tú cocinas?",
    options: ["Pasta", "Tacos", "Milanesas", "Ravioles"],
    correctAnswer: 2,
  },
]

export default function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Quiz de Nuestro Amor</h2>
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-800 mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(index)}
                  className="w-full bg-pink-100 text-pink-800 py-2 px-4 rounded-md hover:bg-pink-200 transition-colors"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-800 mb-4">
              ¡Bien gordita parece que me amas! Le pegaste a {score} de {questions.length} respuestas correctas.
            </p>
            <p className="text-lg text-pink-600">
              {score === questions.length
                ? "¡Perfecto! Conoces cada detalle de nuestra historia de amor."
                : "Cada respuesta incorrecta es una oportunidad para crear nuevos recuerdos juntos."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

