import { motion } from 'framer-motion'
import { FaHeart, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiFramer } from 'react-icons/si'

const Footer = () => {
  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
    { name: 'Framer Motion', icon: SiFramer, color: 'text-[#FF0055]' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const techVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="relative bg-gradient-to-t from-tertiary/5 to-primary/5 py-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-96 h-96 bg-secondary/10 rounded-full -bottom-48 -left-48 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full -top-48 -right-48 blur-3xl"
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="space-y-6">
          {/* Built With Section */}
          <div className="text-center space-y-4">
            <p className="text-lightText text-sm">Crafted with</p>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block text-red-500"
            >
              <FaHeart className="w-5 h-5 inline-block" />
            </motion.div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={techVariants}
                  whileHover="hover"
                  className="flex items-center gap-2 bg-tertiary/30 backdrop-blur-sm px-3 py-2 rounded-full"
                >
                  <tech.icon className={`w-4 h-4 ${tech.color}`} />
                  <span className="text-sm text-lightestText">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="text-center space-y-3">
            <motion.p 
              className="text-lightText"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {new Date().getFullYear()} Salah Alioui. All rights reserved.
            </motion.p>
            <motion.p 
              className="text-sm text-lightestText"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              PhD Student in Sports Science | Exploring the intersection of technology and athletics
            </motion.p>
          </div>

          {/* Additional Links */}
          <motion.div 
            className="text-center pt-4 border-t border-tertiary/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="mailto:salahallioui01@gmail.com"
              className="text-sm text-secondary hover:text-blue-500 transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
