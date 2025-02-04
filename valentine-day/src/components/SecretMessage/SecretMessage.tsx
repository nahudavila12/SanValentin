"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function SecretMessage() {
  const [isRevealed, setIsRevealed] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mouseDown, setMouseDown] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "rgba(200, 200, 200, 0.8)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!mouseDown) return
      const rect = canvas.getBoundingClientRect()
      const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left
      const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top
      ctx.globalCompositeOperation = "destination-out"
      ctx.beginPath()
      ctx.arc(x, y, 20, 0, Math.PI * 2)
      ctx.fill()

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      let transparent = 0
      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] < 50) transparent++
      }
      if (transparent > (pixels.length / 4) * 0.5) setIsRevealed(true)
    }

    canvas.addEventListener("mousemove", handleMove)
    canvas.addEventListener("touchmove", handleMove)
    canvas.addEventListener("mousedown", () => setMouseDown(true))
    canvas.addEventListener("touchstart", () => setMouseDown(true))
    canvas.addEventListener("mouseup", () => setMouseDown(false))
    canvas.addEventListener("touchend", () => setMouseDown(false))

    return () => {
      canvas.removeEventListener("mousemove", handleMove)
      canvas.removeEventListener("touchmove", handleMove)
      canvas.removeEventListener("mousedown", () => setMouseDown(true))
      canvas.removeEventListener("touchstart", () => setMouseDown(true))
      canvas.removeEventListener("mouseup", () => setMouseDown(false))
      canvas.removeEventListener("touchend", () => setMouseDown(false))
    }
  }, [mouseDown])

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Descubre el Mensaje Secreto</h2>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealed ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-center p-4"
        >
          <p className="text-xl text-pink-600">
            Gordita,sos el amor de mi vida. Cada día me enamoras mas y me haces muy feliz. Te amo infinitamente.
          </p>
        </motion.div>
        <canvas
          ref={canvasRef}
          width={300}
          height={150}
          className="w-full h-auto border-2 border-pink-300 rounded-lg cursor-pointer"
        />
        {!isRevealed && (
          <p className="text-sm text-gray-600 mt-2 text-center">Raspa la superficie para revelar el mensaje secreto</p>
        )}
      </div>
    </div>
  )
}

