"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import CustomCaptcha from '@/components/CustomCaptcha'
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Clock, TrendingUp, CheckCircle2, ChevronDown, Send, X } from 'lucide-react'
import BrandScroller from '@/components/brand-scroller'

// Simple canvas confetti implementation
const createConfetti = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const particles: Array<{
    x: number
    y: number
    vx: number
    vy: number
    color: string
    size: number
    gravity: number
    life: number
    maxLife: number
  }> = []

  const colors = ['#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE', '#EDE9FE']
  
  // Create particles
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.15,
      vx: (Math.random() - 0.5) * 30,
      vy: Math.random() * -30 - 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 2,
      gravity: Math.random() * 0.6 + 0.3,
      life: 0,
      maxLife: Math.random() * 180 + 120
    })
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach((particle, index) => {
      particle.life++
      
      if (particle.life > particle.maxLife) {
        particles.splice(index, 1)
        return
      }
      
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += particle.gravity
      
      const alpha = 1 - (particle.life / particle.maxLife)
      
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = particle.color
      
      // Draw as small rectangles for confetti effect
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.life * 0.1)
      ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size)
      ctx.restore()
      
      ctx.restore()
    })
    
    if (particles.length > 0) {
      requestAnimationFrame(animate)
    }
  }
  
  animate()
}

