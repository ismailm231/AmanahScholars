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
  title: 'Amanah Scholars Foundation | Interest-Free Path to Higher Education',
  description: 'Amanah Scholars Foundation supports Muslim students and students from disadvantaged backgrounds through financial assistance, mentorship, academic advising, and community-backed support.',
  keywords: ['scholarships', 'Muslim students', 'financial aid', 'interest-free', 'education', 'mentorship', 'non-profit'],
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
