import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy">
      <div className="container mx-auto px-8">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-white/8">
          <div className="flex items-start flex-col">
            <span className="text-white font-bold tracking-widest text-sm">
              DIPASHI ENTERPRISES
            </span>
            <span className="text-teal text-xs">
              Protecting Your Structure, Preserving Your Peace
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-white/40 hover:text-white text-sm transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-white/40 hover:text-white text-sm transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-white/40 hover:text-white text-sm transition-colors">
              Projects
            </Link>
            <Link to="/why-us" className="text-white/40 hover:text-white text-sm transition-colors">
              Why Us
            </Link>
            <Link to="/contact" className="text-white/40 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-white/40 text-sm">
              Phone: +91 9607875036
            </span>
            <span className="text-white/40 text-sm mt-1">
              Email: dipashienterprises@gmail.com
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between pt-4">
          <span className="text-xs text-white/30">
            © 2026 Dipashi Enterprises. All rights reserved.
          </span>
          <span className="text-xs text-white/30">
            Authorized applicator of Penetron & Condura Conchem
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer