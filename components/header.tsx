"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Amanah Scholars Foundation"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-bold text-emerald leading-tight">Amanah Scholars</p>
              <p className="text-xs text-gold-dark tracking-widest uppercase">Foundation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-emerald transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Only 2 buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild
              className="bg-emerald hover:bg-emerald-dark text-primary-foreground"
            >
              <Link href="/contact">Apply for Funding</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-gold text-gold-dark hover:bg-gold/10"
            >
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-emerald" />
            ) : (
              <Menu className="h-6 w-6 text-emerald" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-emerald transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button 
                  asChild
                  className="bg-emerald hover:bg-emerald-dark text-primary-foreground w-full"
                >
                  <Link href="/contact">Apply for Funding</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-gold text-gold-dark hover:bg-gold/10 w-full"
                >
                  <Link href="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
