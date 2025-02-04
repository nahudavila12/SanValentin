"use client"
import AnimatedBackground from "@/components/Bg/animatedBackg"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "@/components/Confeti/confeti"
import Countdown from "@/components/Countdown/countdown"
import EmojiRain from "@/components/Emojis/emojis"
import Fireworks from "@/components/Fireworks/fireworks"
import LovePromise from "@/components/LovePromise/promise"
import LoveQuiz from "@/components/LoveQuiz/lovequiz"
import LoveStory from "@/components/LoveStory/lovestory"
import MorseMessage from "@/components/Morse/Morse"
import BackgroundMusic from "@/components/Music/music"
import NeonText from "@/components/Neont/neon"
import PhotoGallery from "@/components/PhotoGallery/photogallery"
import LovePoem from "@/components/Poema/poema"
import PulsingHearts from "@/components/PulsinHeart/PH"
import RosePetals from "@/components/RosePetals/RP"
import SecretMessage from "@/components/SecretMessage/SecretMessage"
import SurpriseButton from "@/components/SorpriseButton.tsx/SPB"
import ValentineCard from "@/components/ValentineCard/valentine"
import { useState, useEffect } from "react"
import ValentineProposal from "@/components/Propuesta/propuesta"
import Footer from "@/components/Footer/footer"



export default function ValentinePage() {
  const [showContent, setShowContent] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showProposal, setShowProposal] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const startCelebration = () => {
    setShowCountdown(true)
  }

  const onCountdownComplete = () => {
    setShowCountdown(false)
    setShowCelebration(true)
    setShowFireworks(true)
    setShowConfetti(true)
    setTimeout(() => {
      setShowCelebration(false)
      setShowFireworks(false)
      setShowConfetti(false)
    }, 7000)
  }

  const handleProposalAccept = () => {
    setShowProposal(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 overflow-x-hidden relative">
      {showProposal ? (
        <ValentineProposal onAccept={handleProposalAccept} />
      ) : (
        <>
          <AnimatedBackground />
          <PulsingHearts />
          <EmojiRain />

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 text-center mt-10 z-10"
          >
            <NeonText color="pink">Feliz San Valentín, Guillermina</NeonText>
          </motion.h1>

          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl mx-auto z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <LoveStory />
                  <PhotoGallery />
                </div>
                <LovePoem />
                <LoveQuiz />
                <SecretMessage />
                <MorseMessage />
                <ValentineCard />
                <LovePromise />
                <SurpriseButton />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startCelebration}
                  className="mt-8 bg-white text-pink-600 px-6 py-3 rounded-full font-bold shadow-lg mx-auto block"
                >
                  <NeonText color="purple">Celebrar Nuestro Amor (7 segundos)</NeonText>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
          <Footer />

          {showCountdown && <Countdown onComplete={onCountdownComplete} />}
          {showCelebration && <RosePetals />}
          {showFireworks && <Fireworks />}
          {showConfetti && <Confetti />}
          <FloatingHearts />
          <BackgroundMusic />
        </>
      )}
    </div>
  )
}

function FloatingHearts() {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <motion.div
        key={i}
        className="absolute text-4xl pointer-events-none z-10"
        initial={{
          opacity: 0,
          x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
          y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
        }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, -200],
          x: (i % 2 === 0 ? "+=" : "-=") + Math.random() * 100,
          rotate: Math.random() * 360,
          transition: {
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        }}
        >
          {["❤️", "💖", "💕", "💗", "😘", "🌹", "💘", "💞", "💓", "💟"][Math.floor(Math.random() * 10)]}
        </motion.div>
      ))}
    </>
  )
}




