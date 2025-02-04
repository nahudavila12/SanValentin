import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="w-full text-center py-4 bg-pink-100 text-pink-600 font-semibold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hecho con amor 💕 por Nahuel para la Tutita
    </motion.footer>
  )
}
