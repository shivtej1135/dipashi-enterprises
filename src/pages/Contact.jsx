import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        className="relative min-h-[600px] bg-[#0D1B2A] py-32 px-8 overflow-hidden"
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Glowing orb */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,170,204,0.15)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center">
          {/* Breadcrumb */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0 }}
            className="flex items-center justify-center text-white/30 text-xs mb-6"
          >
            <Link to="/" className="text-white/40 hover:text-white transition-colors mr-1.5">
              Home
            </Link>
            <span>→</span>
            <span className="ml-1.5 text-teal">Contact</span>
          </motion.div>

          {/* Top label */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
            className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            GET IN TOUCH
          </motion.div>

          {/* Heading */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-6"
          >
            Let's <span className="text-teal">Protect</span> Your Property
          </motion.h1>

          {/* Subheading */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-lg font-light leading-relaxed max-w-xl"
          >
            Get a free waterproofing inspection today. Our team will visit your site, analyse the problem and recommend the right solution — at no cost.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 justify-center flex-wrap mb-8"
          >
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Free Site Inspection</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Same Week Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ No Commitment</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2 — Contact Info & Enquiry Form */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="bg-[#F4F7FB] py-24 px-8"
      >
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* LEFT COLUMN — Contact Info */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Contact Information
              </h2>
              <p className="text-sm text-muted font-light mb-10">
                Reach out through any of these channels and we'll respond within 24 hours.
              </p>
              <div className="flex flex-col gap-4">
                {/* Card 1 — Phone */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl bg-teal/10">
                    📞
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a href="tel:+919607875036" className="text-navy font-semibold hover:text-teal transition-colors block">
                      +91 9607875036
                    </a>
                    <a href="tel:+919607367129" className="text-navy font-semibold hover:text-teal transition-colors block mt-1">
                      +91 9607367129
                    </a>
                  </div>
                </motion.div>

                {/* Card 2 — Email */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl bg-blue-50">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a href="mailto:dipashienterprises@gmail.com" className="text-navy font-semibold hover:text-teal transition-colors break-all text-sm">
                      dipashienterprises@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Card 3 — WhatsApp */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl bg-green-50">
                    💬
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">
                      WhatsApp
                    </p>
                    <a href="https://wa.me/919607875036" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </motion.div>

                {/* Card 4 — Address */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl bg-purple-50">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">
                      Office Address
                    </p>
                    <p className="text-navy font-semibold">
                      6, Shivanjali Apt., Laxminagar, Phaltan – 415523, Maharashtra
                    </p>
                  </div>
                </motion.div>

                {/* Working Hours Box */}
                <div className="bg-teal/5 border border-teal/10 rounded-2xl p-6 mt-6">
                  <h3 className="text-sm font-semibold mb-3">
                    Working Hours
                  </h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy font-medium">Monday – Sunday</span>
                    <span className="text-muted">8:00 AM – 7:00 PM</span>
                  </div>
                 
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN — Enquiry Form */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Request Sent!</h2>
                  <p className="text-muted text-sm mb-6">
                    We'll contact you within 24 hours to schedule your free inspection.
                  </p>
                  <Link
                    to="/"
                    className="bg-teal text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-teal/90 transition-all duration-200"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-10 border border-gray-100">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">
                    Request Free Inspection
                  </h2>
                  <p className="text-sm text-muted mb-8">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Field 1: Name */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/60 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rajesh Patil"
                        value={formData.name}
                        onChange={handleChange('name')}
                        className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                      />
                    </div>

                    {/* Field 2: Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/60 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                      />
                    </div>

                    {/* Field 3: City/Area */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/60 uppercase tracking-wider mb-2">
                        City / Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Phaltan, Satara"
                        value={formData.city}
                        onChange={handleChange('city')}
                        className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                      />
                    </div>

                    {/* Field 4: Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/60 uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={handleChange('service')}
                        className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="Terrace & Roof Waterproofing">Terrace & Roof Waterproofing</option>
                        <option value="Bathroom & Kitchen">Bathroom & Kitchen</option>
                        <option value="External Walls">External Walls</option>
                        <option value="Water Tank & Swimming Pool">Water Tank & Swimming Pool</option>
                        <option value="Basement & Foundation">Basement & Foundation</option>
                        <option value="Expansion Joints">Expansion Joints</option>
                        <option value="Not Sure — Need Inspection">Not Sure — Need Inspection</option>
                      </select>
                    </div>

                    {/* Field 5: Describe Your Problem */}
                    <div>
                      <label className="block text-xs font-semibold text-navy/60 uppercase tracking-wider mb-2">
                        Describe Your Problem
                      </label>
                      <textarea
                        placeholder="e.g. My terrace leaks every monsoon, water seeping through walls..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange('message')}
                        className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="bg-teal text-white py-4 rounded-xl font-medium text-sm hover:bg-teal/90 transition-all duration-200 hover:-translate-y-0.5 w-full mt-2"
                    >
                      Send Inspection Request →
                    </button>

                    {/* Privacy Note */}
                    <p className="text-xs text-muted text-center mt-4">
                      🔒 Your details are safe with us. We'll never share your information.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact