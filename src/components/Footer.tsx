const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-lightestText">
          <p> {new Date().getFullYear()} Salah Alioui. All rights reserved.</p>
          <p className="mt-2">
            Built with React and Tailwind CSS | PhD Student in Sports Science
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
