import React from 'react'
import Logo from '../Assets/Logo.png'
import profileIcon from '../assets/profileIcon.svg'
import searchIcon from '../assets/searchIcon.svg'
import heartIcon from '../assets/heartIcon.svg'
import cartIcon from '../assets/cartIcon.svg'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center p-4 py-6 pr-20 pl-10'>
      <div>
        <img src={Logo} alt="Logo" className='h-10' />
      </div>
      <div>
        <ul className='flex gap-16'>
          <li className='font-medium'>Home</li>
          <li className='font-medium'>Shop</li>
          <li className='font-medium'>About</li>
          <li className='font-medium'>Contact</li>
        </ul>
      </div>
      <div className='flex gap-10 '>
        <img src={profileIcon} alt="Profile" className='h-6' />
        <img src={searchIcon} alt="Search" className='h-6' />
        <img src={heartIcon} alt="Wishlist" className='h-6' />
        <img src={cartIcon} alt="Cart" className='h-6' />
      </div>
    </div>
  )
}

export default Navbar