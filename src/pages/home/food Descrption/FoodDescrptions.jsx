import React from "react";

import FirstDescImg from "../../../assets/Images/our Menu/Descr-1.png";

import SecDescImg from "../../../assets/Images/Descr-2.png";

//css
import "./FoodDescrptons.css";

const FoodDescrptions = () => {
  return (
    <section id="FoodDescrption">
      <div className="about-sec wrapper ">
        <div className="container">
          <div className="row  align-items-center ">
            <div
              className=" col-lg-6 col-md-12 mb-lg-0 mb-5 "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src={FirstDescImg}
                alt=" food"
                className="img-fluid   burger-1"
              />
            </div>

            <div
              className="col-lg-6  col-md-12 text-sec "
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="DesTitle-1">
                We pride Ourselves on making <br /> real food from the Best{" "}
                <br /> Ingredients
                <p className="lorem1  d-block">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam <br />
                  quo magnam, enim rerum alias porro veritatis sint <br /> ipsam
                  officiis perferendis?{" "}
                </p>
              </h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row  align-items-center  row-2">
            {/* First col */}
            <div
              className="col-lg-6  mt-5"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="Desc-Title-2">
                {" "}
                We make everything by hand with the best possible ingredients.{" "}
              </h2>
              <p className="lorem-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit quas sint quibusdam? Nulla odio alias
                consequuntur, doloribus inventore nesciunt cumque.
              </p>

              <ul className=" list-unstyled py-3 des-list">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur. </li>
                <li>Lorem ipsum dolor sit amet consectetur. </li>
              </ul>
            </div>

            {/* Sec col */}
            <div
              className="col-lg-6"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img className="img-fluid" src={SecDescImg} alt="food-Img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDescrptions;

{
  /* <section  id='FoodDescrption' >
    <div className="container-fluid">
    <div className='d-lg-flex justify-content-center align-items-center ' >
     <img  className='burger-1   ' src={FirstDescImg} alt=" food Image "  />
    
    <h2 className='DesTitle-1' > We pride Ourselves on making <br /> real food from the Best <br /> Ingredients
    
    <p   className='lorem1  d-block' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam  <br /> 
    quo magnam, enim rerum alias porro veritatis sint <br /> ipsam officiis perferendis? </p>

    </h2>
    </div>



    </div>
    </section> */
}
