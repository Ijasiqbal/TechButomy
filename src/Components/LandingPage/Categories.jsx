import React from 'react'
import living from '../../Assets/living.svg'
import dining from '../../Assets/dining.svg'
import bedroom from '../../Assets/bedroom.svg'

function Categories() {
  return (
    <div className='py-16 pb-10'>
        <div className="text-center">
            <h1 className='font-bold text-[32px]'>Browse The Range</h1>
            <p className='text-[20px] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex gap-8 justify-center pt-16'>
            <div className=''>
                <img src={dining} alt="" />
                <p className='text-center pt-6 text-[24px] font-semibold'>Dining</p>
            </div>
            <div>
                <img src={living} alt="" />
                <p className='text-center pt-6 text-[24px] font-semibold'>Living</p>
            </div>
            <div>
                <img src={bedroom} alt="" />
                <p className='text-center pt-6 text-[24px] font-semibold'>Bedroom</p>
            </div>
        </div>
      
    </div>
  )
}

export default Categories
