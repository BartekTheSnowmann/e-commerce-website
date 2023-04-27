import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { NewDrop } from '../data/NewDrop'
import { AddItem,TotalAmount } from '../features/shoppingCartSlice'
import { motion } from 'framer-motion'

function SingleItem() {

    const dispatch = useDispatch()
    const {item} = useParams()
    const choosedItem = item

    const BuyItem = (id,name,img,price) =>
    {
      const newItem = {id,name,img,price}
      dispatch(AddItem(newItem))
      dispatch(TotalAmount())
    }
    
    const pageTransition = {
      hidden:{
        opacity:0,
      },
      show:{
        opacity:1,
        transition:{
          type:'spring'
        }
      }
    }

  
     return (
      <div>
        <motion.div className='h-full'
        variants={pageTransition}
        initial='hidden'
        animate='show'
        exit='hidden'>
            {NewDrop.map((item)=>
            (item.id === choosedItem? 
              <div className='min-h-[calc(100vh-5rem)] gap-x-8 flex bg-slate-100 flex-wrap justify-center items-center'
              key={item.id}>

                <div>
                  <img src={item.img} alt={item.name} className='h-full' />
                </div>

                <div className='flex flex-col gap-y-4  py-4'>
                  <h1 className='text-3xl'>{item.name}</h1>
                  <p className='text-3xl'>{item.price} $</p>
                  <div>
                  <button className='text-white'
                    onClick={()=>BuyItem(item.id, item.name, item.img, item.price)}>Buy
                  </button>
                  </div>  
                </div>
              </div>:''))}
        </motion.div>
      </div>
  )
}

export default SingleItem