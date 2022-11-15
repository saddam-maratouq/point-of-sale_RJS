import React from 'react'

//components 
import Hero from './hero/Hero'
import Menu from './Menu/Menu'
import FoodDescrptions from './food Descrption/FoodDescrptions'
import Blogs from './Blogs/Blogs'
import Testimonial from './TestMonial/Testimonial'
import Chefs from './chefs/Chefs'





const Home = () => {

  return (
    <> 
     <Hero/> 
     <Menu/> 
     <FoodDescrptions/> 
     <Blogs/> 
     <Testimonial/> 
     <Chefs/>
     </>
  )
}

export default Home