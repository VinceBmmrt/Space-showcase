// Function to check if two planets overlap
export const checkPlanetOverlap = (planet1: any, planet2: any) => {
  const dx = planet1.x - planet2.x
  const dy = planet1.y - planet2.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance < planet1.radius + planet2.radius + 50 // Add 50px buffer
}

// Function to generate non-overlapping planet positions
export const generatePlanetPositions = (planets: any[], width: number, height: number) => {
  const padding = 100 // Padding from screen edges

  // Reset all planet positions
  for (let i = 0; i < planets.length; i++) {
    let validPosition = false
    let attempts = 0
    const maxAttempts = 100

    while (!validPosition && attempts < maxAttempts) {
      // Generate random position
      planets[i].x = Math.random() * (width - padding * 2) + padding
      planets[i].y = Math.random() * (height - padding * 2) + padding

      // Check if this position overlaps with any previously placed planet
      validPosition = true
      for (let j = 0; j < i; j++) {
        if (checkPlanetOverlap(planets[i], planets[j])) {
          validPosition = false
          break
        }
      }

      attempts++
    }
  }

  return planets
}

// Function to check for planet interaction
export const checkPlanetInteraction = (spaceship: any, planets: any[]) => {
  return planets.find((planet) => {
    const dx = spaceship.x - planet.x
    const dy = spaceship.y - planet.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    return distance < planet.radius + 30 // Add some margin for interaction
  })
}
