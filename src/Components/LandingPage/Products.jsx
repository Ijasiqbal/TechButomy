import React from 'react'
import syltherine from '../../assets/syltherine.png'
import leviosa from '../../assets/leviosa.png'
import lolito from '../../assets/lolito.png'
import respira from '../../assets/respira.png'
import grifo from '../../assets/grifo.png'
import muggo from '../../assets/muggo.png'
import pingky from '../../assets/pingky.png'
import potty from '../../assets/potty.png'
import ProductCard from '../ProductCard'

function Products() {
  const products = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      cutPrice: 'Rp 3.500.000',
      img: syltherine
    },
    {
      name: 'Leviosa',
      description: 'Ergonomic office chair',
      price: 'Rp 2.000.000',
      cutPrice: 'Rp 2.800.000',
      img: leviosa
    },
    {
      name: 'Lolito',
      description: 'Modern dining chair',
      price: 'Rp 1.500.000',
      cutPrice: 'Rp 2.000.000',
      img: lolito
    },
    {
      name: 'Respira',
      description: 'Comfortable lounge chair',
      price: 'Rp 3.000.000',
      cutPrice: 'Rp 3.800.000',
      img: respira
    },
    {
      name: 'Grifo',
      description: 'Stylish bar stool',
      price: 'Rp 1.800.000',
      cutPrice: 'Rp 2.300.000',
      img: grifo
    },
    {
      name: 'Muggo',
      description: 'Elegant armchair',
      price: 'Rp 2.200.000',
      cutPrice: 'Rp 2.900.000',
      img: muggo
    },
    {
      name: 'Pingky',
      description: 'Comfortable rocking chair',
      price: 'Rp 2.700.000',
      cutPrice: 'Rp 3.500.000',
      img: pingky
    },
    {
      name: 'Potty',
      description: 'Modern outdoor chair',
      price: 'Rp 2.400.000',
      cutPrice: 'Rp 3.200.000',
      img: potty
    }
  ]

  return (
    <div className='pb-10'>
      <div className='pb-5'>
        <h1 className='text-center font-bold text-[40px]'>Our Products</h1>
      </div>
      <div className='px-10 flex flex-wrap gap-10 justify-center pb-10'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            cutPrice={product.cutPrice}
            img={product.img}
          />
        ))}
      </div>
      <div className='flex justify-center pb-10'>
        <div className='inline-block px-16 py-3 font-semibold border border-[#B88E2F] text-[#B88E2F]'>
          Show More
        </div>
      </div>
    </div>
  )
}

export default Products