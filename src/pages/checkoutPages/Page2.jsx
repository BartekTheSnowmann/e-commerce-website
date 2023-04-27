import React, { useState } from 'react'

function Page2() {

  const [paymentMethod, setPaymentMethod] = useState('')

  return (
    <div className='grid grid-cols-2 w-[312px] gap-2'>
       <div>
          <label htmlFor="Payment">Payment Method</label>
          <select value={paymentMethod} onChange={e=>setPaymentMethod(e.target.value)} id="Payment" className='bg-gray-100 rounded-md px-2 w-[308px]'>
            <option value="Card">Card 💳</option>
            <option value="PayME">PayME 💷</option>
            <option value="BankIO">BankIO 💹</option>
          </select>
       </div>
       <div className='row-start-2'>
        <label htmlFor="CardNumber">Card Number</label>
        <input type="text" className='px-2 py-2 border-2 border-black bg-gray-100 rounded-md w-[308px]' />
       </div>
    </div>
  )
}

export default Page2