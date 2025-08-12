'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'Business Automation', href: '#automation' },
      { name: 'Website Development', href: '#web-development' },
      { name: 'Cybersecurity', href: '#cybersecurity' },
      { name: 'Mobile Development', href: '#mobile-development' },
      { name: 'AI Solutions', href: '#ai-solutions' },
      { name: 'Tech Consultation', href: '#consultation' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Press', href: '#press' },
      { name: 'Partners', href: '#partners' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Support Center', href: '#support' },
      { name: 'Community', href: '#community' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Whitepapers', href: '#whitepapers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' },
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'bg-gradient-to-r from-neon-blue to-electric-blue' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'bg-gradient-to-r from-neon-purple to-electric-purple' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'bg-gradient-to-r from-neon-blue to-electric-blue' },
    { name: 'GitHub', icon: Github, href: '#', color: 'bg-gradient-to-r from-secondary-700 to-secondary-800' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'bg-gradient-to-r from-neon-pink to-electric-pink' },
  ]

  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-secondary-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img 
                  src="/assets/logo-only.png" 
                  alt="Tech Corp Asia Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-lg opacity-30"></div>
              </div>
              <span className="text-xl font-bold text-gradient-electric">Tech Corp Asia</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in automation, cybersecurity, 
              AI solutions, and digital transformation. We help businesses innovate and grow 
              with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4 text-neon-blue" />
                <span>info@techcorpasia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4 text-neon-green" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-4 h-4 text-neon-purple" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-neon-blue transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-neon-blue transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-neon-blue transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-neon-blue transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest technology insights, industry updates, 
              and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-purple hover:to-electric-pink text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-neon">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Tech Corp Asia. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-neon`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white/60 hover:text-neon-blue transition-all duration-300 group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 