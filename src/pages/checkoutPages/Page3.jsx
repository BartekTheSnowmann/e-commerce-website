import React from 'react'
import { useSelector } from 'react-redux'

function Page3() 
{
  const ClientData = useSelector((state)=>state.shoppingCart.clientData)
  const totalPrice = useSelector((state)=>state.shoppingCart.total)
  const cartItem = useSelector((state)=>state.shoppingCart.value)
  let total = 0
  const Items = cartItem.map((item)=>
  {
      total += item.quantity
  });

  return (
    <>
      <div className='border-b-2 pb-4'>
        <h1 className='text-lg'>Your Order</h1>
        <h1 className='text-lg'>Price <span className='text-secondary'>{totalPrice} </span>$</h1>
        <h1 className='text-lg'>Products: {total}</h1>
      </div>

      <div className='text-secondary text-xl pt-4'>
        <div className='flex gap-x-2'>
          <h1>{ClientData?.name}</h1>
          <h1>{ClientData?.LastName}</h1>

        </div>
        <div className='flex gap-x-2'>
          <h1>{ClientData?.postalCode}</h1>
          <h1>{ClientData?.town}</h1>

        </div>
      </div>
  

    </>
  )
}

export default Page3