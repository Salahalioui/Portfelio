import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInViewProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const FadeInView = ({ children, className = '', delay = 0 }: FadeInViewProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.43, 0.13, 0.23, 0.96],
    }}
    className={className}
  >
    {children}
  </motion.div>
)

interface SlideInViewProps {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right'
  delay?: number
}

export const SlideInView = ({
  children,
  className = '',
  direction = 'left',
  delay = 0,
}: SlideInViewProps) => (
  <motion.div
    initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.43, 0.13, 0.23, 0.96],
    }}
    className={className}
  >
    {children}
  </motion.div>
)

interface ScaleInViewProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const ScaleInView = ({ children, className = '', delay = 0 }: ScaleInViewProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.43, 0.13, 0.23, 0.96],
    }}
    className={className}
  >
    {children}
  </motion.div>
)

interface TouchFeedbackProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const TouchFeedback = ({ children, className = '', onClick }: TouchFeedbackProps) => (
  <motion.div
    className={className}
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.1 }}
  >
    {children}
  </motion.div>
)
