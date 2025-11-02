'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import { Project } from '../types'
import { fadeInUp, staggerContainer, staggerItem, scrollViewport } from '../utils/animations'

const Projects: React.FC = () => {
  const projects: Project[] = [


    {
      title: 'InternZity',
      description: 'It is a job portal website where we will find perfect matches, crafts personalized resumes, and applies to hundreds of jobs while you focus on what matters most.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Node.js', 'Express'],
      github: '',
      live: 'https://www.internzity.com',
      imageUrl: '/images/projects/Intenzity.png'
    },
    

    {
      title: 'JobZure',
      description: 'It is a job portal website where we will find perfect matches, crafts personalized resumes, and applies to hundreds of jobs while you focus on what matters most.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Express'],
      github: '',
      live: 'https://www.jobzure.com',
      imageUrl: '/images/projects/JobZure.png'
    },
    
    {
      title: 'ZureLabs',
      description: 'It is our portfolio website for our company ZureLabs which tells our story and our services.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
      github: '',
      live: 'https://www.zurelabs.com',
      imageUrl: '/images/projects/zurelabs.png'
    },

    {
      title: 'ExperienZHub',
      description: 'ExperienZHub is a platform for students to learn from industry projects and earn completion certificates to build your skills and portfolio.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express'],
      github: '',
      live: 'https://www.experienzhub.com',
      imageUrl: '/images/projects/exprienZhub.png'
    },
    {
      title: 'Zynterview',
      description: 'A Platform Built for Both Sides of the InterviewWhether you are hiring or getting hired, Zynterview makes every interview faster, smarter, and more effective with AI-powered technology.',
      technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Express'],
      github: '',
      live: 'https://www.zynterview.com',
      imageUrl: '/images/projects/zynterview.png'
    },

    {
      title: 'Stock Price Prediction',
      description: 'ML-powered platform for predicting stock prices with real-time visualization for global and Indian markets.',
      technologies: ['Python', 'Streamlit', 'Keras', 'Pandas'],
      github: 'https://github.com/rohit-kaushik0/Stock_maket_prediction',
      live: 'https://hrkstockmarketpridictiction.streamlit.app/',
      imageUrl: '/images/projects/Stock market.png'
    },
    
    {
      title: 'GreenskyHub',
      description: 'Modern platform promoting sustainable aviation practices with interactive content.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/rohit-kaushik0/greenskyhub',
      live: 'https://rohit-kaushik0.github.io/greenskyhub/',
      imageUrl: '/images/projects/greensky_ss.png'
    },
    {
      title: 'Weather App',
      description: 'Cross-platform mobile app providing real-time weather data and forecasts.',
      technologies: ['Flutter', 'Dart', 'API'],
      github: 'https://github.com/rohit-kaushik0/Weather_forcasting_App',
      live: 'https://www.linkedin.com/posts/rohit-hrk-517809231_flutter-weatherapp-mobiledevelopment-activity-7227913404030574592-BdIR',
      imageUrl: '/images/projects/wather_ss.png'
    },
  ]

  return (
    <section id="projects" className="section-clean border-t border-neutral-900">
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
            <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 font-mono">SELECTED WORK</h2>
          <h3 className="text-4xl md:text-5xl font-light">
            Featured <span className="font-medium">Projects</span>
          </h3>
        </motion.div>

          {/* Projects grid - 2 columns on desktop */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={scrollViewport}
            variants={staggerContainer}
          >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              className="group"
            >
                {/* Compact project card */}
                <motion.div 
                  className="glass p-4 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Compact image preview */}
                    <div className="relative h-40 mb-4 overflow-hidden bg-neutral-900 rounded-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                        className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      {/* Title */}
                      <div className="mb-3">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-400 leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs border border-neutral-800 rounded-full text-neutral-500 font-mono hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links with labels */}
                      <div className="flex gap-3 pt-3 border-t border-neutral-800/50">
                        {/* GitHub Link - Conditional */}
                        {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors duration-300 text-xs font-mono group/link"
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>GitHub</span>
                          <ArrowUpRightIcon className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </motion.a>
                        ) : (
                          <div
                            className="flex items-center gap-2 text-neutral-700 cursor-not-allowed text-xs font-mono opacity-50"
                            title="Source code is private"
                          >
                            <FaGithub className="w-4 h-4" />
                            <span>Private</span>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        )}
                        
                        {/* Live Demo Link */}
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors duration-300 text-xs font-mono group/link"
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt className="w-3 h-3" />
                          <span>Live Demo</span>
                          <ArrowUpRightIcon className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
