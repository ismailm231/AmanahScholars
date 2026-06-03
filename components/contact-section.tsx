"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Send, CheckCircle } from "lucide-react"

const contactReasons = [
  { value: "applying", label: "Applying for funding" },
  { value: "volunteering", label: "Volunteering" },
  { value: "mentorship", label: "Mentorship" },
  { value: "business", label: "Business partnership" },
  { value: "donation", label: "Donation question" },
  { value: "general", label: "General question" },
]

export function ContactSection() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [selectedReason, setSelectedReason] = useState<string>("")

  useEffect(() => {
    const reason = searchParams.get("reason")
    if (reason && contactReasons.some((r) => r.value === reason)) {
      setSelectedReason(reason)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitted(false)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          reason: selectedReason,
          message: formData.get("message"),
        }),
      })

      const data = await response.json()

      console.log("Contact response:", {
        ok: response.ok,
        status: response.status,
        data,
      })

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to send message.")
      }

      form.reset()
      setSelectedReason("")
      setError("")
      setSubmitted(true)
    } catch (error) {
      console.error("Contact form frontend error:", error)
      setSubmitted(false)
      setError("Something went wrong while sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald/10 rounded-full text-emerald text-sm font-medium mb-6">
              Contact Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-dark mb-6 text-balance">
              Contact Amanah Scholars Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question, want to apply, become a volunteer, donate, mentor a student, or partner with us? We would love to hear from you.
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-emerald-dark mb-4">
                    Thank You!
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    Your message has been received. We&apos;ll get back to you as soon as possible.
                  </p>

                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setError("")
                    }}
                    variant="outline"
                    className="border-emerald text-emerald hover:bg-emerald/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="bg-background border-input focus:border-emerald"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-background border-input focus:border-emerald"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="bg-background border-input focus:border-emerald"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason" className="text-foreground">
                        Reason for Contact <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        required
                        value={selectedReason}
                        onValueChange={setSelectedReason}
                      >
                        <SelectTrigger className="bg-background border-input focus:border-emerald">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons.map((reason) => (
                            <SelectItem key={reason.value} value={reason.value}>
                              {reason.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      required
                      rows={5}
                      className="bg-background border-input focus:border-emerald resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-emerald hover:bg-emerald-dark text-primary-foreground text-lg"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Or reach out to us directly:
            </p>
            <a
              href="mailto:info@amanahscholars.org"
              className="inline-flex items-center gap-2 text-emerald hover:text-emerald-dark transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              info@amanahscholars.org
            </a>
          </div>

          <div className="mt-16 text-center">
            <p className="font-serif text-xl text-emerald-dark italic">
              Together, we can build a community-powered, interest-free path to higher education.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}