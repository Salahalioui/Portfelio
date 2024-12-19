import { useState, TouchEvent } from 'react'

interface SwipeInput {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  threshold?: number
}

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
}: SwipeInput) => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    })
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (!touchStart) return

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    }

    const deltaX = touchStart.x - touchEnd.x
    const deltaY = touchStart.y - touchEnd.y

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          onSwipeLeft?.()
        } else {
          onSwipeRight?.()
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          onSwipeUp?.()
        } else {
          onSwipeDown?.()
        }
      }
    }

    setTouchStart(null)
  }

  return {
    onTouchStart,
    onTouchEnd,
  }
}

export default useSwipe
