import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      className="min-h-[calc(100vh-80px)] py-12"
    >
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Contact Us</h1>
        <p className="text-muted text-lg">
          Ready for a free audit? Reach out to us via phone, email, or visit our office.
        </p>
        <div className="mt-6 space-y-4">
          <p className="flex items-center">
            <span className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mr-3">
              📞
            </span>
            <span>Phone: +91 9607875036</span>
          </p>
          <p className="flex items-center">
            <span className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mr-3">
              📧
            </span>
            <span>Email: dipashienterprises@gmail.com</span>
          </p>
          <p className="flex items-center">
            <span className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mr-3">
              📍
            </span>
            <span>Address: 6, Shivanjali Apt., Laxminagar, Phaltan – 415523</span>
          </p>
        </div>
        <div className="mt-8">
          <Link to="/" className="bg-teal text-white px-4 py-2 rounded hover:bg-teal/90 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact