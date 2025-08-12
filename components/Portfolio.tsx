'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Zap, 
  Shield,
  Brain,
  Users
} from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with advanced features including AI-powered recommendations, automated inventory management, and secure payment processing.',
      image: '/portfolio/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      icon: Globe,
      color: 'from-neon-blue to-electric-blue',
      bgColor: 'bg-gradient-to-br from-neon-blue/10 to-electric-blue/10',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and advanced security features for financial institutions.',
      image: '/portfolio/banking.jpg',
      technologies: ['React Native', 'Firebase', 'Biometric Auth', 'Encryption'],
      icon: Smartphone,
      color: 'from-neon-purple to-electric-purple',
      bgColor: 'bg-gradient-to-br from-neon-purple/10 to-electric-purple/10',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      category: 'AI Solutions',
      description: 'Intelligent analytics platform that processes large datasets to provide actionable business insights and predictive analytics.',
      image: '/portfolio/analytics.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      icon: Brain,
      color: 'from-neon-pink to-electric-pink',
      bgColor: 'bg-gradient-to-br from-neon-pink/10 to-electric-pink/10',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Cybersecurity Management System',
      category: 'Cybersecurity',
      description: 'Comprehensive security management platform with real-time threat detection, automated incident response, and compliance monitoring.',
      image: '/portfolio/security.jpg',
      technologies: ['Python', 'Elasticsearch', 'Kubernetes', 'SIEM', 'ML'],
      icon: Shield,
      color: 'from-neon-green to-electric-green',
      bgColor: 'bg-gradient-to-br from-neon-green/10 to-electric-green/10',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Business Process Automation',
      category: 'Automation',
      description: 'End-to-end automation solution that streamlines business processes, reduces manual work, and increases operational efficiency.',
      image: '/portfolio/automation.jpg',
      technologies: ['RPA', 'Python', 'APIs', 'Workflow Engine', 'Monitoring'],
      icon: Zap,
      color: 'from-neon-yellow to-neon-orange',
      bgColor: 'bg-gradient-to-br from-neon-yellow/10 to-neon-orange/10',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Collaborative Project Management',
      category: 'Web Development',
      description: 'Team collaboration platform with real-time communication, project tracking, and resource management capabilities.',
      image: '/portfolio/collaboration.jpg',
      technologies: ['Vue.js', 'Socket.io', 'Redis', 'PostgreSQL', 'Docker'],
      icon: Users,
      color: 'from-neon-blue to-neon-purple',
      bgColor: 'bg-gradient-to-br from-neon-blue/10 to-neon-purple/10',
      link: '#',
      github: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI Solutions', 'Cybersecurity', 'Automation']

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient-electric">Portfolio</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects that demonstrate our expertise 
            across various technology domains and industries.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary-800 to-secondary-700 flex items-center justify-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-neon`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${project.bgColor} backdrop-blur-md border border-white/10 text-white`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-neon-blue hover:text-electric-blue font-medium text-sm transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-white/70 hover:text-white font-medium text-sm transition-colors duration-300">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Success <span className="text-gradient-electric">Stories</span>
            </h3>
            <p className="text-xl text-white/80">
              Real results from our client partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                client: 'TechStart Inc.',
                industry: 'Fintech',
                challenge: 'Needed to scale their payment processing system to handle 10x more transactions',
                solution: 'Implemented microservices architecture with automated scaling and real-time monitoring',
                results: ['300% increase in transaction capacity', '99.9% uptime achieved', '50% reduction in operational costs'],
                color: 'from-neon-blue to-electric-blue'
              },
              {
                client: 'HealthCare Plus',
                industry: 'Healthcare',
                challenge: 'Required secure patient data management with HIPAA compliance',
                solution: 'Built encrypted patient portal with role-based access control and audit trails',
                results: ['100% HIPAA compliance', 'Improved patient satisfaction by 85%', 'Reduced data entry errors by 90%'],
                color: 'from-neon-green to-electric-green'
              },
              {
                client: 'Retail Solutions',
                industry: 'E-commerce',
                challenge: 'Wanted to implement AI-powered inventory optimization',
                solution: 'Developed ML algorithms for demand forecasting and automated reordering',
                results: ['25% reduction in inventory costs', 'Improved stock availability by 95%', 'Increased sales by 30%'],
                color: 'from-neon-pink to-electric-pink'
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.client}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2">{caseStudy.client}</h4>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${caseStudy.color} bg-opacity-20 backdrop-blur-md border border-white/10 text-white`}>
                    {caseStudy.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Challenge</h5>
                    <p className="text-sm text-white/70">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2">Solution</h5>
                    <p className="text-sm text-white/70">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2">Results</h5>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-white/70 flex items-center">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${caseStudy.color} rounded-full mr-2`}></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-electric-blue via-electric-purple to-electric-pink rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can bring your vision to life with cutting-edge technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-electric-blue hover:bg-white/90 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-neon">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-electric-blue font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  View More Work
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 