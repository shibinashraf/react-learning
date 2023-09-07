import React from 'react'

const Nav = () => {
  return (
    <div className='h-[6rem] bg-gray-300  flex items-center justify-between'>
        <div className='ml-8 text-3xl font-bold text-red-600'>Company</div>
        <ul className='text-black font-bold gap-8 flex flex-row w-screen justify-end p-8 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            </ul>
    </div>
  )
}

export default Nav;