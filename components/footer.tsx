'use client'

import { Brain, Facebook, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (targetPath: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // If clicking on the same page, scroll to top
    if (targetPath === pathname) {
      e.preventDefault()
      
      // Check motion preferences
      const prefersReducedMotion = typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Scroll to top
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        })
      }
    }
  }

  const quickLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact Support', href: '/support' }
  ]

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-y-0 lg:gap-x-12">
          {/* Brand Panel */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/h43PsyhN/Untitled-design-14.png" 
                alt="Ai Thumbs" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">Ai Thumbs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through advanced AI solutions and expert consulting.
            </p>
            <div className="relative mt-4 inline-block">
              <div className="relative group">
                <img
                  src="https://i.postimg.cc/13kvWzXb/Untitled-design-24.png"
                  alt="Trusted & Secure AI Solutions — GDPR, SSL, Payment Security"
                  className="w-24 sm:w-28 lg:w-32 rounded-xl shadow-md opacity-90 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300"
                  draggable="false"
                />
                
                {/* Hover Tooltip */}
                <div className="absolute bottom-full left-0 mb-3 px-4 py-2 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap text-sm font-medium z-50 pointer-events-none min-w-max">
                  Trusted & Secure AI Solutions
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Sections Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 items-start">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2" aria-label="Footer quick links">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        onClick={(e) => handleNavClick(link.href, e)}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="text-sm">Phone: (519) 774-6314</li>
                  <li className="text-sm">Email: snapauctions1@gmail.com</li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-lg lg:text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    aria-label="Follow us on Facebook"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Follow us on Instagram"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="w-full">
                <h3 className="text-lg lg:text-xl font-semibold mb-4">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated on upcoming AI features and exclusive demos.
                </p>
                <div className="flex w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-sm bg-background border border-input rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Subscribe to newsletter"
                  >
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ai Thumbs Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer