"use client"

import { useRef, useState } from "react"
import Image from "next/image"


interface PhotoCardProps {
  src: string
  alt: string
  caption: string
  index: number
}

export default function PhotoCard({ src, alt, caption, index }: PhotoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (cardRef.current) {
      cardRef.current.style.transform = "scale(1.05) rotateZ(2deg)"
      cardRef.current.style.zIndex = "10"
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (cardRef.current) {
      cardRef.current.style.transform = "scale(1) rotateZ(0deg)"
      cardRef.current.style.zIndex = "1"
    }
  }

  return (
    <div
      ref={cardRef}
      className="photo-card relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        gridRow: index % 3 === 1 ? "span 2" : "span 1",
      }}
    >
      <div className="relative aspect-square">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <p className="font-semibold text-sm text-pretty">{caption}</p>
        </div>
      </div>
    </div>
  )
}