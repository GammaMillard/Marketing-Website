import React from 'react'
import Title from './Title'
import BtnLink from './BtnLink'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='py-12 flex justify-between items-center'>
        <Title />
        <ul className='flex gap-6 text-white'>
            <BtnLink name={'Home'} url={'/'}/>
            <BtnLink name={'About us'} url={''}/>
            <BtnLink name={'Products'} url={'/products'}/>
            <BtnLink name={'Contact'} url={''}/>
        </ul>
        <button className='py-2 px-10 border rounded-full border-yellow-strong text-yellow-strong'>Sign In</button>
    </nav>
  )
}

export default NavBar