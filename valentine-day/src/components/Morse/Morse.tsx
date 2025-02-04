"use client"

import { useState, useEffect } from "react"

const morseCode: { [key: string]: string } = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
}

export default function MorseMessage() {
  const message = "TE AMO GUILLERMINA"
  const [currentIndex, setCurrentIndex] = useState(0)
  const [morseMessage, setMorseMessage] = useState("")

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        const char = message[currentIndex].toUpperCase()
        setMorseMessage((prev) => prev + (morseCode[char] || "") + " ")
        setCurrentIndex((prev) => prev + 1)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Mensaje en Código Morse</h2>
      <p className="text-lg text-gray-800 mb-4 font-mono">{morseMessage}</p>
      <p className="text-sm text-gray-600 text-center">Decodifica este mensaje secreto</p>
    </div>
  )
}

