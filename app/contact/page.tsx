import { Suspense } from "react"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
