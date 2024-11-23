import React from 'react'
import Navbar from '../Components/Navbar'
import BannerSection from '../Components/LandingPage/BannerSection'
import Categories from '../Components/LandingPage/Categories'
import Products from '../Components/LandingPage/Products'
import Footer from '../Components/Footer'
import Collage from '../Components/LandingPage/Collage'
import Carousel from '../Components/LandingPage/Carousel'

const LandingPage = () => {


  return (
    <div>
      <Navbar />
      <BannerSection />
      <Categories />
      <Products />
      <Carousel />
      <Collage />
      <Footer />

    </div>
  )
}

export default LandingPage
