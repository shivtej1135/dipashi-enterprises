import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services.jsx'

const Services = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      className="min-h-[calc(100vh-80px)] py-12"
    >
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Our Services</h1>
          <p className="text-muted text-base font-light max-w-xl mx-auto">
            Discover our comprehensive waterproofing solutions tailored to protect every part of your structure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-teal transition-all duration-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mr-3">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-muted mb-4">{service.description}</p>
              <div className="flex items-center">
                <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">
                  {service.warranty} Warranty
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/" className="bg-teal text-white px-6 py-3 rounded-lg hover:bg-teal/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Services