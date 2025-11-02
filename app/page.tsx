'use client'

import Navbar from './components/Navbar'
import Home from './components/hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import ScrollToTop from './components/ScrollToTop'
import InteractiveCodingBackground from './components/Background'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'

export default function Page() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <InteractiveCodingBackground />
      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}
