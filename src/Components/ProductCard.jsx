import React from 'react'
import { FaShareAlt, FaExchangeAlt, FaHeart } from 'react-icons/fa'

function ProductCard({ name, description, price, cutPrice, img }) {
  return (
    <div className='inline-block w-[22%] relative group'>
      <div className='flex justify-center'>
        <img src={img} alt={name} className='w-full h-[350px] object-cover' />
      </div>
      <div className='p-4 pt-6 bg-[#F4F5F7]'>
        <h1 className='font-semibold text-[24px] leading-[28.8px]'>{name}</h1>
        <p className='text-[16px] text-[#898989] leading-[24px] font-medium'>{description}</p>
        <div className='flex items-center justify-between'>
          <span className='text-[20px] font-semibold leading-[30px]'>{price}</span>
          <span className='text-[16px] font-normal line-through text-gray-500 leading-[24px]'>{cutPrice}</span>
        </div>
      </div>
      <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4'>
        <button className='bg-white text-[#B88E2F] px-8 py-2 font-semibold'>
          Add to Cart
        </button>
        <div className='flex space-x-1'>
          <button className=' text-white px-4 py-2 flex items-center'>
            <FaShareAlt className='mr-2' /> Share
          </button>
          <button className=' text-white px-4 py-2 flex items-center'>
            <FaExchangeAlt className='mr-2' /> Compare
          </button>
          <button className=' text-white px-4 py-2 flex items-center'>
            <FaHeart className='mr-2' /> Like
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard