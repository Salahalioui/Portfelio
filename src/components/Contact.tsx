import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { BiLinkExternal } from 'react-icons/bi'

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Salahalioui',
      color: 'hover:text-[#6e5494]',
      description: 'Check out my code repositories and contributions',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/salahallioui',
      color: 'hover:text-[#E4405F]',
      description: 'Follow my journey and daily updates',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/SALAH.ALIOUI32/',
      color: 'hover:text-[#1877F2]',
      description: 'Connect with me on Facebook',
    },
    {
      name: 'Email',
      icon: HiMail,
      url: 'mailto:salahallioui01@gmail.com',
      color: 'hover:text-[#EA4335]',
      description: 'Drop me a line anytime',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-tertiary to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full -top-48 -left-48 blur-3xl" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full -bottom-48 -right-48 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="section-title inline-block relative group">
              Let's Connect
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center space-x-2 text-lightText">
              <FaMapMarkerAlt className="text-secondary" />
              <span>Based in Algeria</span>
            </div>
            <p className="text-lightestText max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about sports science and technology.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-tertiary/30 backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <link.icon className={`w-8 h-8 ${link.color} transition-colors duration-300`} />
                    </div>
                    <BiLinkExternal className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-lightText group-hover:text-secondary transition-colors duration-300">
                      {link.name}
                    </h3>
                    <p className="text-lightestText mt-2">{link.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-tertiary/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-lightText mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-lightestText mb-6">
              Whether you're looking for a developer, have a project in mind, 
              or want to discuss the intersection of sports and technology, 
              I'd love to hear from you!
            </p>
            <a
              href="mailto:salahallioui01@gmail.com"
              className="inline-flex items-center space-x-2 btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <HiMail className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
