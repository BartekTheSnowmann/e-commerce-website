import React, { useRef, useState } from 'react'
import {Stylizations} from '../data/Stylizations'
import { motion } from 'framer-motion'

function ClothingStyles() {

  const ImgVariant = {
    hidden:{
      opacity:0,
      scale:0.8,
    },
    show:{
      opacity:1,
      scale:1,
      transition:{
        type:'tween'
      }
    }
  }

  const BigScreenRef = useRef()
  const [currentImage, setCurrentImage] = useState('/static/media/style_men3.5d973f35f7f5dee2938c.jpg')
  const ChangeImage = (img) =>
  {
    setCurrentImage(img)
  }

  return (
    <div className='bg-tertiary' id='Style'>
      <div className='px-4 py-12'>
          <div className='text-center pb-12'>
              <h1 className='text-3xl md:text-5xl text-white'>Discover your Style</h1>
          </div>
          <div id='StyleGridContainer' className='max-w-[580px] lg:max-w-[800px] mx-auto grid grid-rows-3 grid-cols-3 gap-6'>  
                {Stylizations.map((item,index)=>
                (
                  <div className={`${item.id} relative group max-h-[350px] overflow-hidden`} key={item.id} 
                  onClick={()=>ChangeImage(item.img)}>
                    <img src={item.img} alt="" className='h-full w-full group-hover:scale-110 duration-300 transition-all'/>
                    <div className='absolute top-0 left-0 w-full h-full hidden group-hover:flex bg-black/40 cursor-pointer items-center justify-center'>
                      <h1 className='text-white text-xl'>SELECT</h1>
                    </div>
                  </div>  
                ))}
                <div className='bg-transparent row-span-2 col-span-2 max-h-[740px] col-start-2 row-start-1'
                >
                  <motion.img 
                  variants={ImgVariant}
                  initial='hidden'
                  animate='show'
                  key={currentImage}
                  src={currentImage} alt="" ref={BigScreenRef} className='h-full w-full'/>
                </div>
          </div>
      </div>
    </div>
  )
}

export default ClothingStyles