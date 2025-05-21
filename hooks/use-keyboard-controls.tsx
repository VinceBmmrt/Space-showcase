"use client"

import { useState, useEffect } from "react"

export function useKeyboardControls() {
  const [keys, setKeys] = useState({
    left: false,
    right: false,
    up: false,
    down: false,
    space: false,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        setKeys((prev) => ({ ...prev, left: true }))
      }
      if (e.key === "ArrowRight" || e.key === "d") {
        setKeys((prev) => ({ ...prev, right: true }))
      }
      if (e.key === "ArrowUp" || e.key === "w") {
        setKeys((prev) => ({ ...prev, up: true }))
      }
      if (e.key === "ArrowDown" || e.key === "s") {
        setKeys((prev) => ({ ...prev, down: true }))
      }
      if (e.key === " ") {
        setKeys((prev) => ({ ...prev, space: true }))
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        setKeys((prev) => ({ ...prev, left: false }))
      }
      if (e.key === "ArrowRight" || e.key === "d") {
        setKeys((prev) => ({ ...prev, right: false }))
      }
      if (e.key === "ArrowUp" || e.key === "w") {
        setKeys((prev) => ({ ...prev, up: false }))
      }
      if (e.key === "ArrowDown" || e.key === "s") {
        setKeys((prev) => ({ ...prev, down: false }))
      }
      if (e.key === " ") {
        setKeys((prev) => ({ ...prev, space: false }))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return keys
}
