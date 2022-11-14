import React from 'react'

// carousel Img 
import Firstperson from '../../../assets/Images/reviews/review-1.jpg'
import Secperson from '../../../assets/Images/reviews/review-2.jpg'
import Thuperson from '../../../assets/Images/reviews/review-3.jpg'

// css 
import './TestMonial.css'


const Testimonial = () => {
  return (
     <section  id='Review' >
     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"
      data-bs-interval="2000"
     >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <h3 className=' hello' > I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h3>
      <img src={Firstperson} className="" alt="..."/>
      <p className='d-inline' > Willeam  </p>

    </div>

    <div className="carousel-item">
    <h3 className='hello' >   I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h3>
   
      <img src={Secperson} className="" alt="..."/>
      <p className='d-inline' > Jwan  </p>    
      
    </div>
    <div className="carousel-item">
    <h3 className='hello' >   I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h3>
      <img src={Thuperson} className="" alt="..."/>
    <p className='d-inline' > Luka  </p>
    </div>
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </section>
  )
}

export default Testimonial


{/* <h3>  Hello from Imge one  </h3>
<img src={Firstperson} className='' alt="person"/> */}