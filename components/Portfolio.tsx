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
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
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
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
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
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
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
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
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
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
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
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      link: '#',
      github: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI Solutions', 'Cybersecurity', 'Automation']

  return (
    <section id="portfolio" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${project.bgColor} text-secondary-700`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{project.title}</h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-secondary-600 hover:text-secondary-700 font-medium text-sm transition-colors duration-200">
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
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Success <span className="text-gradient">Stories</span>
            </h3>
            <p className="text-xl text-secondary-600">
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
                results: ['300% increase in transaction capacity', '99.9% uptime achieved', '50% reduction in operational costs']
              },
              {
                client: 'HealthCare Plus',
                industry: 'Healthcare',
                challenge: 'Required secure patient data management with HIPAA compliance',
                solution: 'Built encrypted patient portal with role-based access control and audit trails',
                results: ['100% HIPAA compliance', 'Improved patient satisfaction by 85%', 'Reduced data entry errors by 90%']
              },
              {
                client: 'Retail Solutions',
                industry: 'E-commerce',
                challenge: 'Wanted to implement AI-powered inventory optimization',
                solution: 'Developed ML algorithms for demand forecasting and automated reordering',
                results: ['25% reduction in inventory costs', 'Improved stock availability by 95%', 'Increased sales by 30%']
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.client}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">{caseStudy.client}</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {caseStudy.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-secondary-900 mb-2">Challenge</h5>
                    <p className="text-sm text-secondary-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-secondary-900 mb-2">Solution</h5>
                    <p className="text-sm text-secondary-600">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-secondary-900 mb-2">Results</h5>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-secondary-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
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
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your vision to life with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                View More Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 