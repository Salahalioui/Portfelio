import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
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
import { useRef, useMemo } from 'react'

const Skills = () => {
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

  const skillCategories = useMemo(() => [
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
  ], [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills" 
      className="relative py-20 bg-gradient-to-b from-primary/5 to-tertiary/10 overflow-hidden"
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
              Technical Skills
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
            </h2>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-8 relative"
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-lightText mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500">
                    {category.title}
                  </h3>
                  <p className="text-lightestText">{category.description}</p>
                </motion.div>

                <div className="grid gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group relative bg-tertiary/30 rounded-lg p-4 backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                          <skill.icon className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-lightText group-hover:text-secondary transition-colors duration-300 font-medium">
                              {skill.name}
                            </h4>
                            <span className="text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-tertiary/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-secondary to-blue-500 relative"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                            </motion.div>
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
            whileHover={{ scale: 1.01 }}
            className="text-center mt-12 bg-tertiary/20 p-6 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
          >
            <p className="text-lightestText">
              Continuously learning and exploring new technologies to stay at the forefront of web development.
              <br />
              <span className="text-secondary">Open to learning new technologies and frameworks.</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
