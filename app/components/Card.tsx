import React from 'react'
import { Product } from '../products'
import Link from 'next/link'


const Card = ({ name, img, price, id }: Product) => {
  return (
    <Link href={`/products/${id}`}>
      <div className='p-5 bg-white flex flex-col gap-3 items-center rounded-lg'>
        <p>{name}</p>
        <img src={img} width={250} height={500} alt="" />
        <p>{price}</p>
      </div>
    </Link>
  )
}

export default Card