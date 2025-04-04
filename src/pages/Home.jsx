import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Innovation from '../components/Innovation'
import Team from '../components/Team'
import Review from '../components/Review'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Footerlast from '../components/Footerlast'

const Home = () => {
  return (
    <div className='mains'>
    <Header/>
    <Hero />
    <Service/>
    <Innovation/>
    <Team/>
    <Review/>
    <Newsletter/>
    <Footer/>
    <Footerlast/>
    </div>
   
  )
}

export default Home