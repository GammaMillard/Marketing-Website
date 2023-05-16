import Link from 'next/link'
import React from 'react'

type Props = {
    [key:string] : string
}

const BtnLink = ({name, url}: Props) => {
  return (
    <Link href={url} className='p-2 hover:scale-110 transition-all duration-150'>{name}</Link>
  )
}

export default BtnLink