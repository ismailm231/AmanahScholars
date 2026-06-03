import { Shield, Heart, Scale, Sparkles, HandHeart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Shield,
    title: "Amanah",
    arabic: "أمانة",
    description: "We steward funds with trust and accountability."
  },
  {
    icon: Sparkles,
    title: "Taqwa",
    arabic: "تقوى",
    description: "We act with sincerity and ethical responsibility."
  },
  {
    icon: Scale,
    title: "Equity",
    arabic: "عدل",
    description: "We distribute opportunities fairly."
  },
  {
    icon: Heart,
    title: "Compassion",
    arabic: "رحمة",
    description: "We support students with dignity and respect."
  },
  {
    icon: HandHeart,
    title: "Service",
    arabic: "خدمة",
    description: "We encourage giving back."
  },
  {
    icon: Users,
    title: "Ummah",
    arabic: "أمة",
    description: "We invest in students who will uplift their communities."
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-emerald/10 rounded-full text-emerald text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-dark mb-6 text-balance">
              About Amanah Scholars Foundation
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="leading-relaxed">
              Amanah Scholars Foundation was created to reduce financial barriers for students pursuing higher education, with a particular focus on Muslim students and students from disadvantaged backgrounds.
            </p>
            <p className="leading-relaxed">
              Many students face challenges accessing traditional financial aid, including limited family support, immigration-related barriers, lack of federal aid eligibility, or the burden of interest-based loans. Our goal is to ensure that students can pursue higher education without the pressure of compromising their religious values by engaging in interest-based financial systems, by providing support that is financially responsible, faith-conscious, and rooted in community care.
            </p>
            <p className="leading-relaxed">
              We believe that when a community invests in its students, those students can become leaders who give back and strengthen the next generation.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mt-12 p-8 bg-emerald/5 rounded-2xl border border-emerald/20">
            <h3 className="font-serif text-2xl font-bold text-emerald-dark mb-4 text-center">Our Mission</h3>
            <p className="text-center text-muted-foreground text-lg">
              To provide financial assistance and educational support to students with demonstrated financial need, while promoting educational attainment, leadership, and service.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-emerald-dark text-center mb-10">
            Our Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border hover:border-gold/50 transition-all hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors">
                      <value.icon className="w-6 h-6 text-gold-dark" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif text-lg font-semibold text-emerald-dark">{value.title}</h4>
                        <span className="text-gold text-sm">{value.arabic}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
