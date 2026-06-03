import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HandHeart, Users, Briefcase, Calendar, HeartHandshake, ArrowRight } from "lucide-react"

const involvementOptions = [
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Help with fundraising events, outreach, student support, application review, tutoring, marketing, operations, or community programming.",
    color: "emerald"
  },
  {
    icon: Users,
    title: "Become a Mentor",
    description: "Connect with scholarship recipients to help with academic planning, career advice, resumes, interviews, networking, and professional development.",
    color: "gold"
  },
  {
    icon: Briefcase,
    title: "Partner as a Business",
    description: "Local businesses can support students through sponsorships, fundraising nights, service partnerships, donation matching, or community events.",
    color: "emerald"
  },
  {
    icon: Calendar,
    title: "Support Fundraising Events",
    description: "We plan to host events such as car washes, community dinners, business-sponsored fundraisers, educational workshops, and donation campaigns.",
    color: "gold"
  },
]

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gold/20 rounded-full text-gold-dark text-sm font-medium mb-6">
              Get Involved
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-dark mb-6 text-balance">
              Help Build the Future of Student Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amanah Scholars Foundation depends on volunteers, donors, mentors, local businesses, and community members who believe in making education more accessible.
            </p>
          </div>

          {/* Involvement Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {involvementOptions.map((option) => (
              <Card key={option.title} className="bg-card border-border hover:border-gold/50 transition-all hover:shadow-lg group overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-2 ${option.color === 'emerald' ? 'bg-emerald' : 'bg-gold'}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${option.color === 'emerald' ? 'bg-emerald/10' : 'bg-gold/20'} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <option.icon className={`w-7 h-7 ${option.color === 'emerald' ? 'text-emerald' : 'text-gold-dark'}`} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-emerald-dark mb-2">{option.title}</h3>
                        <p className="text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donate Section */}
          <div className="relative overflow-hidden rounded-2xl bg-emerald p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-light/30 rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full text-primary-foreground text-sm font-medium mb-4">
                  <HeartHandshake className="w-4 h-4" />
                  Make a Difference
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Support Our Students with a Donation
                </h3>
                <p className="text-primary-foreground/90">
                  Your contribution helps fund scholarships, student advising, mentorship programs, and long-term interest-free educational support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-emerald-dark font-semibold text-lg px-8"
                >
                  <Link href="/contact">
                    Donate Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  <Link href="/contact">Volunteer or Partner</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