const Hero = () => {
  const router = useRouter()
  const { toast } = useToast()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [titleNumber, setTitleNumber] = useState(0)
  const [confettiActive, setConfettiActive] = useState(false)
  const [canTriggerConfetti, setCanTriggerConfetti] = useState(true)
  const [showScrollArrow, setShowScrollArrow] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [resetCaptcha, setResetCaptcha] = useState(false)
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  
  const titles = useMemo(() => [
    'Culinary Business', 
    'Catering Industry', 
    'Food Service'
  ], [])

  const handleContactSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isVerified) {
      toast({
        title: "Verification required",
        description: "Please complete the verification.",
        variant: "destructive"
      })
      return
    }
    
    try {
      // Handle form submission here
      console.log('Contact form submitted:', contactForm)
      
      toast({
        title: "Demo request submitted!",
        description: "We'll contact you within 24 hours to schedule your personalized demo.",
      })
      
      setIsContactOpen(false)
      setContactForm({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
      
      setIsVerified(false)
      setResetCaptcha(prev => !prev)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      })
    }
  }, [isVerified, contactForm, toast])

  const handleInputChange = useCallback((field: keyof typeof contactForm, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }))
  }, [])
  
  const handleConfettiClick = useCallback(() => {
    if (!canTriggerConfetti) return
    
    setConfettiActive(true)
    setCanTriggerConfetti(false)
    
    // Trigger canvas confetti
    const canvas = confettiCanvasRef.current
    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createConfetti(canvas)
    }
    
    // Reset confetti after animation
    setTimeout(() => {
      setConfettiActive(false)
    }, 3000)
    
    // Reset cooldown timer
    setTimeout(() => {
      setCanTriggerConfetti(true)
    }, 5000)
  }, [canTriggerConfetti])

  const scrollToServices = useCallback(() => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2500)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [titleNumber, titles.length])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === 'undefined' || !isInitialized) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 0.5,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.3 + 0.1
      })
    }

    let isActive = true
    function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      if (!isActive) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(var(--primary), ${particle.opacity})`
        ctx.fill()
      })

      if (isActive) {
        requestAnimationFrame(() => animate(canvas, ctx))
      }
    }

    animate(canvas, ctx)

    const handleResize = () => {
      if (!isActive) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }
    
    return () => {
      isActive = false
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isInitialized])

  useEffect(() => {
    setIsInitialized(true)
  }, [])

  const sellingPoints = [
    {
      icon: Users,
      title: "100% Tailored to Caterers",
      description: "Our websites and AI chatbots are exclusively designed for the catering niche.",
      highlight: "100%"
    },
    {
      icon: Clock,
      title: "24/7 Lead Capture Demos",
      description: "Our AI is always working—handling inquiries in live demonstrations.",
      highlight: "24/7"
    },
    {
      icon: TrendingUp,
      title: "♾️ Unlimited Potential Growth",
      description: "Stop missing leads after-hours. We build your pipeline, you book more events.",
      highlight: "♾️"
    }
  ]

  return (
    <div id="hero" ref={heroRef} data-section="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />
      
      {/* Canvas Confetti */}
      <canvas
        ref={confettiCanvasRef}
        className="absolute inset-0 pointer-events-none z-40"
        style={{ display: confettiActive ? 'block' : 'none' }}
      />
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-20">
            <Button
              onClick={handleConfettiClick}
              disabled={!canTriggerConfetti}
              className={`mt-6 mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-primary/5 text-primary border border-primary/30 hover:scale-105 transition-all duration-300 shadow-lg text-sm font-medium tracking-tight ${
                canTriggerConfetti ? 'opacity-100 cursor-pointer hover:bg-primary/10' : 'opacity-50 cursor-not-allowed'
              }`}
              variant="outline"
              size="sm"
            >
              <Sparkles className="h-4 w-4" />
              AI THUMBS - CATERING SPECIALISTS {confettiActive ? '🎉' : ''}
            </Button>

            <div className="relative z-10">
              <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                <span className="block mb-4">
                  <span className="gradient-text">AI-Powered Solutions</span>
                </span>
                <span className="block mb-4">
                  <span className="text-foreground">Built for the</span>{' '}
                  <span className="relative inline-block overflow-hidden h-[1.4em] align-top">
                    <span className="invisible whitespace-nowrap font-bold">Culinary Business</span>
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute top-0 left-0 font-bold text-primary whitespace-nowrap"
                        initial={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        animate={
                          titleNumber === index
                            ? { y: 0, opacity: 1 }
                            : { y: titleNumber > index ? "-100%" : "100%", opacity: 0 }
                        }
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Every minute spent chasing spreadsheets and phone calls is a booking lost. 
              <span className="font-semibold text-foreground"> Ai Thumbs' AI Concierge never sleeps, never forgets, and fills your calendar—24/7.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="group text-lg h-16 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25 button-shine">
                    Schedule Your Demo
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass-card border-2 border-primary max-h-[90vh] flex flex-col shadow-xl shadow-primary/25">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold gradient-text mb-2">
                      Schedule Your Demo
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      Get a personalized demo of our AI catering solutions
                    </p>
                  </DialogHeader>
                  <div className="overflow-y-auto flex-1 px-1">
                    <form onSubmit={handleContactSubmit} className="space-y-4 mt-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            required
                            value={contactForm.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company *</Label>
                          <Input
                            id="company"
                            required
                            value={contactForm.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your catering business"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@business.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Tell us about your needs *</Label>
                        <Textarea
                          id="message"
                          required
                          value={contactForm.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="What challenges are you facing with lead management, customer service, or operations?"
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="mt-6 mb-6">
                        <img
                          src="https://i.postimg.cc/52vMpD47/Video.gif"
                          alt="Demo preview animation"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto max-h-[160px] sm:max-h-[200px] md:max-h-[240px] object-contain rounded-lg border border-border/50 ring-1 ring-primary/10"
                        />
                      </div>
                      <div className="mt-4">
                        <CustomCaptcha 
                          onVerify={setIsVerified}
                          theme="dark"
                          reset={resetCaptcha}
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-full">
                        <Send className="h-4 w-4 mr-2" />
                        Schedule Demo
                      </Button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg h-16 px-10 rounded-full hover:scale-105 transition-all duration-300 glass-card border-2 hover:border-primary/50"
                onClick={() => router.push('/demo')}
              >
                View Live Examples
              </Button>
            </div>
          </div>

          {/* Key Selling Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 overflow-visible">
            {sellingPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/30 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(138,43,226,0.5)] z-10"
              >
                <div className="flex items-center justify-center mb-2">
                  <point.icon className="h-5 w-5 text-primary mr-2" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text">
                    {point.highlight}
                  </div>
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {point.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {point.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Brand Scroller Section */}
          <BrandScroller />

        </div>

        {/* Premium Idle-triggered Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ 
            opacity: showScrollArrow ? 1 : 0,
            y: showScrollArrow ? 0 : 30,
            scale: showScrollArrow ? 1 : 0.8
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50 group"
          onClick={scrollToServices}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: [0.45, 0.05, 0.55, 0.95],
              repeatType: "reverse"
            }}
            className="flex flex-col items-center text-cyan-400 transition-all duration-300 group-hover:text-sky-300 pointer-events-auto"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.8)) drop-shadow(0 4px 15px rgba(56, 189, 248, 0.6)) drop-shadow(0 0 40px rgba(34, 211, 238, 0.4))'
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="h-12 w-12 mb-3 transition-all duration-300 group-hover:h-14 group-hover:w-14" />
            </motion.div>
            <motion.div 
              className="text-xs font-bold tracking-widest uppercase opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:tracking-wider"
              animate={{
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              SCROLL
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero