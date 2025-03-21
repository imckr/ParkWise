import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { Hero } from './Hero'
import { Features } from './features'
import { Testimonials } from '../Testimonial/Testimonials'
import { Footer } from '../Footer/Footer'




const LandingPage = () => {
  return (
    <div>
        

<main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
      
    </div>
  )
}

export default LandingPage
