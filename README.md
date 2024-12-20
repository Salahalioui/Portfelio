# Salah Alioui Portfolio

A modern, interactive portfolio website showcasing my work as a Full Stack Developer and PhD student in Sports Science. Built with React, TypeScript, and modern web technologies.

![Portfolio Preview](public/preview.png)

## 🌟 Features

- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Particle Effects**: Dynamic background with interactive particles using tsParticles
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Theme switching with persistent preferences
- **Performance Optimized**: Code splitting, lazy loading, and asset optimization
- **PWA Ready**: Installable Progressive Web App with offline support
- **SEO Friendly**: Meta tags and optimizations for better search engine visibility

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Particles**: tsParticles
- **State Management**: React Context
- **Form Handling**: EmailJS
- **Icons**: Heroicons & React Icons
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Salahalioui/Portfelio.git
   cd Portfelio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Interactive/   # Interactive UI elements
│   ├── Mobile/        # Mobile-specific components
│   ├── Navigation/    # Navigation components
│   └── SEO/          # SEO-related components
├── context/           # React context providers
├── utils/            # Utility functions
├── styles/           # Global styles
└── types/            # TypeScript type definitions
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### TypeScript Configuration

The project uses three TypeScript configuration files:
- `tsconfig.json`: Base configuration
- `tsconfig.node.json`: Node-specific settings
- `tsconfig.build.json`: Production build settings

## 🎨 Customization

### Themes

The theme configuration is located in `src/context/ThemeContext.tsx`. You can modify the color scheme in `tailwind.config.js`.

### Particles

Particle effects can be customized in `src/components/Hero.tsx` by modifying the `particlesOptions` object.

## 📱 PWA Support

The site is PWA-enabled with the following features:
- Offline support
- Asset caching
- Install prompts
- Service worker updates

## 🚀 Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with the following settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

Salah Alioui - [LinkedIn](https://www.linkedin.com/in/salah-alioui/) - [Email](mailto:contact@salahalioui.com)

---

Built with 💚 by Salah Alioui
