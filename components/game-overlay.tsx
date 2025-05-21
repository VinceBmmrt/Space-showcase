"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, RefreshCw, Home } from "lucide-react"

interface GameOverlayProps {
  type: "paused" | "gameOver"
  score?: number
  level?: number
  onResume?: () => void
  onRestart?: () => void
}

export function GameOverlay({ type, score, level, onResume, onRestart }: GameOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-black/80 flex items-center justify-center z-20"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 p-8 rounded-2xl max-w-md w-full text-center"
      >
        {type === "paused" ? (
          <>
            <h2 className="text-3xl font-bold mb-4 text-white">Jeu en pause</h2>
            <p className="text-gray-300 mb-8">Prenez une pause et reprenez quand vous êtes prêt !</p>

            <div className="flex flex-col gap-3">
              {onResume && (
                <Button
                  size="lg"
                  onClick={onResume}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                >
                  <Play className="h-5 w-5" />
                  Reprendre
                </Button>
              )}

              {onRestart && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onRestart}
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-5 w-5" />
                  Recommencer
                </Button>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-4 text-white">Game Over</h2>

            {score !== undefined && level !== undefined && (
              <div className="bg-gray-800 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Score</span>
                  <span className="text-2xl font-bold text-white">{score}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Niveau</span>
                  <span className="text-xl font-bold text-purple-400">{level}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {onRestart && (
                <Button
                  size="lg"
                  onClick={onRestart}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-5 w-5" />
                  Rejouer
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 flex items-center justify-center gap-2"
              >
                <Home className="h-5 w-5" />
                Menu principal
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
