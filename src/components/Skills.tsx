import { motion, useAnimation } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaVolleyballBall,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVercel,
  SiVite,
  SiNextdotjs,
} from 'react-icons/si'
import { useEffect } from 'react'

const Skills = () => {
  const controls = useAnimation()

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 90 },
        { name: 'CSS3', icon: FaCss3Alt, level: 85 },
        { name: 'JavaScript', icon: FaJs, level: 85 },
        { name: 'React', icon: FaReact, level: 80 },
        { name: 'TypeScript', icon: SiTypescript, level: 75 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      description: 'Modern development tools and frameworks',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 85 },
        { name: 'Next.js', icon: SiNextdotjs, level: 75 },
        { name: 'Framer Motion', icon: SiFramer, level: 80 },
        { name: 'Vercel', icon: SiVercel, level: 85 },
        { name: 'Vite', icon: SiVite, level: 80 },
        { name: 'Sports Tech', icon: FaVolleyballBall, level: 95 },
      ],
    },
  ]

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-primary to-tertiary">
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
              Technical Skills
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-lightText mb-2">
                    {category.title}
                  </h3>
                  <p className="text-lightestText">{category.description}</p>
                </div>

                <div className="grid gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group relative bg-tertiary/30 rounded-lg p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <skill.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lightText group-hover:text-secondary transition-colors duration-300">
                              {skill.name}
                            </h4>
                            <span className="text-sm text-secondary">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-tertiary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-secondary to-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 bg-tertiary/20 p-6 rounded-xl backdrop-blur-sm"
          >
            <p className="text-lightestText">
              Continuously learning and adapting to new technologies while applying them
              to sports science and performance analysis.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
