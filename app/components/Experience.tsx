'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaBriefcase, FaCode, FaUsers, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { HiTrendingUp } from 'react-icons/hi'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scrollViewport } from '../utils/animations'

interface Role {
  title: string
  period: string
  description: string[]
  current?: boolean
}

interface CompanyExperience {
  company: string
  totalPeriod?: string
  roles: Role[]
  icon?: React.ComponentType<{ className?: string }>
}

const Experience: React.FC = () => {
  const experiences: CompanyExperience[] = [
    {
      company: "Zylentrix",
      totalPeriod: "2025 — Present",
      icon: FaRocket,
      roles: [
        {
          title: "Tech Lead",
          period: "2025 — Present",
          current: true,
          description: [
            "Leading the technical division of Zylentrix - ZureLabs",
            "Architecting and guiding products that bridge creativity, intelligence, and user experience",
            "Mentoring teams and driving innovation from concept to launch",
          ]
        },
    {
      title: "Full Stack Developer",
          period: "2025 — 2025",
          description: [
            "Developed the Zylentrix Job Support App for international job seekers",
            "Built responsive UI components with Flutter and Dart",
            "Implemented Firebase backend with authentication and cloud functions",
            "Optimized app performance and user experience",
          ]
        }
      ]
    },
    {
      company: "Internzity",
      icon: FaUsers,
      roles: [
        {
          title: "Software Developer and Mentor",
      period: "2025 — Present",
          current: true,
          description: [
            "Developing and mentoring students in Full Stack development and AI/ML",
            "Providing technical support and guidance to students",
            "Helping students build their own projects",
            "Mentoring students in competitive programming and problem solving",
          ]
        }
      ]
    },
    {
      company: "Outlier",
      icon: FaLaptopCode,
      roles: [
        {
          title: "Coding Expertise for AI Training",
          period: "2024 — Present",
          current: true,
      description: [
            "Evaluating and refining AI-generated programming solutions, including code generation, debugging, and optimization",
            "Creating prompts and assessing outputs for quality and efficiency",
            "Focused on enhancing AI performance and delivering high-quality, reliable programming solutions",
          ]
        }
      ]
    },
    {
      company: "Bharat Intern",
      icon: FaCode,
      roles: [
    {
      title: "Application Developer",
      period: "2024",
      description: [
        "Developed mobile applications using Flutter framework",
        "Implemented responsive designs and modern UI patterns",
        "Enhanced features based on user feedback",
          ]
        }
      ]
    },
    {
      company: "Internship Studio",
      icon: FaBriefcase,
      roles: [
    {
      title: "Web Development Intern",
      period: "2024",
      description: [
        "Built responsive websites with HTML5, CSS3, and JavaScript",
        "Collaborated with clients on custom solutions",
        "Delivered pixel-perfect designs",
          ]
        }
      ]
    },
  ]

  return (
    <section id="experience" className="section-clean border-t border-neutral-900 relative overflow-hidden">
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
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-mono">EXPERIENCE</h2>
            <h3 className="text-4xl md:text-5xl font-light">
              Career <span className="font-medium">Journey</span>
            </h3>
            <p className="text-neutral-400 mt-4 max-w-2xl text-sm">
              Building technology that creates lasting impact
            </p>
          </motion.div>

          {/* Goal at the top */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                variants={fadeInUp}
            className="mb-16"
          >
          <div className="glass-strong p-6 rounded-2xl border border-white/10 hover:border-cyan-400/30 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800/50 border border-neutral-700 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-300">
                <HiTrendingUp className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">Mission</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Building technology that empowers people and organizations — driving innovation, 
                  leading teams, and creating solutions that make a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

          {/* Timeline Roadmap */}
          <div className="relative">
          {/* Animated connecting line with flowing particles */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px overflow-visible">
            {/* Base gradient line - subtle neutral by default */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent" />
            
          </div>

          {/* Experience nodes */}
          <div className="space-y-16">
            {experiences.map((company, companyIndex) => (
              <motion.div
                key={companyIndex}
                initial="hidden"
                whileInView="visible"
                viewport={scrollViewport}
                variants={companyIndex % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`relative ${companyIndex % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
              >
                {/* Timeline node - centered on line */}
                <div className={`absolute top-8 z-10 ${companyIndex % 2 === 0 ? 'right-[-12px]' : 'left-[-12px]'} hidden md:block`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: companyIndex * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="relative">
                      <div className="relative w-6 h-6 rounded-full bg-neutral-600 border-4 border-black flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300">
                        {company.roles[0].current && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile timeline node */}
                <div className="absolute top-8 left-[20px] z-10 md:hidden">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: companyIndex * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="relative">
                      <div className="relative w-6 h-6 rounded-full bg-neutral-600 border-4 border-black flex items-center justify-center hover:bg-cyan-400 transition-colors duration-300">
                        {company.roles[0].current && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Experience card */}
                <div className={`ml-20 md:ml-0 ${companyIndex % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group cursor-default hover:border-cyan-400/30 transition-all duration-300"
                  >
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Header with Icon and Current Badge */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div className="inline-flex p-2 rounded-lg bg-neutral-800/50 border border-neutral-700 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-300">
                              {company.icon && <company.icon className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />}
                            </div>
                          </div>
                          
                          {/* Company and Period */}
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {company.company}
                            </h4>
                            {company.totalPeriod && (
                              <div className="text-xs text-neutral-500 font-mono">
                                {company.totalPeriod}
                              </div>
                            )}
                  </div>
                </div>

                        {/* Current role indicator */}
                        {company.roles[0].current && (
                          <div className="flex items-center gap-1.5 bg-neutral-800/50 px-2 py-1 rounded-full border border-neutral-700 flex-shrink-0 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-300">
                            <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse group-hover:bg-cyan-400 transition-colors duration-300" />
                            <span className="text-xs text-neutral-400 font-mono group-hover:text-cyan-400 transition-colors duration-300">CURRENT</span>
                          </div>
                        )}
                      </div>

                      {/* Roles */}
                      <div className="space-y-4">
                        {company.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className={roleIndex > 0 ? 'pt-4 border-t border-neutral-800/50' : ''}>
                            <div className="mb-2">
                              <h5 className="text-base font-medium text-neutral-200">{role.title}</h5>
                              <div className="text-xs text-neutral-500 font-mono">{role.period}</div>
                            </div>
                            
                <ul className="space-y-2">
                              {role.description.map((point, i) => (
                                <li key={i} className="text-sm text-neutral-400 flex gap-2 items-start leading-relaxed">
                                  <span className="text-neutral-600 group-hover:text-cyan-400 mt-1 flex-shrink-0 text-xs transition-colors duration-300">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Starting point */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={fadeInUp}
            className="relative mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 hover:border-cyan-400/30 group transition-all duration-300">
              <FaGraduationCap className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">The Journey Begins</span>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
