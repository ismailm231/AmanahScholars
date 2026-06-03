import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/contact?reason=applying", label: "Apply for Funding" },
    { href: "/contact?reason=volunteering", label: "Volunteer" },
    { href: "/contact?reason=mentorship", label: "Become a Mentor" },
    { href: "/contact?reason=business", label: "Partner With Us" },
    { href: "/contact?reason=donation", label: "Donate" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-emerald-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.jpg"
                alt="Amanah Scholars Foundation"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-serif text-xl font-bold text-primary-foreground leading-tight">Amanah Scholars</p>
                <p className="text-xs text-gold-light tracking-widest uppercase">Foundation</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Building an interest-free path to higher education for Muslim students and students from disadvantaged backgrounds through financial assistance, mentorship, and community support.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Amanah Scholars Foundation. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              <Link href="https://amanahscholars.org" className="hover:text-gold-light transition-colors">
                amanahscholars.org
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
