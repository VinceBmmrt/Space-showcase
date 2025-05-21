"use client"

import { Heart } from "lucide-react"

interface GameScoreProps {
  score: number
  level: number
  lives: number
}

export function GameScore({ score, level, lives }: GameScoreProps) {
  return (
    <div className="absolute top-4 left-4 z-10 flex items-center gap-6">
      <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
        <p className="text-white font-bold">Score: {score}</p>
      </div>

      <div className="bg-purple-900/50 backdrop-blur-sm px-4 py-2 rounded-full">
        <p className="text-white font-bold">Niveau: {level}</p>
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: lives }).map((_, i) => (
          <Heart key={i} className="h-6 w-6 text-red-500 fill-red-500" />
        ))}
        {Array.from({ length: 3 - lives }).map((_, i) => (
          <Heart key={i + lives} className="h-6 w-6 text-gray-600" />
        ))}
      </div>
    </div>
  )
}
