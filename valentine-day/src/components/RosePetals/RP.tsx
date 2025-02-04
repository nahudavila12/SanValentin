"use client"

import { useEffect, useRef } from "react"

interface Petal {
  x: number
  y: number
  size: number
  rotation: number
  speed: number
}

export default function RosePetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const petals: Petal[] = []

    function createPetal(): Petal {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 15 + 5,
        rotation: Math.random() * 360,
        speed: Math.random() * 2 + 1,
      }
    }

    for (let i = 0; i < 50; i++) {
      petals.push(createPetal())
    }

    function drawPetal(petal: Petal) {
      ctx.save()
      ctx.translate(petal.x, petal.y)
      ctx.rotate((petal.rotation * Math.PI) / 180)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.quadraticCurveTo(petal.size / 2, -petal.size, petal.size, 0)
      ctx.quadraticCurveTo(petal.size / 2, petal.size, 0, 0)
      ctx.fillStyle = "rgba(255, 192, 203, 0.7)"
      ctx.fill()
      ctx.restore()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      petals.forEach((petal) => {
        petal.y += petal.speed
        petal.rotation += 0.5

        if (petal.y > canvas.height) {
          Object.assign(petal, createPetal())
        }

        drawPetal(petal)
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}

