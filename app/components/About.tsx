'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaCode, FaBuilding } from 'react-icons/fa'
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations'

const About: React.FC = () => {
  return (
    <section id="about" className="section-clean border-t border-neutral-900">
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
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-mono">ABOUT</h2>
            <h3 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl">
              I'm a passionate{' '}
              <span className="font-medium">Tech Lead and Full-Stack Developer</span>{' '}
              who thrives on turning ideas into scalable, impactful digital products.
            </h3>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="space-y-5 text-neutral-400 leading-relaxed mb-16 max-w-3xl text-sm"
          >
            <p>
              After completing my <span className="text-white">B.E. in Computer Science & Engineering</span>, 
              I stepped into the world of technology not just to code but to{' '}
              <span className="text-white">build, lead, and innovate</span>.
            </p>

            <p>
              Currently leading the technical division of{' '}
              <span className="text-white">Zylentrix - ZureLabs</span>, I've had the opportunity to 
              architect and guide products that bridge creativity, intelligence, and user experience. 
              My journey has been shaped by projects like{' '}
              <span className="text-white">Internzity</span>,{' '}
              <span className="text-white">JobZure</span> (Web & App),{' '}
              <span className="text-white">ExperienzHub</span>,{' '}
              <span className="text-white">ZureLabs</span>, and the{' '}
              <span className="text-white">Weather Forecast App</span>, each one teaching me 
              something new about product thinking, scalability, and user impact.
            </p>

            <p>
              I'm deeply passionate about blending{' '}
              <span className="text-white">AI, software engineering, and product design</span>{' '}
              to create solutions that empower people and organizations. Beyond development, 
              I enjoy mentoring teams, fostering innovation, and driving ideas from concept to launch.
            </p>

            <p>
              Always eager to collaborate, learn, and lead with one goal in mind:{' '}
              <span className="text-white font-medium">to build technology that creates lasting impact</span>.
            </p>
          </motion.div>

          {/* Stats Grid - Single Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: '15+', label: 'Projects', Icon: FaBriefcase },
              { value: '1+', label: 'Years', Icon: FaCalendarAlt },
              { value: '20+', label: 'Technologies', Icon: FaCode },
              { value: '3', label: 'Companies', Icon: FaBuilding },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="glass p-5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group cursor-default"
                variants={staggerItem}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-300">
                    <stat.Icon className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-3xl font-light mb-1 text-white transition-all duration-300 group-hover:text-cyan-400 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider group-hover:text-neutral-400 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
