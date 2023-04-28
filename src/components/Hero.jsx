import React, { useRef } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { HeroImg } from '../assets/Index'
import { motion, useInView } from 'framer-motion'

function Hero() {

  const MyRef = useRef()
  const IsInView = useInView(MyRef, {once:true})

  const container = {
    hidden: {
      opacity: 0
     },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      }
    }
  }

  const item = {
    hidden: { 
      opacity: 0,
      y:-60 },
    show: {
      opacity: 1,
      y:0,
      transition:{
        type:'tween',
      }
    },
  }

  const arrow = {
    hidden:{
      opacity:0,
      y:-200
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        delay:1.2,
        type: 'spring'
      }
    } 

  }
  return (
    <div id='Home'>
        <div className='relative h-[calc(100vh-10rem)] flex items-center justify-center p-4'>
          <div className='-z-0 absolute left-0 h-[calc(100vh-10rem)] overflow-hidden'>
            <img src={HeroImg} className='h-full w-screen object-cover'/>
            </div>
            <motion.div
            variants={container}
            initial='hidden'
            animate={IsInView?'show':'hidden'}
            className='z-10 max-w-[1240px] mx-auto justify-center'>
              <motion.h1
              ref={MyRef}
              variants={item}
              className='text-white tracking-widest text-5xl sm:text-7xl lg:text-8xl font-bold'>KANON CLOTHING</motion.h1>
              <motion.p
              variants={item}
              className='text-gray-400 text-xl font-bold sm:text-xl lg:text-3xl uppercase'>Buy exclusive clothes from your Favorite Brand.</motion.p>
            </motion.div>
            <motion.div
            variants={arrow}
            initial='hidden'
            animate='show' 
            className='absolute bottom-20 z-10 text-white cursor-pointer'>
              <a href="#New">
                <AiOutlineArrowDown size={50} />
              </a>
            </motion.div>
           <div className='absolute left-0 bg-black/70 w-full h-[calc(100vh-10rem)]'></div>
        </div>
    </div>
  )
}

export default Hero