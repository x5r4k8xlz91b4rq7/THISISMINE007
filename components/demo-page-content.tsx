"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  MessageCircle, 
  Globe, 
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  Star,
  Phone,
  Mail,
  Sparkles,
  Calendar,
  CreditCard,
  Shield,
  Zap,
  Target,
  AlertCircle,
  X,
  Eye,
  DollarSign,
  ChevronDown,
  Palette
} from 'lucide-react'

const websitePackages = [
  {
    level: 'Level 1',
    name: 'Essential',
    price: '$1,499',
    features: ['Professional Menu Display', 'Contact Forms', 'Mobile Responsive', 'Basic SEO'],
    highlight: false
  },
  {
    level: 'Level 2', 
    name: 'Professional',
    price: '$2,499',
    features: ['Everything in Level 1', 'Photo Galleries', 'Online Inquiry Forms', 'Social Media Integration'],
    highlight: false
  },
  {
    level: 'Level 3',
    name: 'Advanced',
    price: '$3,499', 
    features: ['Everything in Level 2', 'Real-time Booking', 'Payment Processing', 'Customer Portal'],
    highlight: true
  },
  {
    level: 'Level 4',
    name: 'Enterprise',
    price: '$4,999',
    features: ['Everything in Level 3', 'Advanced Analytics', 'CRM Integration', 'Multi-location Support'],
    highlight: false
  }
]

const chatbotMessages = [
  { sender: 'user', text: 'Hi, I need catering for a wedding for 150 people' },
  { sender: 'bot', text: 'Congratulations on your upcoming wedding! I\'d be happy to help. What date are you planning for?' },
  { sender: 'user', text: 'June 15th, 2024. Do you handle dietary restrictions?' },
  { sender: 'bot', text: 'Yes! We specialize in all dietary needs - vegetarian, vegan, gluten-free, and more. I can connect you with our head chef to discuss a custom menu. Would you like to schedule a tasting?' }
]

const crmFeatures = [
  {
    icon: Users,
    title: 'Smart Customer Profiles',
    description: 'Automatically capture and organize customer data from every interaction'
  },
  {
    icon: TrendingUp,
    title: 'Conversion Analytics',
    description: 'Track lead sources, conversion rates, and identify your most profitable channels'
  },
  {
    icon: Calendar,
    title: 'Automated Follow-ups',
    description: 'Never miss a follow-up with AI-powered scheduling and reminder systems'
  },
  {
    icon: Target,
    title: 'Lead Scoring',
    description: 'AI prioritizes leads based on likelihood to convert and event value'
  },
  {
    icon: Palette,
    title: 'Brand Identity Management',
    description: 'Consistent branding across all customer touchpoints and marketing materials'
  }
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Elegant Events Catering',
    result: '+65% bookings',
    quote: 'The AI chatbot has revolutionized how we handle inquiries. We went from missing 40% of after-hours leads to capturing every single one.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Marcus Rodriguez', 
    company: 'Gourmet Catering Co.',
    result: '2x consultations',
    quote: 'Their Level 3 website package transformed our online presence. The real-time booking system eliminated back-and-forth emails.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Jennifer Chen',
    company: 'Premium Catering Services', 
    result: '+35% order value',
    quote: 'The analytics dashboard gives us incredible insights into customer preferences and seasonal trends.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
]

const faqs = [
  {
    question: 'Can this integrate with my existing website?',
    answer: 'Absolutely! Our AI chatbot can be integrated into any existing website with a simple code snippet. For website packages, we can work with your current hosting or provide new hosting solutions.'
  },
  {
    question: 'What if I don\'t have a menu finalized yet?',
    answer: 'No problem! We can help you develop your menu as part of the process. Our AI can suggest popular catering options based on your cuisine type and target market.'
  },
  {
    question: 'How quickly can I see results?',
    answer: 'Most clients see immediate improvements in lead capture within 24 hours of launch. Full optimization and significant booking increases typically occur within 2-4 weeks.'
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Yes! We provide comprehensive training for your team and offer ongoing support. Our AI systems also learn and improve over time with minimal maintenance required.'
  },
  {
    question: 'What happens to leads generated during off-hours?',
    answer: 'This is where we shine! Our AI chatbot captures and qualifies leads 24/7, sending you organized summaries and hot leads via email or SMS in real-time.'
  }
]

