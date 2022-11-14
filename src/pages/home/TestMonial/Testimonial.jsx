import React from 'react'

// carousel Img 
import Firstperson from '../../../assets/Images/reviews/review-1.jpg'
import Secperson from '../../../assets/Images/reviews/review-2.jpg'
import Thuperson from '../../../assets/Images/reviews/review-4.jpg'

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
      <h3 className=' Review-text' >  It’s a great experience. The ambiance is very welcoming and charming. Amazing juice, food and service. Staff are extremely knowledgeable and make great recommendations.</h3>
      <img src={Firstperson} className=" review-img " alt="..."/>
      <p className=' person-name ' > Willeam  </p>

    </div>

    <div className="carousel-item">
    <h3 className='Review-text' > This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. </h3>
   
      <img src={Secperson} className=" review-img " alt="..."/>
      <p className=' person-name' > Jwan  </p>    
      
    </div>
    <div className="carousel-item">
    <h3 className='Review-text' > Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.</h3>
      <img src={Thuperson} className=" review-img " alt="..."/>
      <p className='person-name '  > Luka  </p>
    </div>
  </div> 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon carousel-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon carousel-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </section>
  ) 
}

export default Testimonial


{/* <h3>  Hello from Imge one  </h3>
<img src={Firstperson} className='' alt="person"/> */}