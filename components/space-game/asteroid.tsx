"use client"

interface AsteroidProps {
  ctx: CanvasRenderingContext2D
  asteroid: {
    x: number
    y: number
    radius: number
    rotation: number
    points: { x: number; y: number }[]
  }
}

export function drawAsteroid({ ctx, asteroid }: AsteroidProps) {
  ctx.save()
  ctx.translate(asteroid.x, asteroid.y)
  ctx.rotate(asteroid.rotation)

  ctx.beginPath()
  ctx.moveTo(asteroid.points[0].x, asteroid.points[0].y)
  for (let i = 1; i < asteroid.points.length; i++) {
    ctx.lineTo(asteroid.points[i].x, asteroid.points[i].y)
  }
  ctx.closePath()

  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, asteroid.radius)
  gradient.addColorStop(0, "#8B8B8B")
  gradient.addColorStop(1, "#4A4A4A")
  ctx.fillStyle = gradient
  ctx.fill()

  ctx.strokeStyle = "#333333"
  ctx.lineWidth = 1
  ctx.stroke()

  // Add some crater details
  const craterCount = Math.floor(asteroid.radius / 5)
  for (let i = 0; i < craterCount; i++) {
    const craterX = (Math.random() - 0.5) * asteroid.radius * 1.2
    const craterY = (Math.random() - 0.5) * asteroid.radius * 1.2
    const craterRadius = Math.random() * 3 + 1

    // Only draw craters that are within the asteroid
    const distFromCenter = Math.sqrt(craterX * craterX + craterY * craterY)
    if (distFromCenter < asteroid.radius * 0.8) {
      ctx.beginPath()
      ctx.arc(craterX, craterY, craterRadius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.fill()
    }
  }

  ctx.restore()
}
