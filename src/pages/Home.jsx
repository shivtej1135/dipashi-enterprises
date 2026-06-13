import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { services } from '../data/services.jsx'
import vasconLogo from '../assets/clients/vascon.png'
import ciplaLogo from '../assets/clients/cipla.png'
import krahejaLogo from '../assets/clients/kraheja.png'
import govindLogo from '../assets/clients/govind.png'
import kushalLogo from '../assets/clients/kushal.png'
import symbiosisLogo from '../assets/clients/symbiosis.png'
import suzlonLogo from '../assets/clients/suzlon.png'
import novotelLogo from '../assets/clients/novotel.png'

const clients = [
  { name: 'Vascon Engineers', logo: vasconLogo },
  { name: 'Cipla Ltd.', logo: ciplaLogo },
  { name: 'K Raheja Corp', logo: krahejaLogo },
  { name: 'Govind Milk & Products', logo: govindLogo },
  { name: 'Kushal Landmarks', logo: kushalLogo },
  { name: 'Symbiosis', logo: symbiosisLogo },
  { name: 'Suzlon Energy', logo: suzlonLogo },
  { name: 'Novotel Hotels', logo: novotelLogo },
]

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        className="relative min-h-screen bg-navy overflow-hidden"
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Glowing orb */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,170,204,0.15)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 py-20 text-center">
          {/* Top label */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
            className="text-teal text-xs font-medium tracking-[0.15em] uppercase mb-6"
          >
            Waterproofing Specialists Since 1999
          </motion.div>

          {/* Heading */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-6 max-w-3xl"
          >
            Protecting Your <span className="text-teal">Structure</span>, Preserving Your Peace
          </motion.h1>

          {/* Stat pills */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="flex-col sm:flex-row gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">Serving Maharashtra Since 1999</span>
            </div>
          </motion.div>

          {/* Subheading */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-lg font-light leading-relaxed max-w-xl text-center mb-10"
          >
            25+ years of waterproofing expertise across Maharashtra — homes, offices, and industrial structures.
          </motion.p>

          {/* Buttons */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="flex-col sm:flex-row gap-3 justify-center mb-16"
          >
            <Link to="/services" className="bg-teal text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-teal/90 transition-all duration-200 hover:-translate-y-0.5">
              View Our Services
            </Link>
            <Link to="/projects" className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium text-sm hover:border-teal hover:text-teal transition-all duration-200">
              See Our Projects
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-white/40 text-xs"
          >
            <span>Authorized Penetron Applicator</span>
            <span className="mx-1">·</span>
            <span>ISO Grade Materials</span>
            <span className="mx-1">·</span>
            <span>Up to 10 Year Warranty</span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FiChevronDown className="text-white/30 w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        className="bg-teal py-16"
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="flex flex-wrap justify-center items-center border-r border-white/20">
            <div className="flex-1 md:w-1/3 border-r border-white/20 last:border-0">
              <p className="text-5xl font-bold text-white tracking-tighter">25+</p>
              <p className="text-white/70 text-sm mt-1 font-light">Years of Expertise</p>
            </div>
            <div className="flex-1 md:w-1/3 border-r border-white/20 last:border-0">
              <p className="text-5xl font-bold text-white tracking-tighter">10 Year</p>
              <p className="text-white/70 text-sm mt-1 font-light">Max Warranty</p>
            </div>
            <div className="flex-1 md:w-1/3 last:border-0">
              <p className="text-5xl font-bold text-white tracking-tighter">500+</p>
              <p className="text-white/70 text-sm mt-1 font-light">Projects Completed</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Preview */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        className="bg-white py-24 px-4 md:px-8"
      >
        <div className="container mx-auto px-4 md:px-8">
          {/* Section label */}
          <p className="text-teal text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            WHAT WE DO
          </p>
          {/* Title */}
          <h2 className="text-4xl font-bold tracking-tighter mb-4 text-center">
            Specialized Waterproofing Solutions
          </h2>
          {/* Subtitle */}
          <p className="text-muted text-base font-light mb-16 text-center max-w-xl mx-auto">
            Our specialized services cover every aspect of waterproofing, from roofs to foundations, using advanced materials and techniques.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,170,204,0.12)" }}
                initial={{ y: 0 }}
                className="p-8 rounded-2xl border border-gray-100 bg-white cursor-pointer group"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                  {service.icon}
                </div>

                <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{service.description}</p>
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  {service.warranty}
                </span>
              </motion.div>
            ))}
          </div>

          {/* View all services link */}
          <div className="text-center mt-8">
            <Link to="/services" className="border border-teal text-teal hover:bg-teal hover:text-white px-4 py-2 rounded transition">
              View All Services →
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Clients Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="bg-navy py-24 px-4 md:px-8"
      >
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
            OUR CLIENTS
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tighter text-center mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-white/40 text-sm text-center mb-16 font-light">
            From residential complexes to pharmaceutical giants — 25+ years of trusted partnerships
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-navy flex items-center justify-center p-8 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Home