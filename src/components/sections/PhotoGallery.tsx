"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import PhotoCard from "@/components/ui/PhotoCard"

const photos = [
  {
    src: "/hermanos-felices-jugando-en-el-parque.jpg",
    alt: "Jugando en el parque",
    caption: "Nuestras aventuras en el parque",
  },
  {
    src: "/hermanos-celebrando-cumplea-os-anterior.jpg",
    alt: "Cumpleaños anterior",
    caption: "Tu cumpleaños del año pasado",
  },
  {
    src: "/hermanos-en-vacaciones-familiares.jpg",
    alt: "Vacaciones familiares",
    caption: "Vacaciones inolvidables",
  },
  {
    src: "/hermanos-graduaci-n-escuela.jpg",
    alt: "Graduación",
    caption: "El día de tu graduación",
  },
  {
    src: "/hermanos-navidad-regalos.jpg",
    alt: "Navidad",
    caption: "Navidades mágicas juntos",
  },
  {
    src: "/hermanos-sonriendo-selfie.jpg",
    alt: "Selfie hermanos",
    caption: "Momentos espontáneos",
  },
]

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const photos = gsap.utils.toArray(".photo-card")

    photos.forEach((photo, index) => {
      gsap.fromTo(
        photo as Element,
        { opacity: 0, scale: 0.8, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: photo as Element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">Momentos Especiales</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {photos.map((photo, index) => (
            <PhotoCard key={index} src={photo.src} alt={photo.alt} caption={photo.caption} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
