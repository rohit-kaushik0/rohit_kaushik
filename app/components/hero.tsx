'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const TypingText: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Full Stack Developer crafting digital experiences at the intersection of design, technology, and user experience.'
  const typingSpeed = 30 // milliseconds per character

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, typingSpeed)

    return () => clearInterval(interval)
  }, [])

  const renderStyledText = (text: string) => {
    const highlightWords = ['Full Stack Developer', 'design', 'technology', 'user experience']
    let result = text
    
    // Create parts array to track positions
    const parts: Array<{ text: string; isHighlighted: boolean }> = []
    let lastIndex = 0
    
    highlightWords.forEach(word => {
      const index = text.indexOf(word, lastIndex)
      if (index !== -1 && index < text.length) {
        // Add text before the highlight
        if (index > lastIndex) {
          parts.push({ text: text.slice(lastIndex, index), isHighlighted: false })
        }
        // Add highlighted text
        parts.push({ text: text.slice(index, index + word.length), isHighlighted: true })
        lastIndex = index + word.length
      }
    })
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), isHighlighted: false })
    }
    
    return parts.map((part, index) => (
      <span key={index} className={part.isHighlighted ? 'text-white font-medium' : ''}>
        {part.text}
      </span>
    ))
  }

  return (
    <>
      {renderStyledText(displayedText)}
      <span className="animate-pulse">|</span>
    </>
  )
}

const Home: React.FC = () => {
  const handleResumeClick = () => {
    window.open('/resume/resume.pdf', '_blank', 'noopener,noreferrer')
  }

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left - Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Portfolio label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                PORTFOLIO / {currentYear}
              </p>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none">
                <div className="font-bold">Rohit</div>
                <div className="text-neutral-400">Kaushik</div>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                <TypingText />
              </p>
            </motion.div>

            {/* Availability */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 text-neutral-400"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm">Available for work — India</span>
            </motion.div> */}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToWork}
                className="btn-clean flex items-center gap-2 hover-glow-cyan"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDownIcon className="w-4 h-4" />
                </motion.div>
              </motion.button>
              <motion.button
                onClick={handleResumeClick}
                className="btn-clean"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-6"
            >
              {[
                { icon: FaGithub, href: 'https://github.com/rohit-kaushik0', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rohit-hrk-517809231/', label: 'LinkedIn' },
                { icon: FaInstagram, href: 'https://www.instagram.com/_rohit_hrk', label: 'Instagram' },
                { icon: FaTwitter, href: 'https://x.com/_rohit_hrk', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8 lg:border-l lg:border-neutral-900 lg:pl-12"
          >
            {/* Profile Image with Minimalist Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glass frame container - cyan only on hover */}
              <div className="relative glass-strong p-1 rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Subtle cyan border on hover */}
                <div className="absolute inset-0 border-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Inner glass container */}
                <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden">
                  {/* Profile Image */}
                  <div className="relative aspect-square">
                    <Image
                      src="/images/profile.png"
                      alt="Rohit Kaushik - Tech Lead"
                      fill
                      className="object-cover object-center brightness-110"
                      priority
                    />
                    
                    {/* Simple dark overlay - reduced opacity for brighter image */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />
                  </div>
                  
                  {/* Subtle consistent cyan glow on hover */}
                  <div className="absolute -inset-1 bg-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                </div>
              </div>

              {/* Minimal decorative glow - cyan only on hover */}
              <motion.div
                className="absolute -top-2 -right-2 w-16 h-16 bg-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>

            {/* Currently */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="space-y-4"
            >
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-mono">CURRENTLY</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Tech Lead<br />
                @ <span className="text-white font-medium">Zylentrix</span><br />
                <span className="text-neutral-600 font-mono text-xs">2025 — Present</span>
              </p>
            </motion.div>

            {/* Focus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="space-y-4"
            >
              <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-mono">FOCUS</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Flutter', 'Node.js', 'Python'].map((tech, index) => (
                  <motion.span 
                    key={tech} 
                    className="px-4 py-2 rounded-full border border-neutral-800 text-sm font-mono text-neutral-500 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
