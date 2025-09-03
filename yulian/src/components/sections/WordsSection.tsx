"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import WordCard from "@/components/ui/WordCard"

const words = [
  {
    title: "Hermandad",
    content:
      "Más que un hermano, eres mi compañero de aventuras, mi cómplice en travesuras y mi apoyo incondicional en cada momento.",
  },
  {
    title: "Recuerdos",
    content:
      "Cada risa compartida, cada secreto guardado, cada momento vivido juntos se convierte en un tesoro que atesoramos para siempre.",
  },
  {
    title: "Gratitud",
    content:
      "Gracias por ser esa persona especial que ilumina cada día con tu presencia, tu humor y tu corazón tan generoso.",
  },
]

export default function WordsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = gsap.utils.toArray(".word-card")

    cards.forEach((card, index) => {
      gsap.fromTo(
        card as Element,
        { opacity: 0, y: 100, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        },
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">Palabras del Corazón</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {words.map((word, index) => (
            <WordCard key={index} title={word.title} content={word.content} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
