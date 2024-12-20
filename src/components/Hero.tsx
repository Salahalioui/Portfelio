import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo } from 'react'
import Particles from 'react-tsparticles'
import InteractiveButton from './Interactive/InteractiveButton'
import { Link } from 'react-scroll'

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const particlesOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push" as const,
        },
        onHover: {
          enable: true,
          mode: "repulse" as const,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#64ffda",
      },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        speed: 2,
        outModes: "bounce" as const,
        random: false,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      </div>

      {/* Content Container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="space-y-6"
        >
          <motion.h2
            className="text-secondary text-lg sm:text-xl font-mono"
            variants={textVariants}
          >
            Hi, my name is
          </motion.h2>
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-lightestText"
            variants={textVariants}
          >
            Salah Alioui.
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-lightText"
            variants={textVariants}
          >
            I build things for the web.
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lightText text-lg sm:text-xl"
            variants={textVariants}
          >
            I'm a PhD student in Sports Science and a Full Stack Developer, specializing in
            building exceptional digital experiences that combine technology with sports science.
          </motion.p>
          <motion.div
            variants={textVariants}
            className="pt-4"
          >
            <Link to="projects" smooth={true} duration={500}>
              <InteractiveButton>
                Check out my work!
              </InteractiveButton>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
