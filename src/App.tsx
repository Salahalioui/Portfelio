import { Suspense, lazy, useEffect, useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ScrollFeatures from './components/Navigation/ScrollFeatures'
import { ThemeProvider } from './context/ThemeContext'
import Meta from './components/SEO/Meta'
import CustomCursor from './components/Interactive/CustomCursor'
import PageTransition from './components/Interactive/PageTransition'
import MobileNavigation from './components/Mobile/MobileNavigation'

// Lazy load components
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="space-y-8 w-full max-w-2xl mx-auto px-4">
      <div className="loading-skeleton h-12 w-48 mx-auto rounded-lg" />
      <div className="loading-skeleton h-6 w-3/4 mx-auto rounded" />
      <div className="loading-skeleton h-6 w-1/2 mx-auto rounded" />
    </div>
  </div>
)

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-primary text-lightText">
          <Meta />
          {!isMobile && <CustomCursor />}
          <ScrollFeatures />
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
          <Suspense fallback={<LoadingFallback />}>
            <PageTransition>
              <main className="px-4 md:px-6 lg:px-8">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </PageTransition>
          </Suspense>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
