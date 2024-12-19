import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollFeatures = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-blue-500 z-50"
        style={{ 
          scaleX: scrollProgress / 100,
          transformOrigin: '0%',
        }}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-secondary/20 hover:bg-secondary/30 
                     text-secondary rounded-full backdrop-blur-sm z-50 
                     transition-colors duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="w-6 h-6" />
            <span className="absolute -top-8 right-0 bg-tertiary px-2 py-1 rounded 
                         text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollFeatures
