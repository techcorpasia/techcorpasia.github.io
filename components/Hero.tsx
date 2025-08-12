'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Shield, Zap, Globe, Smartphone, Brain } from 'lucide-react'

const Hero = () => {
  const features = [
    { icon: Zap, text: 'Automation Solutions', color: 'from-neon-yellow to-neon-orange' },
    { icon: Globe, text: 'Web Development', color: 'from-neon-blue to-electric-blue' },
    { icon: Shield, text: 'Cybersecurity', color: 'from-neon-green to-electric-green' },
    { icon: Smartphone, text: 'Mobile Apps', color: 'from-neon-purple to-electric-purple' },
    { icon: Brain, text: 'AI & ML', color: 'from-neon-pink to-electric-pink' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900"></div>
      <div className="absolute inset-0 tech-pattern"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="geometric-shape top-20 left-10 animate-float"></div>
        <div className="geometric-shape bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="geometric-shape top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-neon-pink/30 to-neon-purple/30 rounded-full blur-2xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-neon-blue/30 to-electric-blue/30 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-20 h-20 bg-gradient-to-r from-neon-green/30 to-electric-green/30 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium glow-neon"
          >
            <span className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse"></span>
            Leading Technology Solutions Provider
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-shadow-lg"
          >
            Transform Your Business
            <br />
            <span className="text-gradient-electric animate-gradient-shift">
              With Technology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            We specialize in automation, website development, cybersecurity, mobile applications, 
            AI solutions, and comprehensive tech consultation to drive your digital transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-purple hover:to-electric-pink text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-neon hover:shadow-neon-lg">
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className={`flex items-center space-x-3 bg-gradient-to-r ${feature.color} bg-opacity-20 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl text-white text-sm font-medium hover:scale-105 transition-all duration-300`}
              >
                <feature.icon className="w-5 h-5" />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Completed', color: 'from-neon-blue to-electric-blue' },
              { number: '50+', label: 'Happy Clients', color: 'from-neon-green to-electric-green' },
              { number: '24/7', label: 'Support Available', color: 'from-neon-purple to-electric-purple' },
              { number: '99%', label: 'Success Rate', color: 'from-neon-pink to-electric-pink' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-md">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 