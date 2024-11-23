import React from 'react'
import Banner from '../../assets/banner.jpg'

const BannerSection = () => {
  return (
    <div className='relative'>
      <img src={Banner} alt="" />
      <div className='bg-[#FFF3E3] inline-block absolute w-[45%] top-[190px] left-[50%] p-12'>
        <p className='font-bold tracking-[3px]'>New Arrival</p>
        <h1 className='font-bold leading-[65px] text-[52px] text-[#B88E2F]'>Discover Our <br />New Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <div className='bg-[#B88E2F] px-8 py-4 inline-block text-white font-bold mt-10'>
        BUY NOW
      </div>
      </div>
      
      
    </div>
  )
}

export default BannerSection
