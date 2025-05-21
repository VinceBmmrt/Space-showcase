"use client"

interface BackgroundProps {
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }[]
  frameCount: number
}

export function drawBackground({ ctx, width, height, stars, frameCount }: BackgroundProps) {
  // Draw background
  ctx.fillStyle = "#070B34"
  ctx.fillRect(0, 0, width, height)

  // Draw stars with twinkling effect
  stars.forEach((star) => {
    const twinkle = Math.sin(frameCount * star.twinkleSpeed) * 0.3 + 0.7
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
    ctx.fill()
  })

  // Draw distant nebulae
  drawNebula(ctx, width * 0.2, height * 0.3, 200, "rgba(255, 100, 255, 0.05)")
  drawNebula(ctx, width * 0.7, height * 0.6, 300, "rgba(100, 100, 255, 0.05)")
  drawNebula(ctx, width * 0.5, height * 0.2, 250, "rgba(100, 255, 255, 0.05)")
}

export function drawNebula(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
  for (let i = 0; i < 5; i++) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * (1 - i * 0.15))
    gradient.addColorStop(0, color)
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(x, y, radius * (1 - i * 0.15), 0, Math.PI * 2)
    ctx.fill()
  }
}
