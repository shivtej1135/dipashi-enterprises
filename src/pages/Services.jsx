import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {
  // Services data array as specified
  const servicesData = [
    {
      icon: "🏠",
      title: "Terrace & Roof",
      problem: "Is your roof leaking every monsoon?",
      description: "Advanced membrane and liquid or chemical applied systems for 100% protection.",
      includes: ["Liquid membrane application", "PU coating systems", "Brick bat coba treatment"],
      warranty: "7–10 years",
      color: "teal",
    },
    {
      icon: "🚿",
      title: "Bathroom & Kitchen",
      problem: "Damp walls and hidden leakage?",
      description: "Hidden leakage repairs and specialized grouting without major breakage.",
      includes: ["Nano technology sealing", "Chemical coatings", "No major breakage method"],
      warranty: "5 years",
      color: "blue",
    },
    {
      icon: "🧱",
      title: "External Walls",
      problem: "Dampness and fungal growth on walls?",
      description: "High performance coatings to prevent dampness and fungal growth.",
      includes: ["Rain guard protective painting", "Box type treatment", "Chemical coatings"],
      warranty: "5–7 years",
      color: "emerald",
    },
    {
      icon: "💧",
      title: "Water Tanks & Pools",
      problem: "Worried about water contamination?",
      description: "Non-toxic food grade waterproofing for safe water storage.",
      includes: ["Food grade epoxy coating", "Crystallisation treatment", "Non-toxic certified materials"],
      warranty: "5 years",
      color: "cyan",
    },
    {
      icon: "🏗️",
      title: "Basement & Foundation",
      problem: "Ground water seeping into your basement?",
      description: "Heavy duty chemical injection and pressure grouting to stop ground water seepage.",
      includes: ["Chemical injection", "Pressure grouting", "Crystalline admixtures"],
      warranty: "10 years",
      color: "purple",
    },
    {
      icon: "🔧",
      title: "Expansion Joints",
      problem: "Cracks appearing in your building joints?",
      description: "Professional sealing for large commercial and industrial buildings.",
      includes: ["Kemperol liquid membrane", "Commercial grade sealing", "Industrial building treatment"],
      warranty: "5 years",
      color: "orange",
    },
  ]

  // Warranty table data
  const tableData = [
    { area: "Terrace / Roof", solution: "Liquid Membrane, PU Coating or Brick Bat Coba", warranty: "7–10 years" },
    { area: "Bathrooms", solution: "Nano Technology Sealing or Chemical Coatings", warranty: "5 years" },
    { area: "External Walls", solution: "Rain Guard Protective Painting or Chemical Coatings", warranty: "5–7 years" },
    { area: "Water Tanks", solution: "Food Grade Epoxy Coating", warranty: "5 years" },
    { area: "Basement", solution: "Pressure Grouting, Injection or Crystallisation", warranty: "10 years" },
    { area: "Swimming Pools", solution: "Pressure Grouting, Injection or Crystallisation", warranty: "10 years" },
  ]

  return (
    <>
      {/* SECTION 1 — Hero */}
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
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center text-white/30 text-xs mb-6"
          >
            <Link to="/" className="text-white/40 hover:text-white transition-colors mr-1.5">
              Home
            </Link>
            <span>→</span>
            <span className="ml-1.5 text-teal">Services</span>
          </motion.div>

          {/* Top label */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            WHAT WE OFFER
          </motion.div>

          {/* Heading */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-6"
          >
            Specialized <span className="text-teal">Waterproofing</span> Solutions
          </motion.h1>

          {/* Subheading */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg font-light leading-relaxed max-w-xl"
          >
            From terrace leaks to basement seepage — we have the right solution for every structure.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.5 }}
            className="flex gap-3 justify-center flex-wrap mb-8"
          >
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Free Site Inspection</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Certified Materials</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Written Warranty</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2 — Services Grid */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="bg-[#F4F7FB] py-24 px-8"
      >
        <div className="container mx-auto px-8">
          <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4">
            Every Part of Your Structure, Protected
          </h2>
          <p className="text-muted text-base font-light mb-16 text-center max-w-xl">
            Industry-leading materials. Certified technicians. Guaranteed results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 group"
                whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Top colored band */}
                <div className={`h-1.5 w-full bg-${service.color}-500`}></div>

                <div className="p-8">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{service.icon}</div>

                  {/* Problem statement */}
                  <p className="text-xs font-medium text-muted italic mb-3">
                    {service.problem}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What's included list */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider mb-3">
                      What's included
                    </p>
                    {service.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 text-sm text-navy/70 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    {/* Warranty badge */}
                    <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      🛡️ {service.warranty} Warranty
                    </span>
                    {/* Get Quote link */}
                    <Link to="/contact" className="text-teal text-xs font-medium hover:gap-2 transition-all">
                      Get Quote →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 3 — Warranty Comparison Table */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="bg-[#0D1B2A] py-24 px-4 md:px-8"
      >
        <div className="container mx-auto px-2 md:px-8">
          <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            QUICK COMPARISON
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-4">
            Service & Warranty Overview
          </h2>
          <p className="text-white/40 text-sm font-light mb-16 text-center">
            All warranties are backed by a written certificate issued on project completion.
          </p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">
              {/* Table header */}
              <div className="bg-white/5 hidden md:grid grid-cols-3 px-8 py-4">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Service Area</p>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Solution Provided</p>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Warranty</p>
              </div>

              {/* Table rows */}
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col md:grid md:grid-cols-3 px-8 py-5 border-t border-white/5 hover:bg-white/5 transition-colors gap-1 md:gap-0"
                >
                  <p className="text-white text-sm font-semibold">{row.area}</p>
                  <p className="text-white/50 text-sm">{row.solution}</p>
                  <p className="text-teal text-sm font-semibold">{row.warranty}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 4 — Materials Banner */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="bg-[#F4F7FB] py-16 px-8"
      >
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 p-10 flex gap-8 items-center flex-col md:flex-row">
            {/* Left side (60%) */}
            <div className="w-full md:w-3/5 space-y-4">
              <p className="text-teal text-xs font-semibold tracking-wider uppercase">
                CERTIFIED MATERIALS
              </p>
              <h3 className="text-xl font-bold tracking-tight mb-2">
                We only use industry-leading waterproofing materials
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-surface border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-navy">
                  Penetron
                </span>
                <span className="bg-surface border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-navy">
                  Sika
                </span>
                <span className="bg-surface border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-navy">
                  Fosroc
                </span>
                <span className="bg-surface border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-navy">
                  Kemperol
                </span>
                <span className="bg-surface border border-gray-200 rounded-lg px-4 py-2 text-xs font-medium text-navy">
                  Condura Conchem
                </span>
              </div>
            </div>

            {/* Right side (40%) */}
            <div className="w-full md:w-2/5 bg-teal/5 border border-teal/10 rounded-xl p-6 text-center space-y-4">
              <p className="text-sm font-bold text-navy mb-1">
                Authorized Applicator
              </p>
              <p className="text-xs text-muted">
                Penetron & Condura Conchem
              </p>
              <div className="text-4xl mt-2">
                ✅
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 5 — Final CTA (same as homepage) */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="relative min-h-[600px] bg-[#0D1B2A] overflow-hidden py-20"
      >
        {/* Glowing orb */}
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,170,204,0.15)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Decorative text */}
        <div className="absolute inset-0 text-[12rem] font-black text-white/[0.02] select-none pointer-events-none flex items-center justify-center">
          DIPASHI
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Not Sure Which Service You Need?
          </h1>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-xl mb-8">
            Get a free site inspection and we'll recommend the right waterproofing solution for your structure.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/50 text-xs">
              ✓ Free Inspection
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/50 text-xs">
              ✓ No Commitment
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/50 text-xs">
              ✓ Same Day Response
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
            <a href="tel:+919607875036" className="bg-teal text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-teal/90 transition-all duration-200 w-full sm:w-auto text-center">
              📞 Request Free Inspection
            </a>
            <a href="https://wa.me/919607875036" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-[#25D366]/90 transition-all duration-200 w-full sm:w-auto text-center">
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-white/50 text-sm mt-8 text-center">
            +91 9607875036 · +91 9607367129 · dipashienterprises@gmail.com
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default Services