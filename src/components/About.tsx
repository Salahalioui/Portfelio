import { motion, useScroll, useTransform } from 'framer-motion'
import { FaVolleyballBall, FaCode, FaGraduationCap } from 'react-icons/fa'
import { useRef, useMemo } from 'react'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

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

  const features = useMemo(() => [
    {
      icon: FaCode,
      title: 'Developer',
      description: 'Passionate about creating elegant web solutions with modern technologies',
    },
    {
      icon: FaGraduationCap,
      title: 'PhD Student',
      description: 'Researching and innovating in Sports Science',
    },
    {
      icon: FaVolleyballBall,
      title: 'Volleyball Coach',
      description: 'Leading and developing high-performance teams',
    },
  ], [])

  const skills = useMemo(() => [
    'JavaScript (ES6+)',
    'React.js',
    'HTML5/CSS3',
    'Tailwind CSS',
    'Git/GitHub',
    'Responsive Design',
    'AI Tools Integration',
    'UI/UX Principles',
  ], [])

  return (
    <section 
      ref={sectionRef}
      id="about" 
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
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-tertiary/50 backdrop-blur-sm p-6 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-secondary/10 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-lightText group-hover:text-secondary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lightestText group-hover:text-lightText transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lightestText leading-relaxed">
                  I'm a passionate Front-End Developer with a unique blend of sports science and technology. 
                  Currently pursuing my PhD in Sports Science, I bring an analytical mindset and methodical 
                  approach to web development. My experience as a volleyball coach has honed my leadership 
                  and teamwork skills, which I apply to every project I undertake.
                </p>
                <p className="text-lightestText leading-relaxed mt-4">
                  I believe in leveraging modern tools and technologies, including AI assistants like 
                  ChatGPT and GitHub Copilot, to create efficient and innovative solutions. My goal is 
                  to bridge the gap between sports science and technology, creating applications that 
                  enhance athletic performance and coaching methodologies.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-lightText">
                Technical Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 bg-tertiary/30 p-3 rounded-lg group hover:bg-tertiary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-lightestText group-hover:text-secondary transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
