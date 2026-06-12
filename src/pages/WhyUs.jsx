import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WhyUs = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      className="min-h-[calc(100vh-80px)] py-12"
    >
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Why Choose Us?</h1>
        <p className="text-muted text-lg">
          With 25+ years of expertise, certified professionals, and premium materials, we deliver lasting waterproofing solutions you can trust.
        </p>
        <div className="mt-8">
          <Link to="/" className="bg-teal text-white px-4 py-2 rounded hover:bg-teal/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default WhyUs