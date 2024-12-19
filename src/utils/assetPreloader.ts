// Asset types that can be preloaded
type AssetType = 'image' | 'font' | 'style' | 'script'

interface PreloadConfig {
  url: string
  type: AssetType
  crossOrigin?: boolean
}

// Preload single asset
const preloadAsset = ({ url, type, crossOrigin = false }: PreloadConfig): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = url

    switch (type) {
      case 'image':
        link.as = 'image'
        break
      case 'font':
        link.as = 'font'
        link.type = 'font/woff2'
        break
      case 'style':
        link.as = 'style'
        break
      case 'script':
        link.as = 'script'
        break
    }

    if (crossOrigin) {
      link.crossOrigin = 'anonymous'
    }

    link.onload = () => resolve()
    link.onerror = () => reject(new Error(`Failed to preload: ${url}`))

    document.head.appendChild(link)
  })
}

// Preload multiple assets
export const preloadAssets = async (configs: PreloadConfig[]): Promise<void[]> => {
  return Promise.all(configs.map(preloadAsset))
}

// Critical assets that should be preloaded immediately
export const criticalAssets: PreloadConfig[] = [
  {
    url: '/assets/fonts/main-font.woff2',
    type: 'font',
    crossOrigin: true,
  },
  {
    url: '/assets/images/hero-image.jpg',
    type: 'image',
  },
  // Add other critical assets here
]

// Non-critical assets that can be loaded after the page is interactive
export const nonCriticalAssets: PreloadConfig[] = [
  {
    url: '/assets/images/project-1.jpg',
    type: 'image',
  },
  // Add other non-critical assets here
]

// Initialize preloading
export const initializePreloading = async () => {
  try {
    // Preload critical assets immediately
    await preloadAssets(criticalAssets)

    // Preload non-critical assets after the page is interactive
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadAssets(nonCriticalAssets)
      })
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(() => {
        preloadAssets(nonCriticalAssets)
      }, 1000)
    }
  } catch (error) {
    console.error('Error preloading assets:', error)
  }
}
