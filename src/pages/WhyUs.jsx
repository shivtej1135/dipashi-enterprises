import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const WhyUs = () => {
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
            <span className="ml-1.5 text-teal">Why Us</span>
          </motion.div>

          {/* Top label */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
            className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            WHY DIPASHI
          </motion.div>

          {/* Heading */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-6"
          >
            Why <span className="text-teal">Industry Leaders</span> Choose Us
          </motion.h1>

          {/* Subheading */}
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 text-lg font-light leading-relaxed max-w-xl"
          >
            25+ years of proven expertise, certified materials, and a team that treats your property like their own.
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
              <span className="text-white/70 text-xs font-medium">✓ Authorized Applicator</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Written Warranty</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal inline-block"></div>
              <span className="text-white/70 text-xs font-medium">✓ Free Site Inspection</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 2 — The Dipashi Advantage */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="bg-white py-24 px-8"
      >
        <div className="container mx-auto px-8">
          <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            THE DIPASHI ADVANTAGE
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">
            What Makes Us Different
          </h2>
          <p className="text-muted text-base font-light text-center mb-16 max-w-xl mx-auto">
            We don't just fix leaks — we provide peace of mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Advantages data */}
            {[
              {
                icon: "🏆",
                title: "25+ Years Experience",
                desc: "Since 1999, we have been protecting structures across Maharashtra. Our experience means we have seen every type of leakage problem and know exactly how to fix it permanently.",
                color: "teal",
              },
              {
                icon: "🛡️",
                title: "Up To 10 Year Warranty",
                desc: "Every project comes with a written warranty certificate. We stand behind our work — if it leaks within the warranty period, we fix it at no cost.",
                color: "blue",
              },
              {
                icon: "✅",
                title: "Authorized Applicator",
                desc: "We are authorized applicators of Penetron and Condura Conchem — two of the world's leading waterproofing systems. This means certified quality on every project.",
                color: "emerald",
              },
              {
                icon: "🔬",
                title: "Premium Materials Only",
                desc: "We use only industry-leading materials — Penetron, Condura Conchem, Fosroc, Kemprol and Sika. No cheap substitutes, ever.",
                color: "purple",
              },
              {
                icon: "👷",
                title: "Skilled Technicians",
                desc: "Our team consists of trained and experienced waterproofing technicians who understand the science behind every solution they apply.",
                color: "orange",
              },
              {
                icon: "⏱️",
                title: "On Time Delivery",
                desc: "We respect your time. Every project has a defined timeline and we ensure completion within the deadline — no delays, no excuses.",
                color: "rose",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl bg-white border border-gray-100 group border-t-2 border-t-[${[
                    'teal-500',
                    'blue-500',
                    'emerald-500',
                    'purple-500',
                    'orange-500',
                    'rose-500',
                  ][index]}]`}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.08)" }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl bg-${[
                    'teal',
                    'blue',
                    'emerald',
                    'purple',
                    'orange',
                    'rose',
                  ][index]}/10`}>
                  <span aria-hidden="true">{advantage.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SECTION 3 — Our Process (timeline style) */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        className="bg-[#F4F7FB] py-24 px-8"
      >
        <div className="container mx-auto px-8">
          <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-4">
            Our 5-Step Process
          </h2>
          <p className="text-muted text-base font-light text-center mb-16 max-w-xl mx-auto">
            From your first call to warranty handover — every step is handled professionally.
          </p>
          <div className="relative max-w-3xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-teal/20 hidden md:block" />

            {/* Steps data */}
            {[
              { number: "01", title: "Site Inspection", desc: "Our technician visits your property for a detailed analysis of the problem area." },
              { number: "02", title: "Problem Analysis", desc: "We identify the root cause — leakage source, moisture level, structural condition." },
              { number: "03", title: "Solution Design", desc: "A custom waterproofing plan is created using the right system for your structure." },
              { number: "04", title: "Professional Application", desc: "Certified technicians apply the treatment in layers as per site requirement." },
              { number: "05", title: "Flood Testing & Handover", desc: "Flood testing ensures zero leakage. Written warranty certificate issued on handover." },
            ].map((step, index) => {
              const getInitial = (index) => index % 2 === 0
                ? { opacity: 0, x: -40 }
                : { opacity: 0, x: 40 };

              return (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={getInitial(index)}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="flex items-start">
                    {index % 2 === 0 ? (
                      // Odd steps (0-indexed: 0, 2, 4) - content on left, number on right
                      <>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm max-w-xs w-full">
                          <h3 className="font-semibold mb-1 text-base">{step.title}</h3>
                          <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                        </div>
                        <div className="ml-6 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-teal text-white font-bold text-sm flex items-center justify-center z-10 relative">
                            {step.number}
                          </div>
                        </div>
                      </>
                    ) : (
                      // Even steps (0-indexed: 1, 3) - number on left, content on right
                      <>
                        <div className="mr-6 flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-teal text-white font-bold text-sm flex items-center justify-center z-10 relative">
                            {step.number}
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm max-w-xs w-full">
                          <h3 className="font-semibold mb-1 text-base">{step.title}</h3>
                          <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* SECTION 4 — Certifications & Materials */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        className="bg-[#0D1B2A] py-24 px-8"
      >
        <div className="container mx-auto px-8">
          <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            CERTIFIED & TRUSTED
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 text-white">
            Authorized By The Best
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left card - Authorized Applicator */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10"
            >
              <div className="text-5xl mb-4">🏅</div>
              <h3 className="text-white font-bold text-xl mb-3">
                Authorized Applicator
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We are officially authorized applicators of Penetron and Condura Conchem — two of the world's most trusted crystalline waterproofing systems.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Penetron
                </span>
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Condura Conchem
                </span>
              </div>
            </motion.div>

            {/* Right card - Premium Material Brands */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-white font-bold text-xl mb-3">
                Premium Material Brands
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Every project uses only industry-leading certified materials. No substitutes, no shortcuts.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Penetron
                </span>
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Sika
                </span>
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Fosroc
                </span>
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Kemperol
                </span>
                <span className="bg-teal/10 border border-teal/20 text-teal text-xs px-4 py-2 rounded-full font-medium">
                  Condura Conchem
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 5 — Testimonial / Trust Statement */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        className="bg-white py-24 px-8"
      >
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto bg-surface rounded-3xl p-12 text-center border border-gray-100">
            <p className="text-8xl text-teal/20 font-serif leading-none mb-4">
              "
            </p>
            <p className="text-2xl font-light text-navy leading-relaxed tracking-tight mb-8 max-w-xl mx-auto">
              We don't just fix leaks — we provide peace of mind. Every project we complete is backed by our personal commitment to quality and a written warranty you can count on.
            </p>
            <p className="text-muted text-sm font-medium">
              — Dipashi Enterprises, Phaltan
            </p>
          </div>
        </div>
      </motion.div>

      {/* SECTION 6 — Final CTA */}
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
            Ready To Protect Your Property?
          </h1>
          <p className="text-white/50 text-lg font-light leading-relaxed max-w-xl mb-8">
            Get a free site inspection today. No commitment, no charges.
          </p>
          <div className="flex gap-4 mb-8">
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
          <div className="flex gap-4">
            <a href="tel:+919607875036" className="bg-teal text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-teal/90 transition-all duration-200">
              📞 Request Free Inspection
            </a>
            <a href="https://wa.me/919607875036" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-[#25D366]/90 transition-all duration-200">
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-white/50 text-sm  mt-8">
            +91 9607875036 · dipashienterprises@gmail.com
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default WhyUs