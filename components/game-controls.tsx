"use client"

import { Button } from "@/components/ui/button"
import { Pause, Play, ArrowUp, ArrowLeft, ArrowRight } from "lucide-react"

interface GameControlsProps {
  isMobile: boolean
  isPaused: boolean
  onPause: () => void
}

export function GameControls({ isMobile, isPaused, onPause }: GameControlsProps) {
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={onPause}
          className="bg-black/50 border-white/20 text-white hover:bg-black/70"
        >
          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
        </Button>
      </div>

      {isMobile && (
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-black/50 border-white/20 text-white hover:bg-black/70 h-14 w-14"
              onTouchStart={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp" }))}
              onTouchEnd={() => window.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowUp" }))}
            >
              <ArrowUp className="h-8 w-8" />
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 border-white/20 text-white hover:bg-black/70 h-14 w-14"
                onTouchStart={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }))}
                onTouchEnd={() => window.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowLeft" }))}
              >
                <ArrowLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-black/50 border-white/20 text-white hover:bg-black/70 h-14 w-14"
                onTouchStart={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }))}
                onTouchEnd={() => window.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowRight" }))}
              >
                <ArrowRight className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-4 z-10 text-white text-sm opacity-70">
        <p>Contrôles: Flèches pour se déplacer, Espace pour sauter</p>
      </div>
    </>
  )
}
