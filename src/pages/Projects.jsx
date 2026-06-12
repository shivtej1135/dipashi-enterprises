import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      className="min-h-[calc(100vh-80px)] py-12"
    >
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Our Projects</h1>
        <p className="text-muted text-lg">
          Explore our showcase of successful waterproofing projects across residential, commercial, and industrial sectors.
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

export default Projects