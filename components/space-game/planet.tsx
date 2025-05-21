"use client"

interface PlanetProps {
  ctx: CanvasRenderingContext2D
  planet: {
    x: number
    y: number
    radius: number
    color: string
    name: string
    type: string
    moons: number
  }
  frameCount: number
}

// Helper functions for colors
export const lightenColor = (color: string, percent: number) => {
  const num = Number.parseInt(color.replace("#", ""), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = ((num >> 8) & 0x00ff) + amt
  const B = (num & 0x0000ff) + amt
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 0 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`
}

export const darkenColor = (color: string, percent: number) => {
  return lightenColor(color, -percent)
}

export function drawPlanet({ ctx, planet, frameCount }: PlanetProps) {
  // Draw planet glow
  const glowGradient = ctx.createRadialGradient(
    planet.x,
    planet.y,
    planet.radius * 0.5,
    planet.x,
    planet.y,
    planet.radius * 1.5,
  )
  glowGradient.addColorStop(0, planet.color)
  glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
  ctx.fillStyle = glowGradient
  ctx.beginPath()
  ctx.arc(planet.x, planet.y, planet.radius * 1.5, 0, Math.PI * 2)
  ctx.fill()

  // Draw planet
  const planetGradient = ctx.createRadialGradient(
    planet.x - planet.radius * 0.3,
    planet.y - planet.radius * 0.3,
    0,
    planet.x,
    planet.y,
    planet.radius,
  )
  planetGradient.addColorStop(0, lightenColor(planet.color, 30))
  planetGradient.addColorStop(1, darkenColor(planet.color, 30))
  ctx.fillStyle = planetGradient
  ctx.beginPath()
  ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2)
  ctx.fill()

  // Draw planet surface details
  ctx.save()
  ctx.translate(planet.x, planet.y)

  // Draw some random "continents" or features
  const featureCount = Math.floor(planet.radius / 10)
  for (let i = 0; i < featureCount; i++) {
    const featureX = (Math.random() - 0.5) * planet.radius * 1.5
    const featureY = (Math.random() - 0.5) * planet.radius * 1.5
    const featureRadius = Math.random() * planet.radius * 0.4 + planet.radius * 0.1

    // Only draw features that are within the planet
    const distFromCenter = Math.sqrt(featureX * featureX + featureY * featureY)
    if (distFromCenter < planet.radius * 0.8) {
      ctx.beginPath()
      ctx.arc(featureX, featureY, featureRadius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05})`
      ctx.fill()
    }
  }

  // Draw atmosphere highlight
  ctx.beginPath()
  ctx.arc(0, 0, planet.radius * 0.9, 0, Math.PI * 2)
  ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
  ctx.lineWidth = planet.radius * 0.1
  ctx.stroke()

  ctx.restore()

  // Draw moons if the planet has any
  if (planet.moons > 0) {
    for (let i = 0; i < planet.moons; i++) {
      const moonAngle = (frameCount * 0.01 + i * ((Math.PI * 2) / planet.moons)) % (Math.PI * 2)
      const moonDistance = planet.radius * 1.5
      const moonX = planet.x + Math.cos(moonAngle) * moonDistance
      const moonY = planet.y + Math.sin(moonAngle) * moonDistance
      const moonRadius = planet.radius * 0.2

      ctx.fillStyle = "#CCCCCC"
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2)
      ctx.fill()

      // Add some crater details to the moon
      ctx.save()
      ctx.translate(moonX, moonY)

      const craterCount = Math.floor(moonRadius / 2)
      for (let j = 0; j < craterCount; j++) {
        const craterX = (Math.random() - 0.5) * moonRadius * 1.5
        const craterY = (Math.random() - 0.5) * moonRadius * 1.5
        const craterRadius = Math.random() * 2 + 1

        // Only draw craters that are within the moon
        const distFromCenter = Math.sqrt(craterX * craterX + craterY * craterY)
        if (distFromCenter < moonRadius * 0.8) {
          ctx.beginPath()
          ctx.arc(craterX, craterY, craterRadius, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(100, 100, 100, 0.5)"
          ctx.fill()
        }
      }

      ctx.restore()
    }
  }

  // Draw planet name and type
  ctx.font = "16px Arial"
  ctx.fillStyle = "white"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText(`${planet.name} (${planet.type})`, planet.x, planet.y + planet.radius + 20)
}
