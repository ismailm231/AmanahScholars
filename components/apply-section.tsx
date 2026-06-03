import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Briefcase, Users, Heart, CheckCircle, ArrowRight } from "lucide-react"

const supportIncludes = [
  { icon: GraduationCap, text: "Scholarship funding" },
  { icon: BookOpen, text: "Tuition or educational expense assistance" },
  { icon: Briefcase, text: "Academic advising" },
  { icon: Users, text: "Career mentorship" },
  { icon: Heart, text: "Connections with professionals in your field" },
  { icon: CheckCircle, text: "Community service and leadership opportunities" },
]

const criteria = [
  "Financial need",
  "Academic commitment",
  "Clear educational or career goals",
  "Character and responsibility",
  "Community involvement",
  "Commitment to giving back",
]

export function ApplySection() {
  return (
    <section id="apply" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-emerald/10 rounded-full text-emerald text-sm font-medium mb-6">
              Apply for Funding
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-dark mb-6 text-balance">
              Apply for Student Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amanah Scholars Foundation provides financial assistance to students with demonstrated need who are pursuing higher education. Our goal is to help reduce financial stress so students can focus on their education, career goals, and service to the community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Who We Support */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-emerald-dark mb-4">Who We Support</h3>
                <p className="text-muted-foreground mb-6">
                  We prioritize students who demonstrate financial need, especially Muslim students and students from disadvantaged backgrounds. This may include:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span>Students with limited access to federal aid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span>Students from low-income families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span>First-generation students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span>Immigrant-background students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
                    <span>Students committed to serving their communities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What We Look For */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-emerald-dark mb-4">What We Look For</h3>
                <p className="text-muted-foreground mb-6">
                  Our selection process considers multiple factors to identify students who will benefit most from our support:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {criteria.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 bg-gold/10 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Includes */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-emerald-dark text-center mb-8">Support May Include</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportIncludes.map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-emerald" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-emerald/5 rounded-2xl border border-emerald/20">
            <h3 className="font-serif text-2xl font-bold text-emerald-dark mb-4">Ready to Apply?</h3>
            <p className="text-muted-foreground mb-6">
              Take the first step toward an interest-free path to higher education.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-emerald hover:bg-emerald-dark text-primary-foreground text-lg px-8"
            >
              <Link href="/contact">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Note: Funding availability may vary based on donations, fundraising, and available foundation resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
