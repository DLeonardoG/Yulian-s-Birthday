"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function ParticleEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create floating particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute w-2 h-2 bg-primary/30 rounded-full"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      container.appendChild(particle)

      gsap.to(particle, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        scale: "random(0.5, 1.5)",
        opacity: "random(0.3, 0.8)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      })
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
