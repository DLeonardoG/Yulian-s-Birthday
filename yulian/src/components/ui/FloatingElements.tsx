"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = containerRef.current?.children
    if (!elements) return

    Array.from(elements).forEach((element, index) => {
      gsap.to(element, {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* Floating birthday elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">🎂</div>
      <div className="absolute top-40 right-20 text-4xl opacity-30">🎈</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-25">🎉</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-35">✨</div>
      <div className="absolute top-60 left-1/3 text-4xl opacity-20">🎁</div>
      <div className="absolute bottom-60 right-1/3 text-5xl opacity-30">🌟</div>
    </div>
  )
}
