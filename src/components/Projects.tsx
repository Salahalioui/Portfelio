import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { useRef, useMemo } from 'react'

const Projects = () => {
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

  const projects = useMemo(() => [
    {
      title: 'Volleyball Insights',
      description:
        'This application is a result of a PhD thesis project aimed to provide volleyball match analysis and making it accessible for coaches and players at all levels.',
      technologies: ['React', 'Vue.js', 'Tailwind CSS'],
      github: 'https://github.com/Salahalioui/volley-insights',
      demo: 'https://volley-insights.vercel.app/',
      inProgress: true,
    },
    {
      title: 'Ikhtiyar DZ - Talent Scout System',
      description:
        'A comprehensive talent scouting system designed to support the selection process for young talents in football and athletics.',
      technologies: ['React with TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Salahalioui/Ikhtiyar-DZ',
      demo: 'https://ikhtiyar-dz.vercel.app/',
      inProgress: true,
    },
    {
      title: 'Talent Evaluation',
      description:
        'A platform designed for assessing and evaluating talent, potentially within recruitment or educational contexts.',
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Salahalioui/Cursor-Testing-app/tree/main',
      demo: 'https://talent-evaluation.vercel.app/',
      inProgress: true,
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

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-20 bg-gradient-to-b from-tertiary/5 to-primary/5 overflow-hidden"
    >
      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
              Featured Projects
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-tertiary/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300"
              >
                {/* Project Card Content */}
                <div className="p-6 space-y-4">
                  {/* Project Icon */}
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300"
                  >
                    <BiCodeAlt className="w-6 h-6 text-secondary" />
                  </motion.div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500 group-hover:text-secondary transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-lightestText text-sm leading-relaxed group-hover:text-lightText transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-3 py-1 bg-primary/40 rounded-full text-secondary border border-secondary/20 hover:border-secondary/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-lightText hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-lightText hover:text-secondary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </motion.a>
                    {project.inProgress && (
                      <motion.span 
                        whileHover={{ scale: 1.1 }}
                        className="ml-auto text-xs text-secondary border border-secondary/50 rounded-full px-3 py-1 hover:bg-secondary/10 transition-all duration-300"
                      >
                        In Progress
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects Link */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.a
              href="https://github.com/Salahalioui"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-secondary hover:text-blue-500 transition-colors duration-300"
            >
              <span>View More on GitHub</span>
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
