import React from 'react'
import { AiFillShopping, AiOutlineClose } from 'react-icons/ai'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'
import { ResetCart} from '../features/shoppingCartSlice'
import { motion } from 'framer-motion'


function Modal({ToggleModal}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const CloseModal = () =>
  {
    ToggleModal()
    navigate('/')
    dispatch(ResetCart())
  }


  const ModalVariant = {
    hidden:{
      opacity:0,
      y:60,
    },
    exit:{
      opacity:0
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        type:'spring'
      }
    }
  }

  return (
    <div className='absolute w-screen h-full overflow-hidden top-0 flex items-center justify-center'> 
      <motion.div
      variants={ModalVariant}
      initial='hidden'
      animate='show'
      exit='exit'
      className='w-[80vw] sm:w-[50vw] lg:w-[30vw] h-[30vh] md:h-[30vh] shadow-2xl shadow-black bg-white p-4 flex flex-col items-center  text-center text-3xl'>
        
      <div className='ml-auto'>
          <AiOutlineClose className='cursor-pointer hover:scale-125 duration-300' size={30} 
          onClick={()=>CloseModal()}/>
      </div>
      <div className='flex flex-col h-2/3 items-center justify-center gap-4 '>
        <div className='border-b-2 w-full flex justify-center pb-2'>
        <AiFillShopping size={60}/>

        </div>
        <h1 className='text-2xl md:text-3xl'>Your order has been placed!</h1>
      </div>
      </motion.div>
    </div>
  )
}

export default Modal