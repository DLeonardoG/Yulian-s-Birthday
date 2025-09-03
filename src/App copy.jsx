import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/sections/HeroSection"
import WordsSection from "@/components/sections/WordsSection"
import PhotoGallery from "@/components/sections/PhotoGallery"
import FinalMessage from "@/components/sections/FinalMessage"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(".hero-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" })
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WordsSection />
      <PhotoGallery />
      <FinalMessage />
    </main>
  )
}