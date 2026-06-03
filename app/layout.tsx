import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Amanah Scholars Foundation",
    template: "%s | Amanah Scholars Foundation",
  },

  description:
    "Interest-free educational funding, mentorship, and academic support for Muslim students and students from disadvantaged backgrounds.",

  keywords: [
    "scholarships",
    "student funding",
    "interest free education",
    "Islamic scholarship",
    "Muslim students",
    "educational assistance",
    "higher education",
  ],

  authors: [{ name: "Amanah Scholars Foundation" }],

  metadataBase: new URL("https://www.amanahscholars.org"),

  openGraph: {
    title: "Amanah Scholars Foundation",
    description: "Building an interest-free path to higher education.",
    url: "https://www.amanahscholars.org",
    siteName: "Amanah Scholars Foundation",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Amanah Scholars Foundation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amanah Scholars Foundation",
    description: "Building an interest-free path to higher education.",
    images: ["/logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
