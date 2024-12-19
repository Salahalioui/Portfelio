import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { RiMenu4Line } from 'react-icons/ri'

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navLinks.forEach(({ href }) => {
      const element = document.getElementById(href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-tertiary/30 backdrop-blur-sm"
        >
          {theme === 'dark' ? (
            <FaSun className="w-5 h-5 text-yellow-400" />
          ) : (
            <FaMoon className="w-5 h-5 text-blue-400" />
          )}
        </motion.button>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-tertiary/30 backdrop-blur-sm text-lightText"
        >
          {isOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <RiMenu4Line className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/90 backdrop-blur-lg z-40"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-tertiary/30 backdrop-blur-lg p-8 pt-24"
            >
              <div className="space-y-8">
                {navLinks.map(({ name, href }) => (
                  <motion.button
                    key={href}
                    onClick={() => scrollToSection(href)}
                    className={`block w-full text-left text-2xl font-medium 
                              ${activeSection === href ? 'text-secondary' : 'text-lightText'}`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="h-px bg-secondary flex-1"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeSection === href ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      {name}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-sm text-lightestText text-center">
                  Swipe right to close menu
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNavigation
