import React, { useRef, useState } from 'react'
import {BsBellFill, BsBellSlash} from 'react-icons/bs'
import { toast } from 'react-toastify'

function Newsletter() {

    const FormRef = useRef()
    const HandleSubmit = (e) =>
    {
        e.preventDefault()
        FormRef.current.reset()
        if(NewsletterOn === false)
        {
            toast.success('Newsletter on!')
            setNewsletterOn(true)
        }
        else
        {
            toast.error('youve already signed for newsletter dummy')
        }
        
    } 

    const [NewsletterOn, setNewsletterOn] = useState(false)

  return (
    <div className='bg-black'>
        <div className='max-w-[800px] mx-auto py-12 md:py-24 px-4'>
            <div className='text-white text-center'>
                <h1 className='text-3xl md:text-5xl r'>NewsLetter</h1>
                <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorem!</p>
            </div>
            <div>
                <form
                ref={FormRef}
                onSubmit={HandleSubmit}>
                    <div className='flex flex-row-reverse items-center gap-x-3 h-14'>
                        <button className='h-full'>Send</button>
                        <input type="text" placeholder='Email' required className='w-full h-full' />
                        {NewsletterOn ? <BsBellFill size={40} className='text-white duration-300'/>:
                        <BsBellSlash size={40} className='text-white duration-300 ' />}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter