'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
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
  const profileCardRef = useRef<HTMLDivElement>(null)
  const tiltFrame = useRef<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const card = profileCardRef.current
    if (!card) return

    if (shouldReduceMotion) {
      if (tiltFrame.current) {
        cancelAnimationFrame(tiltFrame.current)
        tiltFrame.current = null
      }
      card.style.transform = ''
      return
    }

    const updateTransform = (rotateX: number, rotateY: number, lift = 0) => {
      const element = profileCardRef.current
      if (!element) return
      element.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${lift}px)`
    }

    const handlePointerMove = (event: PointerEvent) => {
      const element = profileCardRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const relativeX = (event.clientX - rect.left) / rect.width
      const relativeY = (event.clientY - rect.top) / rect.height

      const rotateY = (relativeX - 0.5) * 18
      const rotateX = (0.5 - relativeY) * 14
      const lift = 22

      if (tiltFrame.current) {
        cancelAnimationFrame(tiltFrame.current)
      }

      tiltFrame.current = requestAnimationFrame(() => {
        updateTransform(rotateX, rotateY, lift)
        tiltFrame.current = null
      })
    }

    const resetTransform = () => {
      if (tiltFrame.current) {
        cancelAnimationFrame(tiltFrame.current)
      }

      tiltFrame.current = requestAnimationFrame(() => {
        updateTransform(0, 0, 0)
        tiltFrame.current = null
      })
    }

    updateTransform(0, 0, 0)

    card.addEventListener('pointermove', handlePointerMove)
    card.addEventListener('pointerleave', resetTransform)
    card.addEventListener('pointerup', resetTransform)
    card.addEventListener('pointercancel', resetTransform)

    return () => {
      card.removeEventListener('pointermove', handlePointerMove)
      card.removeEventListener('pointerleave', resetTransform)
      card.removeEventListener('pointerup', resetTransform)
      card.removeEventListener('pointercancel', resetTransform)
      if (tiltFrame.current) {
        cancelAnimationFrame(tiltFrame.current)
        tiltFrame.current = null
      }
      card.style.transform = ''
    }
  }, [shouldReduceMotion])

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
            {/* Profile Image with Immersive Depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 90 }}
              className="depth-scene"
            >
              <div
                ref={profileCardRef}
                className="relative group depth-card"
              >
                <div className="relative glass-strong p-1 rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-300/60 transition-all duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-3xl border border-cyan-400/20 opacity-20 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[inset_0_0_40px_rgba(12,226,255,0.08)]">
                    <div className="relative aspect-square">
                      <Image
                        src="/images/profile.png"
                        alt="Rohit Kaushik - Tech Lead"
                        fill
                        className="object-cover object-center brightness-110 saturate-125"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    <div className="absolute inset-x-0 -bottom-[18%] h-1/3 blur-3xl bg-gradient-to-t from-cyan-400/60 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
                    <div className="absolute inset-x-6 bottom-6 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
                <div className="pointer-events-none">
                  <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-cyan-400/25 blur-3xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                </div>
              </div>
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

