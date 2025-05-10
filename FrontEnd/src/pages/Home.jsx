import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import ExamCategories from '../components/ExamCategories';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <FeatureCards/>
        <GallerySection/>
        <ContactSection/>   
    </>
  )
}

export default Home