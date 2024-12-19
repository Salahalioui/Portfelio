import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-secondary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovered ? 2 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-secondary rounded-full pointer-events-none z-50 opacity-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovered ? 1.5 : 0.5,
          opacity: isHovered ? 0.3 : 0.15,
        }}
        transition={{ duration: 0.3, delay: 0.05 }}
      />
    </>
  )
}

export default CustomCursor
