import React from 'react'

import './hero.css'

const Hero = () => {
  return (
    <section className='hero ' > 
      <div className="container">
        <div className="hero-content text-md-start text-center ">
           <p className='hero-title' > UNLIMITED </p>
           <p className='hero-title'> FAST <span> FOOD </span> </p>
           
           <p className='hero-info mb-5 ' > Medium Topping Pizza </p>
           <p className='hero-desc lead my-5' > * Additional charge for premium toppings</p>
           <i className="fa-solid fa-basket-shopping-simple"></i> 
            <button className='btn-p'> Order Now</button>
        </div>
      </div>
     </section>
  )
}

export default Hero  


