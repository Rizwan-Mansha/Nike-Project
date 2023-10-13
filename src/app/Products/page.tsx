import ProductCart from '../../components/ProductCart'


import React from 'react'
import { Products } from '@/constants/mock'

const page = () => {
  return (
    <div className="w-full max-container justify-items-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4  min-h-screen ">
      {Products.map((item) => (
        <div className="mt-24" key={item.id}>
          <ProductCart
            key={item.id}
            productImage={item.image[0].url[0]}
            alt={item.name}
            productName={item.name}
            productPrice={item.price}
            id={item.id}
            tagline={item.tagline}
            category={item.category}
          />
        </div>
      ))}
    </div>
  );}

export default page
