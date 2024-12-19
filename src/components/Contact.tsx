import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FaGithub, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'
import { useRef, useMemo } from 'react'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
    springConfig
  )

  const contactLinks = useMemo(() => [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Salahalioui',
      color: 'hover:text-[#6e5494]',
      description: 'Check out my code repositories and contributions',
      gradient: 'from-[#6e5494] to-[#4c3a66]'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/salahallioui',
      color: 'hover:text-[#E4405F]',
      description: 'Follow my journey and daily updates',
      gradient: 'from-[#E4405F] to-[#fd8d32]'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/SALAH.ALIOUI32/',
      color: 'hover:text-[#1877F2]',
      description: 'Connect with me on Facebook',
      gradient: 'from-[#1877F2] to-[#0a4da3]'
    },
    {
      name: 'Email',
      icon: HiMail,
      url: 'mailto:salahallioui01@gmail.com',
      color: 'hover:text-[#EA4335]',
      description: 'Drop me a line anytime',
      gradient: 'from-[#EA4335] to-[#c5221f]'
    },
  ], [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gradient-to-b from-tertiary/5 to-primary/5 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={pulseAnimation}
          className="absolute w-96 h-96 bg-secondary/10 rounded-full -top-48 -left-48 blur-3xl"
        />
        <motion.div 
          animate={pulseAnimation}
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full -bottom-48 -right-48 blur-3xl"
        />
      </div>

      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="section-title inline-block relative group">
              Let's Connect
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
            </h2>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 text-lightText"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaMapMarkerAlt className="text-secondary" />
              </motion.div>
              <span>Based in Algeria</span>
            </motion.div>
            <p className="text-lightestText max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about sports science and technology.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-tertiary/30 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-xl`} />
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-all duration-300"
                    >
                      <link.icon className={`w-8 h-8 ${link.color} transition-all duration-300 group-hover:scale-110`} />
                    </motion.div>
                    <motion.div
                      initial={{ x: 10, opacity: 0 }}
                      whileHover={{ rotate: 360 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BiLinkExternal className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500">
                      {link.name}
                    </h3>
                    <p className="text-lightestText mt-2 group-hover:text-lightText transition-colors duration-300">
                      {link.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="text-center bg-tertiary/20 p-8 rounded-2xl backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
          >
            <motion.h3 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500 mb-4"
            >
              Ready to Collaborate?
            </motion.h3>
            <p className="text-lightestText mb-6 leading-relaxed">
              Whether you're looking for a developer, have a project in mind, 
              or want to discuss the intersection of sports and technology, 
              I'd love to hear from you!
            </p>
            <motion.a
              href="mailto:salahallioui01@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <HiMail className="w-5 h-5" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
