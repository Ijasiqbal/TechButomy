import React from 'react'
import Navbar from '../Components/Navbar'
import BannerSection from '../Components/LandingPage/BannerSection'
import Categories from '../Components/LandingPage/Categories'
import Products from '../Components/LandingPage/Products'
import Footer from '../Components/Footer'
import Collage from '../Components/LandingPage/Collage'

const LandingPage = () => {


  return (
    <div>
      <Navbar />
      <BannerSection />
      <Categories />
      <Products />
      <Collage />
      <Footer />

    </div>
  )
}

export default LandingPage
