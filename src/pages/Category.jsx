import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { NewDrop } from '../data/NewDrop'
import { useDispatch } from 'react-redux'
import {AddItem, TotalAmount} from '../features/shoppingCartSlice'
import { motion } from 'framer-motion'

function Category() {

  const categories = NewDrop.map((item)=>item.category)
  const {category} = useParams()
  const ChoosedCategory = category
  const navigate = useNavigate()
  const NavigateToItem = (id) =>
  {
    navigate(`/category/${category}/${id}`)
  }

  // If no such category then display error page
  useEffect(()=>
  {
    if(!categories.includes(ChoosedCategory))
    {
       navigate('/*', )
    }
  },[])


  // Prevent colors from repeating
  let ArrayOfColors = []
  const AllColors = NewDrop.map((item)=>
  {
    if(item.category === ChoosedCategory)
    {
      ArrayOfColors.push(...ArrayOfColors,item.color)
    }
  }
  )
  let UniqueColors = [];
  ArrayOfColors.forEach((element) => {
    if(!UniqueColors.includes(element))
    {
        UniqueColors.push(element);
    }
  });
  
    // Pricing
    const [startingPrice, setStartingPrice] = useState(0)
    const [endingPrice, setEndingPrice] = useState(1000)
    const startingPriceRef = useRef(null)
    const endingPriceRef = useRef(null)
    const SetPricing = (e) =>
    {
      e.preventDefault()
      setStartingPrice(startingPriceRef.current.value)
      
        if(!endingPriceRef.current.value)
        {
          setEndingPrice(1000)
        } 
        else
        {
          setEndingPrice(endingPriceRef.current.value)
        }
    }

    //Color
    const [color,setColor] = useState('All')
    useEffect(()=>
    { 
      setColor('All')
      setStartingPrice(0)
      setEndingPrice(1000)
    },[ChoosedCategory])

    // Buying
    const dispatch = useDispatch()
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
        <motion.div className='bg-slate-100 min-h-[calc(100vh-5rem)]'
        variants={pageTransition}
        initial='hidden'
        animate='show'
        exit='hidden'>
          {/* Filtry */}
          <div className='px-4 flex items-center justify-center pt-10'>
            <div className='flex gap-2 flex-wrap relative cursor-pointer '>
              
              <form 
              className='item_border pl-2 bg-white'
              onSubmit={SetPricing}>
                <label htmlFor="PriceFrom">From</label>
                <input ref={startingPriceRef} name='startingPrice' type='number' min={0} id='PriceFrom'/>
                <label htmlFor="PriceTo">To</label>
                <input ref={endingPriceRef} name='endingPrice' type='number' max={1000} id='PriceTo'/>
                <button className='hover:bg-gray-200 bg-transparent rounded-none border-l-2 px-2 h-full'>Submit</button>
              </form>

              <div className='item_border pl-2 flex items-center gap-x-2 bg-white'>
                <h1>Color</h1>
                <select id='Select' name="SelectedColor" onChange={e=>setColor(e.target.value)} value={color}>
                  <option value="All">All</option>
                  {UniqueColors.map((item,index)=>
                  (
                    <option key={`${item}-${index}`} value={`${item}`}>{item}</option>
                  )
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Clothes */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-[1240px] mx-auto py-10 px-4 gap-4'>
              {NewDrop.map((item,index)=>
                (item.category === ChoosedCategory && (color==='All' || color===item.color) && (startingPrice <= item.price && endingPrice >= item.price)?
                  (<div 
                  key={`${item}-${index}`} 
                  className='border-2 group relative flex flex-col items-center justify-between bg-white p-4 gap-4 max-w-[400px]'>
                  <img src={item.img} className='w-full h-full cursor-pointer'
                  onClick={()=>NavigateToItem(item.id)} />
                  <div className='text-center'>
                    <h1 className='text-center text-xl'>{item.name}</h1>
                    <p className='font-bold tracking-wide text-xl text-tertiary'>{item.price} $</p>
                    
                    <button
                    className='bg-primary hover:bg-primaryHover text-white px-6 py-2 cursor-pointer' 
                    onClick={()=>{BuyItem(item.id,item.name,item.img,item.price)}}>Buy</button>
                  </div>
                </div>):'')
              )}
          </div>
        </motion.div>
  )
}

export default Category