import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import ParticleEffect from "@/components/ui/ParticleEffect"

export default function FinalMessage() {
  const sectionRef = useRef<HTMLElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    })

    tl.fromTo(
      messageRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" },
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center gradient-birthday overflow-hidden"
    >
      <ParticleEffect />

      <div ref={messageRef} className="text-center z-10 px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-8 text-balance">Que este nuevo año</h2>

        <div className="blur-card p-8 md:p-12 rounded-3xl glow-effect mb-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed text-pretty mb-6">
            Te traiga infinitas alegrías, nuevas aventuras por descubrir, sueños que se hagan realidad y momentos
            mágicos que recordaremos para siempre.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty">
            Eres una persona extraordinaria, Yulian, y mereces todo lo mejor que la vida tiene para ofrecer.
            <span className="gradient-text font-semibold"> ¡Feliz cumpleaños, hermano!</span>
          </p>
        </div>

        <Button size="lg" className="text-lg px-8 py-4 glow-effect hover:scale-105 transition-transform duration-300">
          🎉 ¡Celebremos Juntos! 🎂
        </Button>
      </div>
    </section>
  )
}
