import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
