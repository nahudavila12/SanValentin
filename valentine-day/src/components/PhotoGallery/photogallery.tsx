"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const photos = [
  { src: "/primerafotito.jpeg", alt: "Nuestra primera fotito juntosh" },
  { src: "/pancho.jpeg", alt: "Una foto de los dosh y un besote" },
  { src: "/viajecito.jpeg", alt: "Nuestro viajecito a cordoba" },
  { src: "/navidad.jpeg", alt: "Primera navidad juntitosh" },
  { src: "/poncho.jpeg", alt: "En el poncho los dosh" },
  { src: "/plaza.jpeg", alt: "Primera foto aqui en valle chico puesh" },
  { src: "/cumpleaños.jpeg", alt: "Tu cumpleañitos los dosh" },
]

export default function PhotoGallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Nuestros Momentos Especiales</h2>
      <div className="relative h-80 bg-white rounded-xl shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentPhoto}
            src={photos[currentPhoto].src}
            alt={photos[currentPhoto].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-white text-center">{photos[currentPhoto].alt}</p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhoto(index)}
            className={`w-3 h-3 rounded-full mx-1 ${index === currentPhoto ? "bg-white" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  )
}

