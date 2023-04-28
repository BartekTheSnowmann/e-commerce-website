import React, { useEffect, useRef } from 'react'
import {AiOutlineClose, AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import {useSelector,useDispatch } from 'react-redux'
import { DecrementItem, IncrementItem,DeleteItem,TotalAmount} from '../features/shoppingCartSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

function Cart({ToggleCart}) {

  const total = useSelector((state=>state.shoppingCart.total))
  const cartItem = useSelector((state=>state.shoppingCart.value))
  
  const dispatch = useDispatch()
  const Decrement = (id,price,name) => 
  {
    dispatch(DecrementItem({id,price,name}))
    dispatch(TotalAmount())
  }
  const Increment = (id,price) =>
  {
    dispatch(IncrementItem({id,price}))
    dispatch(TotalAmount())
  } 

  const Delete = (id,name) =>
  {
    dispatch(DeleteItem({id, name}))
    dispatch(TotalAmount(0))
  }

  
  return (
    
      <motion.div
      initial={{x:'100%', opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{type:'tween',duration:.3}}
      exit={{x:'100%', opacity:0}}
      className='z-20 fixed top-0 right-0 w-2/3 md:w-1/4 h-screen bg-white px-4 shadow-black shadow-lg'>
                <div className='h-20 flex items-center justify-between'>                                                 
                  <div className='flex items-center font-bold text-lg gap-x-4'>
                    {total > 0 && <Link to='checkout'>
                      <button className='text-white text-md px-2 py-1'
                      onClick={()=>ToggleCart()}>Checkout</button>
                    </Link>}
                    <p className='text-tertiary text-lg'>{total} $</p>
                  </div>
                  <div>
                    <AiOutlineClose size={30}
                    className='cursor-pointer'
                    onClick={()=>ToggleCart()}/>
                  </div>
                </div>
                <div className='overflow-y-scroll pb-[100px] h-full flex flex-col'>
                    {cartItem.map((item)=>(
                        <div key={`cart-${item.id}`} className='relative md:flex border-t-2 border-gray-300 py-4 lg:flex items-center gap-x-4'>
                            <div>
                                <img src={item.img} alt="" className='w-[100px]' />
                            </div>
                            <div className='font-bold'>
                                <h1>{item.name}</h1>
                                <h1 className='text-tertiary text-lg'>{item.price} $</h1>
                                <div className='flex'>
                                    <AiOutlinePlusSquare size={25} className='cursor-pointer'
                                    onClick={()=>{Increment(item.id,item.price)}} />
                                    <AiOutlineMinusSquare size={25} className='cursor-pointer'
                                    onClick={()=>{Decrement(item.id,item.price,item.name)}}/>
                                </div>
                                <BsTrash size={25} className='absolute bottom-[12px] right-[12px]'
                                onClick={()=>{Delete(item.id,item.name)}} />
                                <p>Amount: {item.quantity}</p>
                            </div>
                        </div>    
                    ))}
                </div>
            </motion.div>
  )
}

export default Cart