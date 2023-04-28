import React, { useState } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../assets/Index'
import { useSelector } from 'react-redux'

function Navbar() {

// Calculating total amount on products
const cartItem = useSelector((state)=>state.shoppingCart.value)
let total = 0
const Items = cartItem.map((item)=>
{
    total += item.quantity
});

// Open/Close Cart
const [showCart, setShowCart] = useState(false)
const ToggleCart = () =>
{
    setShowCart(prev=>!prev)
}

// Open/Close Menu with clothes in it
const [showMenu, setShowMenu] = useState(false)
const ToggleMenu = () =>
{
    setShowMenu(prev=>!prev)
}

  return (
    <div className='shadow-md'>
        <div className='max-w-[1240px] mx-auto px-4 h-20 w-full flex justify-between items-center'>
            <div>
                <Link to='/'>
                    <img src={Logo} alt="" className='w-10 sm:w-15 md:w-16'/>
                </Link>
            </div>

            <div>
                {/* Menu with clothes */}
                <div className='hidden sm:flex gap-x-4 items-center'>
                    <div className='z-20 h-20 relative group flex cursor-pointer items-center'>
                        <p className='text-lg font-bold'>MORE</p>
                        <IoMdArrowDropdown size={20} className='group-hover:rotate-180 group-hover:text-tertiary duration-300'/>
                        <div className='hidden group-hover:block hover:block absolute -translate-x-1/2 left-1/2 top-20 w-24 shadow-xl bg-white'>
                            <ul className='flex flex-col gap-y-2'>
                                {['Jackets','Pants','Shoes'].map((item)=>
                                (
                                    <Link key={`link-${item}`} to={`/category/${item}`}>
                                        <li className='duration-300 h-full hover:bg-tertiary hover:text-black p-4'>{item}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <ul className='flex gap-x-4'>
                    {['Tshirts', 'Hoodies'].map((item)=>
                    (
                        <Link key={`link-${item}`} to={`category/${item}`}>
                            <li>{item}</li>
                        </Link>
                    ))}
                    </ul>
                </div>

                {/* Clothes */}
                <div className='sm:hidden'>
                    <div className='z-20 h-20 relative group flex cursor-pointer items-center'>
                        <div className='flex items-center'
                        onClick={()=>ToggleMenu()} >
                            <p className='font-bold'>CLOTHING</p>
                            <IoMdArrowDropdown size={25} 
                            className={showMenu === true? 'rotate-180 duration-500 text-tertiary':'rotate-0 duration-500'}/>
                        </div>
                        {showMenu && <div className='absolute -translate-x-1/2 left-1/2 top-20 w-32 shadow-xl bg-white'>
                            <ul className='flex flex-col gap-y-2'>
                                {['Jackets','Pants','Shoes','Tshirts','Hoodies'].map((item)=>
                                (
                                    <Link key={`link-${item}`} to={`category/${item}`}>
                                        <li className='duration-300 h-full hover:bg-tertiary hover:text-black p-4'
                                        onClick={()=>setShowMenu(false)}>{item}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
            <div className='cursor-pointer relative'
            onClick={ToggleCart} >
                <AiOutlineShoppingCart className='text-primary' size={30}/>
                {total > 0 ? <div>
                    <p className='p-3 absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full font-bold bg-primary text-black'>
                        {total}
                    </p>
                </div>:''}
            </div>
            {/* Shopping Cart */}

            <AnimatePresence>
            {showCart && <Cart ToggleCart={ToggleCart}/> }
            </AnimatePresence>

        </div>
    </div>
  )
}

export default Navbar