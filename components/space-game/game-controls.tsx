"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"

interface GameControlsProps {
  onControlPress: (direction: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | " ", isPressed: boolean) => void
}

export function GameControls({ onControlPress }: GameControlsProps) {
  const [showControls, setShowControls] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border-white/20 text-white"
        onClick={() => setShowControls(!showControls)}
      >
        <span className="text-xl">🎮</span>
      </Button>

      {showControls && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl shadow-lg">
            <div className="grid grid-cols-3 gap-2">
              <div></div>
              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-white/10 border-white/20 text-white"
                onTouchStart={() => onControlPress("ArrowUp", true)}
                onTouchEnd={() => onControlPress("ArrowUp", false)}
              >
                <ArrowUp className="h-8 w-8" />
              </Button>
              <div></div>

              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-white/10 border-white/20 text-white"
                onTouchStart={() => onControlPress("ArrowLeft", true)}
                onTouchEnd={() => onControlPress("ArrowLeft", false)}
              >
                <ArrowLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-white/10 border-white/20 text-white"
                onTouchStart={() => onControlPress("ArrowDown", true)}
                onTouchEnd={() => onControlPress("ArrowDown", false)}
              >
                <ArrowDown className="h-8 w-8" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 bg-white/10 border-white/20 text-white"
                onTouchStart={() => onControlPress("ArrowRight", true)}
                onTouchEnd={() => onControlPress("ArrowRight", false)}
              >
                <ArrowRight className="h-8 w-8" />
              </Button>
            </div>

            <div className="mt-4 flex justify-center">
              <Button
                variant="default"
                className="px-8 bg-gradient-to-r from-blue-500 to-purple-500"
                onTouchStart={() => onControlPress(" ", true)}
                onTouchEnd={() => onControlPress(" ", false)}
              >
                Interagir
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
