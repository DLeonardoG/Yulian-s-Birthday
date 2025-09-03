"use client"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WordCardProps {
  title: string
  content: string
  index: number
}

export default function WordCard({ title, content, index }: WordCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "translateY(-10px) rotateX(5deg)"
      cardRef.current.style.boxShadow = "0 20px 40px rgba(217, 119, 6, 0.2)"
    }
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "translateY(0) rotateX(0)"
      cardRef.current.style.boxShadow = "0 10px 20px rgba(217, 119, 6, 0.1)"
    }
  }

  return (
    <Card
      ref={cardRef}
      className="word-card blur-card border-primary/20 transition-all duration-300 cursor-pointer h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardHeader>
        <CardTitle className="text-2xl gradient-text text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-center text-pretty">{content}</p>
      </CardContent>
    </Card>
  )
}
