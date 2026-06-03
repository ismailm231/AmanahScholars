import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  )
}
