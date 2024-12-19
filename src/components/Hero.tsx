import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
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
              value: '#64ffda',
            },
            links: {
              color: '#64ffda',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
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
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="z-10 text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={textVariants} className="space-y-2">
            <h2 className="text-secondary text-lg md:text-xl font-mono">
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500">
              Salah Alioui
            </h1>
          </motion.div>

          <motion.div variants={textVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-lightText mb-4">
              Bridging Sports Science & Technology
            </h2>
            <p className="text-xl md:text-2xl text-lightestText max-w-2xl mx-auto">
              Front-End Developer | PhD Student in Sports Science | Volleyball Coach
            </p>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="flex gap-6 justify-center mt-8"
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20" />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 w-full flex justify-center"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="bg-tertiary p-2 rounded-full"
          >
            <ChevronDownIcon className="h-6 w-6 text-secondary" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
