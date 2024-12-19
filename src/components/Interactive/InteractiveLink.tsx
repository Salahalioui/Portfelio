import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface InteractiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  underline?: boolean
}

const InteractiveLink = ({
  href,
  children,
  className = '',
  external = false,
  underline = true,
}: InteractiveLinkProps) => {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`relative inline-block hover-trigger ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {underline && (
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <span className="relative">{children}</span>
      {external && (
        <motion.span
          className="inline-block ml-1"
          initial={{ y: 0 }}
          whileHover={{ y: -2, x: 2 }}
        >
          ↗
        </motion.span>
      )}
    </motion.a>
  )
}

export default InteractiveLink
