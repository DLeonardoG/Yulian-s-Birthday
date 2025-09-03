import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import AnimatedText from "@/components/ui/AnimatedText"
import FloatingElements from "@/components/ui/FloatingElements"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.7)" },
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5",
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center gradient-birthday overflow-hidden"
    >
      <FloatingElements />

      <div className="hero-content text-center z-10 px-6 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text mb-6 text-balance">
          ¡Feliz Cumpleaños
          <br />
          <AnimatedText text="Yulian!" />
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
        >
          Hoy celebramos no solo un año más de vida, sino todos los momentos increíbles que hemos compartido juntos,
          hermano.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
