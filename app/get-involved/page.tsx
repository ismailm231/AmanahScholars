import { Header } from "@/components/header"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Footer } from "@/components/footer"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  )
}
