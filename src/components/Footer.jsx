import React from 'react'
import { Logo } from '../assets/Index'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'


function Footer() {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto border-b-2 border-black flex justify-around py-10 px-4'>
            <div>
                <a href="#Home">
                    <img src={Logo} alt='Logo' className='w-10 sm:w-20'/>
                </a>
            </div>
            <div>
                <h1 className='text-lg pb-2'>NAVIGATION</h1>
                <ul className='flex flex-col gap-y-2'>
                    {['Home','New','Style','NewsLetter'].map((item)=>
                    (
                            <a key={`link-${item}`} href={`#${item}`}>
                                <li>{item}</li>
                            </a>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className='text-lg pb-2'>CONTACT US</h1>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center gap-x-2 hover:text-[#3b5998] duration-300 cursor-pointer group'><AiFillFacebook size={30}/>
                        <h1 className='group-hover:text-inherit text-white'>Facebook</h1>
                    </div>
                    <div className='flex items-center gap-x-2 hover:text-[#E1306C] duration-300 cursor-pointer group'><AiFillInstagram size={30}/>
                        <h1 className='group-hover:text-inherit text-white'>Instagram</h1>
                    </div>
                    <div className='flex items-center gap-x-2 hover:text-[#00acee] duration-300 cursor-pointer group'><AiFillTwitterSquare size={30}/>
                        <h1 className='group-hover:text-inherit text-white'>Twitter</h1>
                    </div>

                </div>
            </div>
        </div>
        <div className='py-10'>
            <h1 className='text-center'>K a n o n C l o t h i n g</h1>
        </div>
    </div>
  )
}

export default Footer