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
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    {
      id: 'web-development',
      icon: Globe,
      title: 'Website Development',
      description: 'Create stunning, high-performance websites and web applications that drive engagement and conversions.',
      features: ['Custom Web Development', 'E-commerce Solutions', 'Progressive Web Apps', 'SEO Optimization'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and threat prevention strategies.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance Management'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android that deliver exceptional user experiences.',
      features: ['Native App Development', 'Cross-platform Solutions', 'App Store Optimization', 'Maintenance & Support'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 'ai-solutions',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence and machine learning to gain insights and automate complex tasks.',
      features: ['Custom AI Models', 'Data Analytics', 'Predictive Analytics', 'Chatbot Development'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'consultation',
      icon: Users,
      title: 'Tech Consultation',
      description: 'Get expert guidance on technology strategy, digital transformation, and IT infrastructure planning.',
      features: ['Technology Strategy', 'Digital Transformation', 'IT Infrastructure', 'Project Management'],
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ]

  const additionalServices = [
    { icon: BarChart3, title: 'Data Analytics', description: 'Transform raw data into actionable insights' },
    { icon: Code, title: 'API Development', description: 'Build robust and scalable APIs for your applications' },
    { icon: Database, title: 'Database Design', description: 'Optimize your data architecture for performance' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Migrate and manage your infrastructure in the cloud' },
    { icon: Lock, title: 'Compliance & Audit', description: 'Ensure regulatory compliance and security standards' },
    { icon: Search, title: 'SEO & Marketing', description: 'Improve your online visibility and reach' },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
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
              className={`${service.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.iconColor} text-white`} />
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-secondary-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="group flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Additional <span className="text-gradient">Solutions</span>
          </h3>
          <p className="text-lg text-secondary-600">
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
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">{service.title}</h4>
              <p className="text-sm text-secondary-600">{service.description}</p>
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
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our technology solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 