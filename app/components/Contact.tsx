'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'
import toast from 'react-hot-toast'
import { fadeInUp, fadeInLeft, fadeInRight, scrollViewport } from '../utils/animations'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast.success('Message sent! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="section-clean border-t border-neutral-900">
      <div className="container-clean">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-mono">CONTACT</h2>
            <h3 className="text-4xl md:text-5xl font-light">
              Let's <span className="font-medium">Connect</span>
            </h3>
            <p className="text-neutral-400 mt-4 text-sm max-w-2xl">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={fadeInLeft}
              className="space-y-6"
            >
              {/* Email Card */}
              <div className="glass p-5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/40 transition-all duration-300">
                    <HiMail className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">Email</p>
                    <a
                      href="mailto:kaushikhr2@gmail.com"
                      className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors font-mono"
                    >
                      kaushikhr2@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass p-5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/40 transition-all duration-300">
                    <HiPhone className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">Phone</p>
                    <a
                      href="tel:+918757052097"
                      className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors font-mono"
                    >
                      +91 8757052097
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-mono">Connect</p>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, href: 'https://github.com/rohit-kaushik0', label: 'GitHub' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rohit-hrk-517809231/', label: 'LinkedIn' },
                    { icon: FaTwitter, href: 'https://x.com/_rohit_hrk', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-800/50 border border-neutral-700 hover:bg-cyan-400/10 hover:border-cyan-400/40 flex items-center justify-center text-neutral-400 hover:text-cyan-400 transition-all duration-300"
                      aria-label={label}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={fadeInRight}
            >
              <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:border-cyan-400 focus:bg-cyan-400/5 outline-none transition-all duration-300 text-white placeholder-neutral-600"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:border-cyan-400 focus:bg-cyan-400/5 outline-none transition-all duration-300 text-white placeholder-neutral-600"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-neutral-500 mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:border-cyan-400 focus:bg-cyan-400/5 outline-none transition-all duration-300 text-white placeholder-neutral-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-300 font-medium hover:bg-cyan-400/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
