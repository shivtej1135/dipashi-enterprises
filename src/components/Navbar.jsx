import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
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

        <Link to="/contact" className="bg-teal text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-teal/90 transition">
          Free Audit →
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar