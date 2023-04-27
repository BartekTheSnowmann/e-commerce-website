import React from 'react'
import {Navbar, Hero, New, ClothingStyles,Footer} from './Index'
import Newsletter from './Newsletter'

function Home() {
  return (
    <>
        <Hero />
        <New />
        <Newsletter />
        <ClothingStyles />
        <Footer />
    </>
  )
}

export default Home