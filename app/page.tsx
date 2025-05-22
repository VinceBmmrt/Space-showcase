"use client";

import { drawAsteroid } from "@/components/space-game/asteroid";
import { drawBackground } from "@/components/space-game/background";
import { GameControls } from "@/components/space-game/game-controls";
import { drawPlanet } from "@/components/space-game/planet";
import { drawSpaceship } from "@/components/space-game/space-ship";
import { useMobile } from "@/hooks/use-mobile";
import {
  checkPlanetInteraction,
  generatePlanetPositions,
} from "@/lib/space-game-utils";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const isMobile = useMobile();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [played, setPlayed] = useState(false);

  // Spaceship state
  const spaceshipRef = useRef({
    x: 0,
    y: 0,
    width: 50,
    height: 30,
    speed: 5,
    rotation: 0, // in radians
    thrust: false,
    thrustPower: 0.2,
    velocityX: 0,
    velocityY: 0,
    friction: 0.98,
    maxSpeed: 8,
  });

  // Planets state (projects)
  const planetsRef = useRef([
    {
      id: "travel",
      x: 0,
      y: 0,
      radius: 70,
      color: "#FF6B6B",
      name: "Voyage",
      type: "App",
      path: "/travel",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
    {
      id: "hotel",
      x: 0,
      y: 0,
      radius: 60,
      color: "#4ECDC4",
      name: "Hôtel",
      type: "Project",
      path: "/hotel",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
    {
      id: "ecommerce",
      x: 0,
      y: 0,
      radius: 80,
      color: "#FFD166",
      name: "E-commerce",
      type: "App",
      path: "/ecommerce",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
    {
      id: "dashboard",
      x: 0,
      y: 0,
      radius: 65,
      color: "#6A0572",
      name: "Dashboard",
      type: "Project",
      path: "/dashboard",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
    {
      id: "blog",
      x: 0,
      y: 0,
      radius: 55,
      color: "#F25F5C",
      name: "Blog",
      type: "App",
      path: "/blog",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
    {
      id: "portfolio",
      x: 0,
      y: 0,
      radius: 75,
      color: "#50B2C0",
      name: "Portfolio",
      type: "Project",
      path: "/portfolio",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
    {
      id: "social",
      x: 0,
      y: 0,
      radius: 60,
      color: "#A846A0",
      name: "Réseau Social",
      type: "App",
      path: "/social",
      velocityX: (Math.random() - 0.5) * 0.2,
      velocityY: (Math.random() - 0.5) * 0.2,
      moons: Math.floor(Math.random() * 3),
    },
  ]);

  // Asteroids state
  const asteroidsRef = useRef<
    {
      x: number;
      y: number;
      radius: number;
      rotation: number;
      rotationSpeed: number;
      velocityX: number;
      velocityY: number;
      vertices: number;
      roughness: number;
      points: { x: number; y: number }[];
    }[]
  >([]);

  // Stars state
  const starsRef = useRef<
    {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      twinkleSpeed: number;
    }[]
  >([]);

  // Tooltip state
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  // Key state
  const [keys, setKeys] = useState({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    " ": false, // Space
  });

  useEffect(() => {
    // Center the ship
    spaceshipRef.current.x =
      window.innerWidth / 2 - spaceshipRef.current.width / 2;
    spaceshipRef.current.y =
      window.innerHeight / 2 - spaceshipRef.current.height / 2;
    // Manage Sound
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
    //Autoplay
    const playAudio = () => {
      if (!played && audioRef.current) {
        audioRef.current.play();
        setPlayed(true);
      }
    };

    window.addEventListener("keydown", playAudio);
    window.addEventListener("click", playAudio);
  }, []);

  // Handle key events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (Object.keys(keys).includes(e.key)) {
        setKeys((prev) => ({ ...prev, [e.key]: true }));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (Object.keys(keys).includes(e.key)) {
        setKeys((prev) => ({ ...prev, [e.key]: false }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keys]);

  // Initialize stars, asteroids, and planet positions
  useEffect(() => {
    // Initialize stars
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }
    starsRef.current = stars;

    // Initialize asteroids
    const asteroids = [];
    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 20 + 10;
      const vertices = Math.floor(Math.random() * 4) + 5;
      const roughness = Math.random() * 0.4 + 0.2;

      // Generate asteroid shape
      const points = [];
      for (let j = 0; j < vertices; j++) {
        const angle = (j / vertices) * Math.PI * 2;
        const distance =
          radius * (1 - roughness + Math.random() * roughness * 2);
        points.push({
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      }

      asteroids.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        velocityX: (Math.random() - 0.5) * 1,
        velocityY: (Math.random() - 0.5) * 1,
        vertices,
        roughness,
        points,
      });
    }
    asteroidsRef.current = asteroids;

    // Generate non-overlapping planet positions
    planetsRef.current = generatePlanetPositions(
      planetsRef.current,
      window.innerWidth,
      window.innerHeight
    );
  }, []);

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        // Regenerate planet positions
        planetsRef.current = generatePlanetPositions(
          planetsRef.current,
          window.innerWidth,
          window.innerHeight
        );

        // Recalculate stars positions
        starsRef.current = starsRef.current.map((star) => ({
          ...star,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Game loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;
    const spaceship = spaceshipRef.current;
    const planets = planetsRef.current;
    const asteroids = asteroidsRef.current;
    const stars = starsRef.current;

    const animate = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update spaceship position and rotation
      if (keys.ArrowLeft) {
        spaceship.rotation -= 0.1;
      }
      if (keys.ArrowRight) {
        spaceship.rotation += 0.1;
      }

      // Apply thrust
      spaceship.thrust = keys.ArrowUp;
      if (spaceship.thrust) {
        spaceship.velocityX +=
          Math.cos(spaceship.rotation) * spaceship.thrustPower;
        spaceship.velocityY +=
          Math.sin(spaceship.rotation) * spaceship.thrustPower;

        // Limit max speed
        const speed = Math.sqrt(
          spaceship.velocityX * spaceship.velocityX +
            spaceship.velocityY * spaceship.velocityY
        );
        if (speed > spaceship.maxSpeed) {
          const ratio = spaceship.maxSpeed / speed;
          spaceship.velocityX *= ratio;
          spaceship.velocityY *= ratio;
        }
      }

      // Apply friction
      spaceship.velocityX *= spaceship.friction;
      spaceship.velocityY *= spaceship.friction;

      // Update position
      spaceship.x += spaceship.velocityX;
      spaceship.y += spaceship.velocityY;

      // Wrap around screen edges
      if (spaceship.x < -spaceship.width) spaceship.x = canvas.width;
      if (spaceship.x > canvas.width) spaceship.x = -spaceship.width;
      if (spaceship.y < -spaceship.height) spaceship.y = canvas.height;
      if (spaceship.y > canvas.height) spaceship.y = -spaceship.height;

      // Update planets with slight movement
      planets.forEach((planet) => {
        // Update position with very slow drift
        planet.x += planet.velocityX;
        planet.y += planet.velocityY;

        // Bounce off edges
        if (
          planet.x - planet.radius < 0 ||
          planet.x + planet.radius > canvas.width
        ) {
          planet.velocityX *= -1;
        }
        if (
          planet.y - planet.radius < 0 ||
          planet.y + planet.radius > canvas.height
        ) {
          planet.velocityY *= -1;
        }
      });

      // Update asteroids
      asteroids.forEach((asteroid) => {
        asteroid.x += asteroid.velocityX;
        asteroid.y += asteroid.velocityY;
        asteroid.rotation += asteroid.rotationSpeed;

        // Wrap around screen edges
        if (asteroid.x < -asteroid.radius)
          asteroid.x = canvas.width + asteroid.radius;
        if (asteroid.x > canvas.width + asteroid.radius)
          asteroid.x = -asteroid.radius;
        if (asteroid.y < -asteroid.radius)
          asteroid.y = canvas.height + asteroid.radius;
        if (asteroid.y > canvas.height + asteroid.radius)
          asteroid.y = -asteroid.radius;
      });

      // Draw background
      drawBackground({
        ctx,
        width: canvas.width,
        height: canvas.height,
        stars,
        frameCount,
      });

      // Draw asteroids
      asteroids.forEach((asteroid) => {
        drawAsteroid({ ctx, asteroid });
      });

      // Draw planets
      planets.forEach((planet) => {
        drawPlanet({ ctx, planet, frameCount });
      });

      // Draw spaceship
      drawSpaceship({ ctx, spaceship });

      // Check for planet interaction
      const interactingPlanet = checkPlanetInteraction(spaceship, planets);

      if (interactingPlanet) {
        setTooltip({
          text: `${interactingPlanet.name} (${interactingPlanet.type}) - Espace pour visiter`,
          x: interactingPlanet.x,
          y: interactingPlanet.y - interactingPlanet.radius - 20,
        });

        if (keys[" "]) {
          router.push(interactingPlanet.path);
        }
      } else {
        setTooltip(null);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [keys, router]);

  // Mobile controls handler
  const handleMobileControl = (
    direction: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | " ",
    isPressed: boolean
  ) => {
    setKeys((prev) => ({ ...prev, [direction]: isPressed }));
  };

  return (
    <main className="relative w-screen h-screen overflow-auto">
      <canvas ref={canvasRef} className="w-full h-full" />

      {tooltip && (
        <div
          className="absolute bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg text-white"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltip.text}
        </div>
      )}

      {isMobile && <GameControls onControlPress={handleMobileControl} />}

      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-sm">
        <p>
          Utilisez les flèches pour piloter le vaisseau et Espace pour visiter
          une planète
        </p>
        <audio
          ref={audioRef}
          src="/music/space-ambient.mp3"
          autoPlay
          loop
          controls
          muted={false}
        />
      </div>
    </main>
  );
}
