import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-navy px-8 py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-start flex-col">
          <Link to="/" className="text-white font-bold tracking-widest text-lg">
            DIPASHI ENTERPRISES
          </Link>
          <span className="text-teal text-xs">
            Protecting Your Structure
          </span>
        </div>

        {/* Desktop Nav Links - Hidden on Mobile */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-white/70 hover:text-teal text-xs transition-colors duration-200">
            Home
          </Link>
          <Link to="/services" className="text-white/70 hover:text-teal text-xs transition-colors duration-200">
            Services
          </Link>
          <Link to="/projects" className="text-white/70 hover:text-teal text-xs transition-colors duration-200">
            Projects
          </Link>
          <Link to="/why-us" className="text-white/70 hover:text-teal text-xs transition-colors duration-200">
            Why Us
          </Link>
          <Link to="/contact" className="text-white/70 hover:text-teal text-xs transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Desktop Button - Hidden on Mobile */}
        <Link to="/contact" className="hidden md:block bg-teal text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-teal/90 transition">
          Free Audit →
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-white block transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4"
          >
            {['/', '/services', '/projects', '/why-us', '/contact'].map((path, i) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-teal text-sm font-medium transition-colors py-2 border-b border-white/5"
              >
                {['Home', 'Services', 'Projects', 'Why Us', 'Contact'][i]}
              </Link>
            ))}

            <a
              href="tel:+919607875036"
              className="bg-teal text-white text-sm font-medium px-4 py-3 rounded-xl text-center mt-2"
            >
              📞 Call Now — Free Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar