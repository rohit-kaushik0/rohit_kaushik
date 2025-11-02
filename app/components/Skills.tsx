'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaCode, FaTools } from 'react-icons/fa'
import { SiTypescript, SiPython, SiCplusplus, SiDart, SiJavascript } from 'react-icons/si'
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: FaReact,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'JavaScript']
    },
    {
      category: 'Backend Development',
      icon: FaNodeJs,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Firebase', 'REST APIs']
    },
    {
      category: 'Programming Languages',
      icon: FaCode,
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Dart']
    },
    {
      category: 'Tools & Technologies',
      icon: FaTools,
      skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'Vercel', 'CI/CD']
    }
  ]

  const allSkills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 
    'Flutter', 'Python', 'C++', 'PostgreSQL', 'Firebase',
    'Dart', 'Tailwind CSS', 'JavaScript', 'Git', 'Docker',
    'AWS', 'MongoDB', 'REST APIs', 'Vercel', 'CI/CD'
  ]

  return (
    <section id="skills" className="section-clean border-t border-neutral-900">
      <div className="container-clean">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-mono">SKILLS</h2>
            <h3 className="text-4xl md:text-5xl font-light">
              Technical <span className="font-medium">Expertise</span>
            </h3>
          </motion.div>

          {/* All Skills Cloud - Primary Display */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 mb-12"
          >
            <motion.div 
              className="flex flex-wrap gap-3 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={scrollViewport}
              variants={staggerContainer}
            >
              {allSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={staggerItem}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full border border-neutral-800 text-sm font-mono text-neutral-500 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Categorized Skills - Secondary Display */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                className="glass p-5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                {/* Icon and category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/50 border border-neutral-700 flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/40 transition-all duration-300">
                    <category.icon className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-300 group-hover:text-cyan-400 transition-colors">
                    {category.category}
                  </h4>
                </div>

                {/* Skills list */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-xs text-neutral-500 flex items-center gap-2 font-mono">
                      <span className="text-neutral-600 group-hover:text-cyan-400 transition-colors duration-300">▹</span>
                      <span className="group-hover:text-neutral-400 transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
