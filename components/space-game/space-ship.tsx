"use client"

interface SpaceShipProps {
  ctx: CanvasRenderingContext2D
  spaceship: {
    x: number
    y: number
    width: number
    height: number
    rotation: number
    thrust: boolean
  }
}

export function drawSpaceship({ ctx, spaceship }: SpaceShipProps) {
  ctx.save()
  ctx.translate(spaceship.x, spaceship.y)
  ctx.rotate(spaceship.rotation)

  // Draw engine thrust if accelerating
  if (spaceship.thrust) {
    const thrustLength = Math.random() * 10 + 15

    // Outer flame
    ctx.beginPath()
    ctx.moveTo(-spaceship.width / 2, 0)
    ctx.lineTo(-spaceship.width / 2 - thrustLength, -thrustLength / 3)
    ctx.lineTo(-spaceship.width / 2 - thrustLength * 0.7, 0)
    ctx.lineTo(-spaceship.width / 2 - thrustLength, thrustLength / 3)
    ctx.closePath()

    const thrustGradient = ctx.createLinearGradient(-spaceship.width / 2, 0, -spaceship.width / 2 - thrustLength, 0)
    thrustGradient.addColorStop(0, "rgba(255, 100, 0, 0.9)")
    thrustGradient.addColorStop(0.6, "rgba(255, 200, 0, 0.5)")
    thrustGradient.addColorStop(1, "rgba(255, 255, 200, 0)")

    ctx.fillStyle = thrustGradient
    ctx.fill()

    // Inner flame
    ctx.beginPath()
    ctx.moveTo(-spaceship.width / 2, 0)
    ctx.lineTo(-spaceship.width / 2 - thrustLength * 0.7, -thrustLength / 5)
    ctx.lineTo(-spaceship.width / 2 - thrustLength * 0.5, 0)
    ctx.lineTo(-spaceship.width / 2 - thrustLength * 0.7, thrustLength / 5)
    ctx.closePath()

    const innerThrustGradient = ctx.createLinearGradient(
      -spaceship.width / 2,
      0,
      -spaceship.width / 2 - thrustLength * 0.7,
      0,
    )
    innerThrustGradient.addColorStop(0, "rgba(255, 255, 255, 0.9)")
    innerThrustGradient.addColorStop(0.6, "rgba(255, 255, 100, 0.5)")
    innerThrustGradient.addColorStop(1, "rgba(255, 255, 200, 0)")

    ctx.fillStyle = innerThrustGradient
    ctx.fill()
  }

  // Draw spaceship body
  ctx.beginPath()
  ctx.moveTo(spaceship.width / 2, 0) // Nose
  ctx.lineTo(-spaceship.width / 2, spaceship.height / 2) // Bottom corner
  ctx.lineTo(-spaceship.width / 3, 0) // Back indent
  ctx.lineTo(-spaceship.width / 2, -spaceship.height / 2) // Top corner
  ctx.closePath()

  // Create gradient for ship body
  const bodyGradient = ctx.createLinearGradient(-spaceship.width / 2, 0, spaceship.width / 2, 0)
  bodyGradient.addColorStop(0, "#304D6D")
  bodyGradient.addColorStop(0.7, "#7FB3D5")
  bodyGradient.addColorStop(1, "#D6EAF8")

  ctx.fillStyle = bodyGradient
  ctx.fill()

  ctx.strokeStyle = "#1A5276"
  ctx.lineWidth = 2
  ctx.stroke()

  // Draw cockpit
  ctx.beginPath()
  ctx.ellipse(spaceship.width / 6, 0, spaceship.width / 6, spaceship.height / 4, 0, 0, Math.PI * 2)

  const cockpitGradient = ctx.createRadialGradient(
    spaceship.width / 6,
    -spaceship.height / 10,
    0,
    spaceship.width / 6,
    0,
    spaceship.width / 4,
  )
  cockpitGradient.addColorStop(0, "#D6EAF8")
  cockpitGradient.addColorStop(0.7, "#5DADE2")
  cockpitGradient.addColorStop(1, "#2E86C1")

  ctx.fillStyle = cockpitGradient
  ctx.fill()

  // Draw wing details
  ctx.beginPath()
  ctx.moveTo(0, spaceship.height / 2)
  ctx.lineTo(-spaceship.width / 3, spaceship.height / 2)
  ctx.lineWidth = 3
  ctx.strokeStyle = "#E74C3C"
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, -spaceship.height / 2)
  ctx.lineTo(-spaceship.width / 3, -spaceship.height / 2)
  ctx.stroke()

  // Draw engine
  ctx.beginPath()
  ctx.rect(-spaceship.width / 2, -spaceship.height / 4, spaceship.width / 10, spaceship.height / 2)
  ctx.fillStyle = "#7F8C8D"
  ctx.fill()
  ctx.strokeStyle = "#2C3E50"
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.restore()

  // Draw shield/glow effect around ship
  const shieldRadius = Math.sqrt(spaceship.width * spaceship.width + spaceship.height * spaceship.height) / 1.5

  const shieldGradient = ctx.createRadialGradient(spaceship.x, spaceship.y, 0, spaceship.x, spaceship.y, shieldRadius)
  shieldGradient.addColorStop(0, "rgba(100, 200, 255, 0.1)")
  shieldGradient.addColorStop(0.7, "rgba(100, 200, 255, 0.05)")
  shieldGradient.addColorStop(1, "rgba(100, 200, 255, 0)")

  ctx.fillStyle = shieldGradient
  ctx.beginPath()
  ctx.arc(spaceship.x, spaceship.y, shieldRadius, 0, Math.PI * 2)
  ctx.fill()
}
