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
        if (crossOrigin) link.crossOrigin = 'anonymous'
        break
      case 'style':
        link.as = 'style'
        break
      case 'script':
        link.as = 'script'
        break
    }

    link.onload = () => resolve()
    link.onerror = reject

    document.head.appendChild(link)
  })
}

// Preload multiple assets
const preloadAssets = (configs: PreloadConfig[]): Promise<void[]> => {
  return Promise.all(configs.map(preloadAsset))
}

// Critical assets that should be preloaded immediately
const criticalAssets: PreloadConfig[] = [
  {
    url: '/assets/fonts/main-font.woff2',
    type: 'font',
    crossOrigin: true,
  },
  {
    url: '/assets/images/hero-image.svg',
    type: 'image',
  },
]

// Initialize preloading
export const initializePreloading = async () => {
  try {
    await preloadAssets(criticalAssets)
    console.log('Assets preloaded successfully')
  } catch (error) {
    console.error('Error preloading assets:', error)
  }
}
