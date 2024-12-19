import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'

const Projects = () => {
  const projects = [
    {
      title: 'Volleyball Insights',
      description:
        'This application is a result of a PhD thesis project aimed to provide volleyball match analysis and making it accessible for coaches and players at all levels.',
      technologies: ['React', 'Vue. js', 'Tailwind CSS'],
      github: 'https://github.com/Salahalioui/volley-insights',
      demo: 'https://volley-insights.vercel.app/',
      inProgress: true,
    },
    {
      title: 'Ikhtiyar DZ - Talent Scout System',
      description:
        'A comprehensive talent scouting system designed to support the selection process for young talents in football and athletics.',
      technologies: ['react with typescript', 'Tailwind CSS', 'framer-motion'],
      github: 'https://github.com/Salahalioui/Ikhtiyar-DZ',
      demo: 'https://ikhtiyar-dz.vercel.app/',
      inProgress: true,
    },
    {
      title: 'talent-evaluation',
      description:
        'a platform designed for assessing and evaluating talent, potentially within recruitment or educational contexts',
      technologies: ['React', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Salahalioui/Cursor-Testing-app/tree/main',
      demo: 'https://talent-evaluation.vercel.app/',
      inProgress: true,
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
    <section id="projects" className="py-20 bg-gradient-to-b from-tertiary to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Featured Projects
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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
                className="group relative bg-tertiary/30 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                {/* Project Card Content */}
                <div className="p-6 space-y-4">
                  {/* Project Icon */}
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <BiCodeAlt className="w-6 h-6 text-secondary" />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-lightText group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-lightestText text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-primary/40 rounded-full text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightText hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightText hover:text-secondary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                    {project.inProgress && (
                      <span className="ml-auto text-xs text-secondary border border-secondary rounded-full px-3 py-1">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
