import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal'
import { AnimatePresence, motion } from 'framer-motion'
import Page2 from './checkoutPages/Page2'
import Page1 from './checkoutPages/Page1'
import Page3 from './checkoutPages/Page3'

function Checkout() {

  const totalPrice = useSelector((state)=>state.shoppingCart.total)
  const cartItem = useSelector((state)=>state.shoppingCart.value)
  let total = 0
  const Items = cartItem.map((item)=>
  {
      total += item.quantity
  });

  const [page, setPage] = useState(1)
  const HandleSubmit = (e) =>
  {
    e.preventDefault()
  }
  const NextPage = () =>
  {
    setPage(page  === 3? 3 : prev => prev + 1)
  }
  const PreviousPage = () =>
  {
    setPage(page === 1? 1 : prev => prev - 1)
  }

  const [showModal, setShowModal] = useState(false)
  const ToggleModal = () =>
  {
    setShowModal(prev =>!prev)
  }

  const DefaultParagraphStyle = 'rounded-full border-2 w-12 h-12 flex items-center justify-center'
  const SelectedParagraphStyle = 'rounded-full border-2 bg-[#9ca3af] w-12 h-12 flex items-center justify-center'

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
    <>
    <AnimatePresence>
      {showModal && <Modal ToggleModal={ToggleModal}/>}
    </AnimatePresence>
    <motion.div
    variants={pageTransition}
    initial='hidden'
    animate='show'
    exit='hidden'>
      <div className='max-w-[1240px] mx-auto px-4 py-12 flex flex-col md:flex-row justify-center items-start sm:justify-evenly gap-y-16'>
        <div>
          <div>
            <h1 className='text-3xl md:text-5xl'>Checkout</h1>
          </div>
          <div className='flex w-[312px] justify-between text-black font-bold py-8'>
            <p className={SelectedParagraphStyle}>1</p>
            <p className={page > 1 ? SelectedParagraphStyle : DefaultParagraphStyle}>2</p>
            <p className={page > 2 ? SelectedParagraphStyle : DefaultParagraphStyle}>3</p>
          </div>

          <form
          onSubmit={HandleSubmit}>
          {page === 1? <Page1 NextPage={NextPage} /> : page === 2? <Page2 /> : page === 3? <Page3 /> : ''}
         
          </form>
          <div className='flex gap-x-2 mt-4 items-center w-full'>
            {page > 1 ? <button
            onClick={PreviousPage} className='bg-gray-100 border-2 border-black hover:bg-gray-500'>Back</button> :''}
            {page === 3 ? 
            <button onClick={ToggleModal}>Confirm Order</button> : page !== 1?
            <button onClick={NextPage}>Next</button>:''}
          </div>
        </div>
        
        <div className='w-[312px]'>
          <h1 className='text-3xl md:text-5xl'>Your Order</h1>
          <div className='py-2 border-b-2'>
            <h1>
              Products: <span className='text-secondary'>{total}</span>
            </h1>
            <h1>
              Price: <span className='text-secondary'>{totalPrice} $</span>
            </h1>
          </div>
          <div className='max-h-[400px] overflow-y-scroll'>
            {cartItem.map((item)=>
            (
              <div key={`order-${item.name}`} className='flex gap-2 items-center p-2 min-w-[300px]'> 
                <div className='max-w-[80px]'>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h1>{item.name}</h1>
                  <h1>Amount: {item.quantity}</h1>
                </div>
                <div className='ml-auto text-secondary'>
                  <h1>{item.price} $</h1>
                </div>
              </div>
            ))}  

          </div>
      </div> 

      </div>
    </motion.div>
    </>
  )
}

export default Checkout