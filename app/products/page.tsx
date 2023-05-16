import React from 'react'
import { products } from '../products'
import Card from '../components/Card'


type Props = {}

const page = (props: Props) => {



  return (
   <div className='flex justify-between px-24'>
        {
          products.map( (product, i) => <Card key={product.id} id={product.id} name={product.name} img={product.img} price={product.price}/>)
        }
   </div>
  )
}

export default page