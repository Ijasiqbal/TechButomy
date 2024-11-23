import React from 'react'
import images from '../../assets/images.svg'

function Collage() {
  return (
    <div className='pb-10 relative'>
      <div className='relative'>
        <img src={images} alt="" className='w-full' />
        <div className='absolute inset-0 flex flex-col top-[-50px] items-center justify-start '>
          <p className='text-[20px] text-[#616161]'>Share your setup with</p>
          <h1 className='text-[40px] font-bold'>#FuniroFurniture</h1>
        </div>
      </div>
    </div>
  )
}

export default Collage