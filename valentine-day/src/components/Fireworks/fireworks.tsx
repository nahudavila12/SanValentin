"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  color: string
  radius: number
  velocity: { x: number; y: number }
  alpha: number
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []

    function createParticles(x: number, y: number) {
      const particleCount = 100
      const angleIncrement = (Math.PI * 2) / particleCount

      for (let i = 0; i < particleCount; i++) {
        const velocity = {
          x: Math.cos(angleIncrement * i) * Math.random() * 6,
          y: Math.sin(angleIncrement * i) * Math.random() * 6,
        }
        particles.push({
          x,
          y,
          color: `hsl(${Math.random() * 360}, 50%, 50%)`,
          radius: Math.random() * 2 + 1,
          velocity,
          alpha: 1,
        })
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.velocity.y += 0.01
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y
        particle.alpha -= 0.005

        if (particle.alpha > 0) {
          ctx.save()
          ctx.globalAlpha = particle.alpha
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()
          ctx.restore()
        } else {
          particles.splice(index, 1)
        }
      })
    }

    animate()

    const intervalId = setInterval(() => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 0.5
      createParticles(x, y)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}

