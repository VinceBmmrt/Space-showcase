"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gamepad, Code, BookOpen } from "lucide-react"

interface GameMenuProps {
  onStartGame: () => void
}

export function GameMenu({ onStartGame }: GameMenuProps) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 font-pixel">
          WEBDEV QUEST
        </h1>
        <p className="text-xl text-blue-200 max-w-md mx-auto">
          Explorez le monde du développement web à travers une aventure pixelisée !
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-4 items-center"
      >
        <Button
          size="lg"
          onClick={onStartGame}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full px-8 py-6 text-xl flex items-center gap-2"
        >
          <Gamepad className="h-5 w-5" />
          Commencer l'aventure
        </Button>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-blue-900/50 p-6 rounded-xl text-center">
            <Code className="h-10 w-10 text-green-400 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">Apprenez en jouant</h3>
            <p className="text-blue-200 text-sm">Découvrez les concepts du développement web</p>
          </div>

          <div className="bg-blue-900/50 p-6 rounded-xl text-center">
            <BookOpen className="h-10 w-10 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white mb-1">Ressources</h3>
            <p className="text-blue-200 text-sm">Accédez à des tutoriels et exemples</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 text-center text-blue-300 text-sm"
      >
        <p>Utilisez les flèches pour vous déplacer et la barre d'espace pour interagir</p>
        <p className="mt-1 text-blue-400">© 2025 WebDev Quest</p>
      </motion.div>
    </div>
  )
}
