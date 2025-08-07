'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award, 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Heart,
  CheckCircle,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology solutions'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Prioritizing the protection of your data and digital assets'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project we undertake'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared success'
    }
  ]

  const achievements = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Success Rate', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '4.9', label: 'Client Rating', icon: Star },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Leading Tech Solutions
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900">
                Transforming Businesses Through{' '}
                <span className="text-gradient">Innovation</span>
              </h2>
              
              <p className="text-xl text-secondary-600 leading-relaxed">
                At Tech Corp Asia, we are passionate about leveraging technology to solve complex business challenges. 
                Our team of experts combines deep technical knowledge with industry experience to deliver solutions 
                that drive real results.
              </p>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                From automation and cybersecurity to AI solutions and mobile development, we provide comprehensive 
                technology services that help businesses stay competitive in today's digital landscape.
              </p>

              {/* Key Features */}
              <div className="space-y-4">
                {[
                  'Expert team with 10+ years of experience',
                  'Proven track record of successful projects',
                  'Cutting-edge technology and methodologies',
                  '24/7 support and maintenance services',
                  'Custom solutions tailored to your needs',
                  'Comprehensive security and compliance'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 mb-2">{achievement.number}</div>
                  <div className="text-secondary-600 text-sm">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Company Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary-900">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                      <value.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-secondary-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-4">
            Meet Our <span className="text-gradient">Expert Team</span>
          </h3>
          <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto">
            Our diverse team of professionals brings together expertise in various technology domains 
            to deliver comprehensive solutions for your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CTO & Lead Architect',
                expertise: 'Cloud Infrastructure, AI/ML',
                image: '/team/sarah.jpg'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Security Specialist',
                expertise: 'Cybersecurity, Compliance',
                image: '/team/michael.jpg'
              },
              {
                name: 'Emily Watson',
                role: 'UX/UI Designer',
                expertise: 'User Experience, Mobile Design',
                image: '/team/emily.jpg'
              },
              {
                name: 'David Kim',
                role: 'DevOps Engineer',
                expertise: 'Automation, CI/CD',
                image: '/team/david.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-secondary-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-secondary-600">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 