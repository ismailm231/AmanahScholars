"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 rounded-full text-emerald text-sm font-medium">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              Now Accepting Applications
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-dark leading-tight text-balance">
              Building an Interest-Free Path to{" "}
              <span className="text-gold-dark">Higher Education</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Amanah Scholars Foundation supports Muslim students and students from disadvantaged backgrounds through financial assistance, mentorship, academic advising, and community-backed support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald hover:bg-emerald-dark text-primary-foreground text-lg px-8"
              >
                <Link href="/contact">
                  Apply for Funding
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-gold-dark hover:bg-gold/10 text-lg px-8"
              >
                <Link href="/get-involved">
                  Get Involved
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-serif font-bold text-emerald">
                  100%
                </p>
                <p className="text-sm text-muted-foreground">
                  Interest-Free
                </p>
              </div>

              <div>
                <p className="text-3xl font-serif font-bold text-emerald">
                  Community
                </p>
                <p className="text-sm text-muted-foreground">
                  Powered
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 border-4 border-gold/30 rounded-full scale-110 animate-pulse pointer-events-none" />

              <Image
                src="/logo.jpg"
                alt="Amanah Scholars Foundation"
                width={450}
                height={450}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}