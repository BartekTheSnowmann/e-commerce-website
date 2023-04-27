import React from 'react'
import { useNavigate } from 'react-router'

function Error() {


  const navigate = useNavigate()
  const NavigateBack = () =>
  {
      navigate(-1)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-y-4 h-[300px]'>
       <h1 className='text-3xl'>Such page doesnt exist!</h1> 
        <div 
        onClick={()=>NavigateBack()}>
          <button>Go Back</button>
        </div>
    </div>
  )
}

export default Error