export default function DemoPageContent() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              LIVE INTERACTIVE DEMO
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Explore Ai Thumbs</span><br />
              in Action
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Interactive previews of our chatbots, websites, and CRM tools that are transforming catering businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="rounded-full px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  Request Personal Demo
                </Button>
              </Link>
              <a href="#chatbot-demo">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <Eye className="h-5 w-5 mr-2" />
                  View Live Example
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot Demo Section */}
      <section id="chatbot-demo" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Catering Chatbot Preview
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              See how our AI assistant handles real customer inquiries 24/7
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Live Chat Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 overflow-y-auto p-4 space-y-4">
                    {chatbotMessages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs p-3 rounded-lg ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="border-t p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      AI is typing...
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">What Our AI Chatbot Handles:</h3>
              <div className="space-y-4">
                {[
                  'Instant response to catering inquiries',
                  'Menu recommendations and customization',
                  'Dietary restriction consultations',
                  'Event size and pricing calculations',
                  'Availability checking and booking',
                  'Lead qualification and routing'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Result:</strong> Our clients typically see a 65% increase in conversion rates and never miss another lead.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tiered Website Packages Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tiered Website Packages
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              From simple menu displays to full-service booking platforms - choose what fits your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websitePackages.map((pkg, index) => (
              <motion.div
                key={pkg.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${pkg.highlight ? 'ring-2 ring-primary' : ''} glass-card hover:scale-105 transition-all duration-300`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={pkg.highlight ? "default" : "secondary"}>
                        {pkg.level}
                      </Badge>
                      {pkg.highlight && (
                        <Badge className="bg-primary/10 text-primary">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-full" variant={pkg.highlight ? "default" : "outline"}>
                      View Example
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Booking Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-Time Booking Integration
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Eliminate scheduling friction with instant booking that syncs with your calendar
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Booking Calendar Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="font-semibold text-muted-foreground p-2">{day}</div>
                      ))}
                      {Array.from({ length: 35 }, (_, i) => {
                        const date = i + 1 - 6
                        const isToday = date === 15
                        const isAvailable = date > 0 && date <= 30 && ![1, 7, 8, 14, 21, 22, 28, 29].includes(date)
                        return (
                          <div
                            key={i}
                            className={`p-2 text-sm rounded transition-colors ${
                              date <= 0 || date > 30 
                                ? 'text-muted-foreground/30' 
                                : isToday
                                ? 'bg-primary text-primary-foreground font-bold'
                                : isAvailable
                                ? 'hover:bg-primary/10 cursor-pointer'
                                : 'text-muted-foreground/50 line-through'
                            }`}
                          >
                            {date > 0 && date <= 30 ? date : ''}
                          </div>
                        )
                      })}
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Available Time Slots (Today):</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {['10:00 AM', '2:00 PM', '4:00 PM'].map(time => (
                          <Button key={time} variant="outline" size="sm" className="text-xs">
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Booking Integration Features:</h3>
              <div className="space-y-4">
                {[
                  'Real-time calendar synchronization',
                  'Automated confirmation emails',
                  'SMS reminder notifications',
                  'Service type selection (tasting, consultation, etc.)',
                  'Client information capture',
                  'Payment collection at booking',
                  'Cancellation and rescheduling options',
                  'Staff availability management'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Result:</strong> 75% reduction in administrative work and 300% faster booking process.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CRM & Analytics Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analytics & CRM Automation
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Automated lead nurturing and data-driven insights to maximize your catering business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crmFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card text-center p-6 hover:scale-105 transition-all duration-300">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">Average Result: 200% improvement in marketing ROI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Card & Branding Design Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Card & Branding Design
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Professional branding that creates memorable first impressions and builds trust
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Professional Brand Identity:</h3>
              <div className="space-y-4">
                {[
                  'Custom business card design',
                  'Logo design and refinement',
                  'Brand color palette selection',
                  'Typography and font selection',
                  'Marketing material templates',
                  'Social media brand kit',
                  'Print-ready file formats',
                  'Brand guidelines document'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Starting at $499:</strong> Complete branding package with unlimited revisions until perfect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader className="bg-primary/5 rounded-t-xl">
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Brand Design Examples
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3.5/2] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex flex-col justify-center items-center p-4 border border-primary/20">
                        <div className="text-xs font-bold text-primary mb-1">ELEGANT EVENTS</div>
                        <div className="text-xs text-muted-foreground">Premium Catering</div>
                        <div className="text-xs text-muted-foreground mt-2">(555) 123-4567</div>
                      </div>
                      <div className="aspect-[3.5/2] bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-lg flex flex-col justify-center items-center p-4 border border-green-500/20">
                        <div className="text-xs font-bold text-green-600 mb-1">GOURMET CO.</div>
                        <div className="text-xs text-muted-foreground">Fine Dining Catering</div>
                        <div className="text-xs text-muted-foreground mt-2">info@gourmet.co</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        Custom designs aligned with your catering style and target market
                      </p>
                      <div className="flex justify-center gap-4">
                        <Badge variant="outline">Logo Design</Badge>
                        <Badge variant="outline">Business Cards</Badge>
                        <Badge variant="outline">Brand Kit</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Before vs. After Ai Thumbs
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              See the transformation our AI solutions bring to catering businesses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card">
                <CardHeader className="bg-red-500/10 text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-red-600">
                    <X className="h-5 w-5" />
                    Traditional Catering Lead System
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    'Missed calls during busy kitchen hours',
                    'Emails buried in cluttered inboxes',
                    'No response to after-hours inquiries',
                    'Manual follow-up tracking',
                    'Lost leads due to slow response times',
                    'No automated booking confirmations',
                    'Pricing calculations done manually',
                    'Customer data scattered across systems',
                    'Inconsistent branding and materials'
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader className="bg-green-500/10 text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                    With Ai Thumbs Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    '24/7 AI chatbot handles all inquiries',
                    'Instant responses increase conversion rates',
                    'Automated lead capture and qualification',
                    'Smart follow-up sequences',
                    'Real-time booking with calendar sync',
                    'Automatic pricing calculations',
                    'Centralized customer database',
                    'Data-driven insights and reporting',
                    'Professional brand consistency'
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Real results from catering businesses that transformed with our AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Get answers to the most common questions about our AI solutions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-start gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">Q</span>
                      </div>
                      {faq.question}
                    </h3>
                    <div className="pl-8">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Your AI Assistant Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of successful caterers who have already revolutionized their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="rounded-full px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  Request a Demo
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Secure & GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Setup in 24 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}