import React from 'react'

import FirstDescImg from '../../../assets/Images/our Menu/Descr-1.png'

//css 
import './FoodDescrptons.css'

const FoodDescrptions = () => {
 
 
    return (
        <section id='FoodDescrption' >
         <div className="about-sec wrapper ">
            <div className="container">
                <div className="row  align-items-center ">
                    <div className=' col-lg-7 col-md-12 mb-lg-0 mb-5 ' >
                        <img src={FirstDescImg} alt=".." 
                        className='img-fluid   burger-1'
                         />
                    </div> 

                    <div className="col-lg-5  col-md-12 text-sec ">
                        <h2 className='DesTitle-1' >We pride Ourselves on making <br /> real food from the Best <br /> Ingredients
                        <p   className='lorem1  d-block' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam  <br /> 
                        quo magnam, enim rerum alias porro veritatis sint <br /> ipsam officiis perferendis? </p>    
                      </h2>
                    </div>
                </div>
            </div>
         </div>
        </section>
  )
}

export default FoodDescrptions



{/* <section  id='FoodDescrption' >
    <div className="container-fluid">
    <div className='d-lg-flex justify-content-center align-items-center ' >
     <img  className='burger-1   ' src={FirstDescImg} alt=" food Image "  />
    
    <h2 className='DesTitle-1' > We pride Ourselves on making <br /> real food from the Best <br /> Ingredients
    
    <p   className='lorem1  d-block' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam  <br /> 
    quo magnam, enim rerum alias porro veritatis sint <br /> ipsam officiis perferendis? </p>

    </h2>
    </div>



    </div>
    </section> */} 