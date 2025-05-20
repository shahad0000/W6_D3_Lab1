import React from 'react'
import "../index.css"
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className='bg-amber-400 min-h-16'>
        <div className='lg:hidden text-4xl pt-4 pl-3'>
        <CiMenuBurger />
       </div>
        <ul className='h-13 gap-9 justify-center items-center font-bold hidden lg:flex' >          
            <li className=''>ALL CATEGORIES</li>
            <li className='text-gray-500'>TODAY DEALS</li>
            <li>ELECTRONICS</li>
            <li>CLOTHINGS</li>
            <li>COMPUTERS</li>
            <li>FURNITURES</li>
            <li>MOM & BABY</li>
            <li>BOOKS & MORE</li>
        </ul>
    </nav>
  )
}

export default Navbar