import { Eye, Target, Heart, BookOpen, Users, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: BookOpen,
    title: "Scholarships",
    description: "Need-based financial support for tuition and educational expenses."
  },
  {
    icon: Users,
    title: "Academic Advising",
    description: "Guidance on course selection, academic planning, and achieving educational goals."
  },
  {
    icon: Briefcase,
    title: "Career Mentorship",
    description: "Connect with professionals in your field for career advice and networking."
  },
  {
    icon: Heart,
    title: "Community Service",
    description: "Opportunities to give back and develop leadership skills through service."
  },
]

export function VisionSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Vision */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold-dark text-sm font-medium mb-6">
            <Eye className="w-4 h-4" />
            Our Vision
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-dark mb-6 text-balance">
            A Self-Sustaining System for Student Success
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By 2040, Amanah Scholars Foundation aims to build a self-sustaining, nationwide system that funds and supports Muslim students through ethical, interest-free models, serving over 10,000 students annually and becoming a leading alternative to traditional student debt systems.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 rounded-full text-emerald text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-dark mb-4">
              Comprehensive Student Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide need-based educational support to students who face financial barriers to higher education.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card border-border hover:border-gold/50 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                    <service.icon className="w-7 h-7 text-emerald" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-emerald-dark mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Model */}
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-emerald-dark mb-6">
              Our Interest-Free Model
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe education should not force students into interest-based debt. Donations and community contributions help fund student support directly. As we grow, we intend to responsibly manage funds through ethical, legally compliant, and Shariah-conscious methods so returns can be reinvested into future scholarships and student services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-medium">Shariah-Compliant</span>
              <span className="px-4 py-2 bg-gold/20 text-gold-dark rounded-full text-sm font-medium">Community-Funded</span>
              <span className="px-4 py-2 bg-emerald/10 text-emerald rounded-full text-sm font-medium">Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
