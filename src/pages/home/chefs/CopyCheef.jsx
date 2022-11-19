
import React from "react";

//css
import "./chefs.css";

// chef
import Joel from "../../../assets/Images/cheefs/chefs-1.jpg";

import Sarah from "../../../assets/Images/cheefs/chefs-2.jpg";

import Alain from "../../../assets/Images/cheefs/chefs-3.jpg";

const Chefs = () => {
  return (
    <section className="chefs">
      <div className="cheef-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="chef-title  text-center "> Our Chefs </h1>
            </div>
          </div>

          <div className="row pt-2 ">
            {/* joel card  */}
            <div className="col-lg-4  col-md-6  text-center ">
              <div className="card    ">
                <img src={Joel} alt="cheef" className="img-fluid" />
                <div className="card-content p-4  text-center ">
                  <h5 class="card-title">Joel-Robuchon</h5>
                  <span>Master Chef</span>
                </div>
              </div>
            </div>

            {/* Sarah card */}
            <div className="col-lg-4  col-md-6 ">
              <div className="card    ">
                <img src={Sarah} alt="cheef" className="img-fluid" />
                <div className="card-content p-4 text-center ">
                  <h5 class="card-title">Sarah-Jhonson</h5>
                  <span>Patissier</span>
                </div>
              </div>
            </div>

            {/* Alain Card */}
            <div className="col-lg-4  col-md-6 ">
              <div className="card ">
                <img src={Alain} alt="cheef" className="img-fluid" />
                <div className="card-content p-4 text-center ">
                  <h5 class="card-title">Alain-Ducasse</h5>
                  <span>Gourmet chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;


.cheef-wrapper {
    padding: 200px 0;
  }
  
  .chef-title {
    font-size: 50px;
    color: #0e100f;
    font-weight: 800;
    margin-bottom: 100px;
    letter-spacing: 3px;
  }
  
  .card {
    min-width: 20rem;
    height: 20rem;
    transition: 0.8s ease-in;
    /* margin: 6rem 2rem; */
    border: none;
  }
  
  .card img {
    border-radius: 15px 15px 0 0;
    /* margin-bottom: 10px; */
    /* margin: 0 auto; */
  }
  
  .card-content {
    background-color: #fff;
  }
  
  .card img:hover {
    border-radius: 15px;
    cursor: pointer;
  }
  .card:hover {
    transform: scale(1.1);
    border-radius: 15px;
  }
  
  .card-content span {
    color: gray;
    font-size: 1.3rem;
  }
  
  .card-content p {
    margin-top: 10px;
    line-height: 1.5;
  }
  
  .cheef-wrapper .row {
    --bs-gutter-x: 1.5rem !important ;
    --bs-gutter-y: 4rem !important;
  }
  
  /* media query  */
  
  @media screen and (max-width: 540px) {
    .card {
      height: 350px;
      margin-bottom: 100px;
    }
  }
  