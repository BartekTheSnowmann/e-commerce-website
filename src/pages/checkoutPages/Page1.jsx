import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SetClientData } from '../../features/shoppingCartSlice'
import { toast } from 'react-toastify'

function Page1({NextPage}) {

  const [clientData, setClientData] = useState({
    name:'',
    LastName:'',
    postalCode: 0,
    town:''
  })

  const dispatch = useDispatch()
  const HandleSubmit = () =>
  {
 
    
    // if(clientData.name.length > 0 && clientData.LastName.length > 0 && clientData.postalCode  !== 0 && clientData.town.length > 0)
    if(clientData.name.length > 0)
    {
      dispatch(SetClientData(clientData))
      NextPage()
    }
    else
    {
      toast.error('Just set the name to anything 😒')
    }
     
  }

  return (
    <div className='grid grid-cols-2 w-[312px] gap-2'>

      <div>
        <label htmlFor="Name">Name</label>
        <input id='Name' type="text" className='px-2 py-2 border-2 border-black bg-gray-100 w-[150px]'
        onChange={e=>setClientData({...clientData,name:(e.target.value)})}/>
      </div>

      <div>
        <label htmlFor="LastName">Last Name</label>
        <input id='LastName' type="text" className='px-2 py-2 border-2 border-black bg-gray-100 w-[150px]'
        onChange={e=>setClientData({...clientData,LastName:(e.target.value)})}/>
      </div>

      <div>
        <label htmlFor="Email">Email</label>
        <input id='Email' type="text" className='px-2 py-2 border-2 border-black bg-gray-100 w-[308px]'/>
      </div>
      
      <div className='col-span-2'>
        <label htmlFor="StreetCode">Street Code</label>
        <input id='StreetCode' type="text" className='px-2 py-2 border-2 border-black bg-gray-100 w-[308px]'/>
      </div>
      
      <div className='col-span-2'>
        <label htmlFor="Phone">Phone Number</label>
        <input id='Phone' type="Number" className='px-2 py-2 border-2 border-black bg-gray-100 w-[308px]'/>
      </div>
  
      <div>
        <label htmlFor="PostalCode">Postal Code</label> 
        <input id='PostalCode' type="text" className='px-2 py-2 border-2 border-black bg-gray-100 w-[150px]'
        onChange={e=>setClientData({...clientData,postalCode:(e.target.value)})}/>
      </div>
  
      <div>
        <label htmlFor="Town">Town</label>
        <input id='Town' type="text" className='px-2 py-2 border-2 border-black bg-gray-100 w-[150px]'
        onChange={e=>setClientData({...clientData,town:(e.target.value)})}/>
      </div>
    
      <button className='mt-2' 
      onClick={()=>HandleSubmit()}>Next</button>
    </div>

  )
}

export default Page1