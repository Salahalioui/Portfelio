interface SkeletonProps {
  className?: string
  variant?: 'rectangular' | 'circular' | 'text'
}

const Skeleton = ({ className = '', variant = 'rectangular' }: SkeletonProps) => {
  const baseClass = 'animate-pulse bg-tertiary/50'
  
  const variantClasses = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4 w-3/4',
  }

  return (
    <div
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      style={{
        background: `linear-gradient(
          90deg,
          rgb(var(--color-tertiary) / 0.5) 25%,
          rgb(var(--color-tertiary) / 0.7) 50%,
          rgb(var(--color-tertiary) / 0.5) 75%
        )`,
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s infinite linear',
      }}
    />
  )
}

interface SkeletonProjectCardProps {
  className?: string
}

export const SkeletonProjectCard = ({ className = '' }: SkeletonProjectCardProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <Skeleton className="h-48 w-full" />
      <Skeleton variant="text" className="h-8 w-3/4" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-full" />
      <div className="flex space-x-2">
        <Skeleton variant="text" className="h-6 w-16" />
        <Skeleton variant="text" className="h-6 w-16" />
      </div>
    </div>
  )
}

interface SkeletonSkillCardProps {
  className?: string
}

export const SkeletonSkillCard = ({ className = '' }: SkeletonSkillCardProps) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <Skeleton variant="circular" className="h-12 w-12" />
      <Skeleton variant="text" className="h-6 w-24" />
      <Skeleton className="h-2 w-full rounded-full" />
    </div>
  )
}

export default Skeleton
