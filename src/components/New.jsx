import React, { useRef } from 'react'
import {AiOutlineArrowRight, AiOutlineSearch} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { NewDrop } from '../data/NewDrop'
import { useInView,motion } from 'framer-motion'

function New() {

    const navigate = useNavigate()
    const NavigateToItem = (id, category) =>
    {
      navigate(`category/${category}/${id}`)
    }

    const MyRef = useRef()
    const IsInView = useInView(MyRef, {once:true})

    const container = {
        hidden:{

        },
        show:{
            transition:{
                staggerChildren:0.2,
            }
        }
    }

    const item = {
        hidden:{
            y: -20,
            opacity:0,
        },
        show:{
            y:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:0.2
            }
        }
    }

    const MoreVariant = {

    }

  return (
    <div id='New'>
        <div className='max-w-[600px] lg:max-w-[1240px] mx-auto px-4 py-12 '>
            <div className='text-center pb-12'>
                <h1 className='text-3xl md:text-5xl'>New</h1>
            </div>
            <motion.div
            variants={container}
            initial='hidden'
            animate={IsInView?'show':'hidden'}
            className='max-w-[800px] mx-auto grid grid-cols-2 sm:grid-cols-3 items-center justify-items-center gap-6'>
                <motion.div
                whileHover={{scale: 1.04}}
                whileTap={{scale:0.98}}
                variants={item}
                className='cursor-pointer duration-300 bg-red-200 item_shadow'>
                    <img src={NewDrop[0].img}
                    onClick={()=>NavigateToItem(NewDrop[0].id, NewDrop[0].category)} alt="" className='h-full w-full' />
                </motion.div>
                <motion.div
                whileHover={{scale:1.04}}
                whileTap={{scale:0.98}}
                variants={item}
                className='cursor-pointer duration-300 bg-pink-200 item_shadow'>
                    <img src={NewDrop[1].img}
                    onClick={()=>NavigateToItem(NewDrop[1].id, NewDrop[1].category)} alt="" className='h-full w-full' />
                </motion.div>
                <motion.div
                whileHover={{scale:1.04}}
                whileTap={{scale:0.98}}
                variants={item}
                className='cursor-pointer duration-300 bg-violet-200 item_shadow'>
                    <img src={NewDrop[2].img}
                    onClick={()=>NavigateToItem(NewDrop[2].id, NewDrop[2].category)} alt="" className='h-full w-full' />
                </motion.div>
                <motion.div
                whileHover={{scale:1.04}}
                whileTap={{scale:0.98}}
                variants={item}
                className='cursor-pointer duration-300 bg-green-200 item_shadow'>
                    <img src={NewDrop[3].img}
                    onClick={()=>NavigateToItem(NewDrop[3].id, NewDrop[3].category)} alt="" className='h-full w-full' />
                </motion.div>
                <motion.div
                ref={MyRef}
                whileHover={{scale:1.04}}
                whileTap={{scale:0.98}}
                variants={item}
                className='cursor-pointer duration-300 bg-blue-200 item_shadow'>
                   <img src={NewDrop[4].img}
                   onClick={()=>NavigateToItem(NewDrop[4].id, NewDrop[4].category)} alt="" className='h-full w-full' />
                </motion.div>

                <Link to='/category/Jackets'>
                    <motion.div className='h-40 w-40 overflow-hidden rounded-full flex flex-col items-center justify-center cursor-pointer duration-150 text-lg font-bold uppercase'
                    variants={MoreVariant}>
                        <h1>See more</h1>    
                        <AiOutlineSearch size={40} />
                    </motion.div>
                </Link>

            </motion.div>
        </div>
    </div>
  )
}

export default New