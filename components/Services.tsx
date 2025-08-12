'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Zap, 
  Globe, 
  Shield, 
  Smartphone, 
  Brain, 
  Users, 
  BarChart3, 
  Code, 
  Database, 
  Cloud, 
  Lock, 
  Search,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      id: 'automation',
      icon: Zap,
      title: 'Business Automation',
      description: 'Streamline your operations with intelligent automation solutions that reduce manual work and increase efficiency.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services'],
      color: 'from-neon-yellow to-neon-orange',
      bgColor: 'bg-gradient-to-br from-neon-yellow/10 to-neon-orange/10',
      iconColor: 'text-neon-yellow'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Website Development',
      description: 'Create stunning, high-performance websites and web applications that drive engagement and conversions.',
      features: ['Custom Web Development', 'E-commerce Solutions', 'Progressive Web Apps', 'SEO Optimization'],
      color: 'from-neon-blue to-electric-blue',
      bgColor: 'bg-gradient-to-br from-neon-blue/10 to-electric-blue/10',
      iconColor: 'text-neon-blue'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and threat prevention strategies.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance Management'],
      color: 'from-neon-green to-electric-green',
      bgColor: 'bg-gradient-to-br from-neon-green/10 to-electric-green/10',
      iconColor: 'text-neon-green'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['Native App Development', 'Cross-platform Solutions', 'App Store Optimization', 'Maintenance & Support'],
      color: 'from-neon-purple to-electric-purple',
      bgColor: 'bg-gradient-to-br from-neon-purple/10 to-electric-purple/10',
      iconColor: 'text-neon-purple'
    },
    {
      id: 'ai-solutions',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to gain insights and automate complex tasks.',
      features: ['Custom AI Models', 'Data Analytics', 'Predictive Analytics', 'Chatbot Development'],
      color: 'from-neon-pink to-electric-pink',
      bgColor: 'bg-gradient-to-br from-neon-pink/10 to-electric-pink/10',
      iconColor: 'text-neon-pink'
    },
    {
      id: 'consultation',
      icon: Users,
      title: 'Tech Consultation',
      description: 'Get expert guidance on technology strategy, digital transformation, and IT infrastructure planning.',
      features: ['Technology Strategy', 'Digital Transformation', 'IT Infrastructure', 'Project Management'],
      color: 'from-neon-blue to-neon-purple',
      bgColor: 'bg-gradient-to-br from-neon-blue/10 to-neon-purple/10',
      iconColor: 'text-neon-blue'
    }
  ]

  const additionalServices = [
    { icon: BarChart3, title: 'Data Analytics', description: 'Transform raw data into actionable insights', color: 'from-neon-green to-electric-green' },
    { icon: Code, title: 'API Development', description: 'Build robust and scalable APIs for your applications', color: 'from-neon-blue to-electric-blue' },
    { icon: Database, title: 'Database Design', description: 'Optimize your data architecture for performance', color: 'from-neon-purple to-electric-purple' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Migrate and manage your infrastructure in the cloud', color: 'from-neon-pink to-electric-pink' },
    { icon: Lock, title: 'Compliance & Audit', description: 'Ensure regulatory compliance and security standards', color: 'from-neon-yellow to-neon-orange' },
    { icon: Search, title: 'SEO & Marketing', description: 'Improve your online visibility and reach', color: 'from-neon-blue to-neon-purple' },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient-electric">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward and stay ahead of the competition.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${service.bgColor} backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neon`}>
                <service.icon className={`w-8 h-8 text-white`} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/80">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="group flex items-center text-white font-semibold hover:text-neon-blue transition-colors duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Additional <span className="text-gradient-electric">Solutions</span>
          </h3>
          <p className="text-lg text-white/80">
            Specialized services to complement your technology needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="glass-card p-6 text-center hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-sm text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-electric-blue hover:bg-white/90 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-neon">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-electric-blue font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 