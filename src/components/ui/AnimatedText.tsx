"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const letters = text
        .split("")
        .map((letter, index) => `<span class="inline-block" style="animation-delay: ${index * 0.1}s">${letter}</span>`)
        .join("")

      textRef.current.innerHTML = letters

      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.05,
          delay: 1,
        },
      )
    }
  }, [text])

  return (
    <span ref={textRef} className={`inline-block ${className}`}>
      {text}
    </span>
  )
}
