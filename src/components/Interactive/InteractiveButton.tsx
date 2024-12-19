import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface InteractiveButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const InteractiveButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
}: InteractiveButtonProps) => {
  const baseClass = 'relative overflow-hidden rounded-lg font-medium transition-all duration-300'
  
  const variants = {
    primary: 'bg-secondary/20 text-secondary hover:bg-secondary/30',
    secondary: 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={false}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0"
        style={{
          translateX: '-100%',
        }}
        animate={{
          translateX: ['100%', '-100%'],
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default InteractiveButton
