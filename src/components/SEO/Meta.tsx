import { Helmet } from 'react-helmet-async'

interface MetaProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

const Meta = ({
  title = 'Salah Alioui | Full Stack Developer & Sports Scientist',
  description = 'Full Stack Developer and Sports Scientist specializing in web development and sports performance analysis. Explore my projects and research work.',
  keywords = 'full stack developer, sports science, web development, React, TypeScript, performance analysis',
  ogImage = '/og-image.jpg', // Add your OG image
}: MetaProps) => {
  const siteUrl = 'https://salahalioui.com' // Replace with your actual domain

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Salah Alioui" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Theme Color */}
      <meta name="theme-color" content="#0a192f" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default Meta
