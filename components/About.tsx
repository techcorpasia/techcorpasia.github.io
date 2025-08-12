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
      description: 'Constantly pushing boundaries with cutting-edge technology solutions',
      color: 'from-neon-blue to-electric-blue'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Prioritizing the protection of your data and digital assets',
      color: 'from-neon-green to-electric-green'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project we undertake',
      color: 'from-neon-pink to-electric-pink'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared success',
      color: 'from-neon-purple to-electric-purple'
    }
  ]

  const achievements = [
    { number: '10+', label: 'Years Experience', icon: Award, color: 'from-neon-blue to-electric-blue' },
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle, color: 'from-neon-green to-electric-green' },
    { number: '50+', label: 'Happy Clients', icon: Users, color: 'from-neon-purple to-electric-purple' },
    { number: '99%', label: 'Success Rate', icon: TrendingUp, color: 'from-neon-pink to-electric-pink' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-neon-yellow to-neon-orange' },
    { number: '4.9', label: 'Client Rating', icon: Star, color: 'from-neon-blue to-neon-purple' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary-800 via-secondary-900 to-secondary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-blue/20 to-electric-blue/20 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white">
                <Zap className="w-4 h-4 mr-2 text-neon-blue" />
                Leading Tech Solutions
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Transforming Businesses Through{' '}
                <span className="text-gradient-electric">Innovation</span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed">
                At Tech Corp Asia, we are passionate about leveraging technology to solve complex business challenges. 
                Our team of experts combines deep technical knowledge with industry experience to deliver solutions 
                that drive real results.
              </p>
              
              <p className="text-lg text-white/70 leading-relaxed">
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
                    <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
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
                  className="glass-card p-6 text-center group hover:shadow-glass-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>{achievement.number}</div>
                  <div className="text-white/70 text-sm">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Company Values */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="glass-card p-4 hover:shadow-glass-lg transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${value.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-white/70">{value.description}</p>
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
          <h3 className="text-3xl font-bold text-white mb-4">
            Meet Our <span className="text-gradient-electric">Expert Team</span>
          </h3>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Our diverse team of professionals brings together expertise in various technology domains 
            to deliver comprehensive solutions for your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CTO & Lead Architect',
                expertise: 'Cloud Infrastructure, AI/ML',
                color: 'from-neon-blue to-electric-blue'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Security Specialist',
                expertise: 'Cybersecurity, Compliance',
                color: 'from-neon-green to-electric-green'
              },
              {
                name: 'Emily Watson',
                role: 'UX/UI Designer',
                expertise: 'User Experience, Mobile Design',
                color: 'from-neon-pink to-electric-pink'
              },
              {
                name: 'David Kim',
                role: 'DevOps Engineer',
                expertise: 'Automation, CI/CD',
                color: 'from-neon-purple to-electric-purple'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-neon`}>
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-neon-blue font-medium mb-2">{member.role}</p>
                <p className="text-sm text-white/70">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 