"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useKeyboardControls } from "@/hooks/use-keyboard-controls"

interface GameCanvasProps {
  isActive: boolean
  level: number
  onCollectItem: (points: number) => void
  onLoseLife: () => void
  onGameOver: () => void
}

interface GameObject {
  x: number
  y: number
  width: number
  height: number
  type: "player" | "platform" | "coin" | "enemy" | "powerup" | "portal"
  velocityX: number
  velocityY: number
  isJumping?: boolean
  color?: string
  collected?: boolean
  portalTo?: string
  label?: string
}

export function GameCanvas({ isActive, level, onCollectItem, onLoseLife, onGameOver }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameObjectsRef = useRef<GameObject[]>([])
  const playerRef = useRef<GameObject>({
    x: 100,
    y: 300,
    width: 40,
    height: 40,
    type: "player",
    velocityX: 0,
    velocityY: 0,
    isJumping: false,
  })
  const requestIdRef = useRef<number>(0)
  const [gameInitialized, setGameInitialized] = useState(false)
  const [portalHover, setPortalHover] = useState<{ portal: GameObject; x: number; y: number } | null>(null)
  const router = useRouter()

  const { left, right, up, down, space } = useKeyboardControls()

  // Initialize game objects
  useEffect(() => {
    if (!isActive) return

    // Create platforms
    const platforms: GameObject[] = [
      { x: 0, y: 500, width: 800, height: 20, type: "platform", velocityX: 0, velocityY: 0, color: "#4CAF50" },
      { x: 200, y: 400, width: 200, height: 20, type: "platform", velocityX: 0, velocityY: 0, color: "#4CAF50" },
      { x: 500, y: 350, width: 200, height: 20, type: "platform", velocityX: 0, velocityY: 0, color: "#4CAF50" },
      { x: 100, y: 250, width: 150, height: 20, type: "platform", velocityX: 0, velocityY: 0, color: "#4CAF50" },
    ]

    // Create coins
    const coins: GameObject[] = []
    for (let i = 0; i < 10; i++) {
      coins.push({
        x: Math.random() * 700 + 50,
        y: Math.random() * 300 + 50,
        width: 20,
        height: 20,
        type: "coin",
        velocityX: 0,
        velocityY: 0,
        color: "#FFD700",
        collected: false,
      })
    }

    // Create enemies (more enemies in higher levels)
    const enemies: GameObject[] = []
    for (let i = 0; i < Math.min(level + 1, 5); i++) {
      enemies.push({
        x: Math.random() * 600 + 100,
        y: 460,
        width: 30,
        height: 30,
        type: "enemy",
        velocityX: (Math.random() > 0.5 ? 1 : -1) * (1 + level * 0.5),
        velocityY: 0,
        color: "#FF5252",
      })
    }

    // Create powerups (only in higher levels)
    const powerups: GameObject[] = []
    if (level > 1) {
      for (let i = 0; i < Math.min(level - 1, 3); i++) {
        powerups.push({
          x: Math.random() * 700 + 50,
          y: Math.random() * 200 + 50,
          width: 25,
          height: 25,
          type: "powerup",
          velocityX: 0,
          velocityY: 0,
          color: "#2196F3",
          collected: false,
        })
      }
    }

    // Create web portals
    const portals: GameObject[] = [
      {
        x: 50,
        y: 450,
        width: 50,
        height: 50,
        type: "portal",
        velocityX: 0,
        velocityY: 0,
        color: "#9C27B0",
        portalTo: "/about",
        label: "À propos",
      },
      {
        x: 700,
        y: 450,
        width: 50,
        height: 50,
        type: "portal",
        velocityX: 0,
        velocityY: 0,
        color: "#FF9800",
        portalTo: "/services",
        label: "Services",
      },
      {
        x: 400,
        y: 200,
        width: 50,
        height: 50,
        type: "portal",
        velocityX: 0,
        velocityY: 0,
        color: "#00BCD4",
        portalTo: "/contact",
        label: "Contact",
      },
    ]

    gameObjectsRef.current = [...platforms, ...coins, ...enemies, ...powerups, ...portals]

    // Reset player position
    playerRef.current = {
      x: 100,
      y: 300,
      width: 40,
      height: 40,
      type: "player",
      velocityX: 0,
      velocityY: 0,
      isJumping: false,
    }

    setGameInitialized(true)

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }
    }
  }, [isActive, level])

  // Game loop
  useEffect(() => {
    if (!isActive || !canvasRef.current || !gameInitialized) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const gravity = 0.5
    const friction = 0.8
    const jumpForce = -12
    const moveSpeed = 5

    const update = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update player
      const player = playerRef.current

      // Handle keyboard input
      if (left) {
        player.velocityX = -moveSpeed
      } else if (right) {
        player.velocityX = moveSpeed
      } else {
        player.velocityX *= friction
      }

      if ((up || space) && !player.isJumping) {
        player.velocityY = jumpForce
        player.isJumping = true
      }

      // Apply gravity
      player.velocityY += gravity

      // Update position
      player.x += player.velocityX
      player.y += player.velocityY

      // Boundary checks
      if (player.x < 0) player.x = 0
      if (player.x + player.width > canvas.width) player.x = canvas.width - player.width

      // Check if player fell off the bottom
      if (player.y > canvas.height) {
        onLoseLife()
        player.x = 100
        player.y = 300
        player.velocityX = 0
        player.velocityY = 0
      }

      // Update game objects
      const gameObjects = gameObjectsRef.current
      let coinsCollected = false
      let hoveredPortal = null

      for (let i = 0; i < gameObjects.length; i++) {
        const obj = gameObjects[i]

        // Move enemies
        if (obj.type === "enemy") {
          obj.x += obj.velocityX

          // Reverse direction at edges
          if (obj.x <= 0 || obj.x + obj.width >= canvas.width) {
            obj.velocityX *= -1
          }
        }

        // Check collisions with player
        if (checkCollision(player, obj)) {
          if (obj.type === "platform") {
            // Land on platform
            if (player.y + player.height <= obj.y + 10 && player.velocityY > 0) {
              player.y = obj.y - player.height
              player.velocityY = 0
              player.isJumping = false
            }
          } else if (obj.type === "coin" && !obj.collected) {
            // Collect coin
            obj.collected = true
            coinsCollected = true
            onCollectItem(10)
          } else if (obj.type === "powerup" && !obj.collected) {
            // Collect powerup
            obj.collected = true
            coinsCollected = true
            onCollectItem(50)
          } else if (obj.type === "enemy") {
            // Hit by enemy
            onLoseLife()
            player.x = 100
            player.y = 300
            player.velocityX = 0
            player.velocityY = 0
          } else if (obj.type === "portal" && obj.portalTo) {
            // Hover over portal
            hoveredPortal = {
              portal: obj,
              x: obj.x + obj.width / 2,
              y: obj.y - 20,
            }

            // Enter portal on down key
            if (down) {
              // Navigate to the portal destination
              router.push(obj.portalTo)
            }
          }
        }
      }

      // Update portal hover state
      setPortalHover(hoveredPortal)

      // Draw everything
      drawGame(ctx, player, gameObjects, hoveredPortal)

      // Continue animation loop
      requestIdRef.current = requestAnimationFrame(update)
    }

    update()

    return () => {
      cancelAnimationFrame(requestIdRef.current)
    }
  }, [isActive, gameInitialized, left, right, up, down, space, onCollectItem, onLoseLife, router])

  // Check collision between two objects
  const checkCollision = (obj1: GameObject, obj2: GameObject) => {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    )
  }

  // Draw game elements
  const drawGame = (
    ctx: CanvasRenderingContext2D,
    player: GameObject,
    objects: GameObject[],
    hoveredPortal: { portal: GameObject; x: number; y: number } | null,
  ) => {
    // Draw background
    ctx.fillStyle = "#1E1E2F"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // Draw grid lines for visual effect
    ctx.strokeStyle = "#2A2A40"
    ctx.lineWidth = 1

    // Vertical lines
    for (let x = 0; x < ctx.canvas.width; x += 50) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, ctx.canvas.height)
      ctx.stroke()
    }

    // Horizontal lines
    for (let y = 0; y < ctx.canvas.height; y += 50) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(ctx.canvas.width, y)
      ctx.stroke()
    }

    // Draw game objects
    objects.forEach((obj) => {
      if ((obj.type === "coin" || obj.type === "powerup") && obj.collected) return

      ctx.fillStyle = obj.color || "#FFFFFF"

      if (obj.type === "platform") {
        // Draw platform with a slight 3D effect
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
        ctx.fillStyle = "#388E3C"
        ctx.fillRect(obj.x, obj.y, obj.width, 5)
      } else if (obj.type === "coin") {
        // Draw coin as a circle
        ctx.beginPath()
        ctx.arc(obj.x + obj.width / 2, obj.y + obj.height / 2, obj.width / 2, 0, Math.PI * 2)
        ctx.fill()

        // Add shine effect
        ctx.fillStyle = "#FFFFFF"
        ctx.beginPath()
        ctx.arc(obj.x + obj.width / 3, obj.y + obj.height / 3, obj.width / 6, 0, Math.PI * 2)
        ctx.fill()
      } else if (obj.type === "enemy") {
        // Draw enemy
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height)

        // Draw eyes
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(obj.x + 5, obj.y + 8, 5, 5)
        ctx.fillRect(obj.x + obj.width - 10, obj.y + 8, 5, 5)

        // Draw mouth
        ctx.fillStyle = "#000000"
        ctx.fillRect(obj.x + 8, obj.y + 20, obj.width - 16, 3)
      } else if (obj.type === "powerup") {
        // Draw powerup as a star
        ctx.beginPath()
        const centerX = obj.x + obj.width / 2
        const centerY = obj.y + obj.height / 2
        const spikes = 5
        const outerRadius = obj.width / 2
        const innerRadius = obj.width / 4

        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius
          const angle = (Math.PI * i) / spikes - Math.PI / 2
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.closePath()
        ctx.fill()
      } else if (obj.type === "portal") {
        // Draw portal as a glowing circle
        const isHovered = hoveredPortal && hoveredPortal.portal === obj

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          obj.x + obj.width / 2,
          obj.y + obj.height / 2,
          obj.width / 4,
          obj.x + obj.width / 2,
          obj.y + obj.height / 2,
          obj.width,
        )
        gradient.addColorStop(0, obj.color || "#FFFFFF")
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(obj.x + obj.width / 2, obj.y + obj.height / 2, obj.width / 2 + (isHovered ? 10 : 5), 0, Math.PI * 2)
        ctx.fill()

        // Draw portal
        ctx.fillStyle = isHovered ? "#FFFFFF" : obj.color || "#FFFFFF"
        ctx.beginPath()
        ctx.arc(obj.x + obj.width / 2, obj.y + obj.height / 2, obj.width / 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw swirl inside portal
        ctx.strokeStyle = "#1E1E2F"
        ctx.lineWidth = 2
        ctx.beginPath()
        const time = Date.now() / 1000
        for (let i = 0; i < 3; i++) {
          const radius = (obj.width / 3) * (i / 3)
          const startAngle = (time * (i + 1)) % (Math.PI * 2)
          ctx.arc(obj.x + obj.width / 2, obj.y + obj.height / 2, radius, startAngle, startAngle + Math.PI)
        }
        ctx.stroke()
      } else {
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height)
      }
    })

    // Draw player
    ctx.fillStyle = "#FF9800"
    ctx.fillRect(player.x, player.y, player.width, player.height)

    // Draw player face
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(player.x + 8, player.y + 10, 8, 8)
    ctx.fillRect(player.x + player.width - 16, player.y + 10, 8, 8)

    // Draw mouth
    ctx.fillStyle = "#000000"
    ctx.fillRect(player.x + 12, player.y + 25, 16, 3)

    // Draw portal tooltip if hovering
    if (hoveredPortal) {
      const { portal, x, y } = hoveredPortal
      const label = portal.label || "Portal"

      // Measure text width
      ctx.font = "14px Arial"
      const textWidth = ctx.measureText(label).width

      // Draw tooltip background
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
      ctx.fillRect(x - textWidth / 2 - 10, y - 25, textWidth + 20, 30)

      // Draw tooltip text
      ctx.fillStyle = "#FFFFFF"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(label, x, y - 10)

      // Draw instruction
      ctx.font = "12px Arial"
      ctx.fillText("Appuyez sur BAS pour entrer", x, y + 10)
    }
  }

  return <canvas ref={canvasRef} width={800} height={600} className="max-w-full max-h-full object-contain mx-auto" />
}
