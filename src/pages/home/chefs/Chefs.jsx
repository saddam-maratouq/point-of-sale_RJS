import React from "react";

//css
import "./chefs.css";

// chef
import Joel from "../../../assets/Images/cheefs/chefs-1.jpg";

import Sarah from "../../../assets/Images/cheefs/chefs-2.jpg";

import Alain from '../../../assets/Images/cheefs/chefs-3.jpg'


const Chefs = () => {
  return (
      <section className="chefs">
        <div className="cheef-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
              <h1 className="chef-title  text-center "> Chefs </h1>
              </div>
            </div>

            <div className="row pt-2 ">
            {/* joel card  */}
              <div className="col-lg-4  col-md-6 ">
                <div className="card    ">
                  <img src={Joel} alt="cheef"  />
                  <div className="card-content p-5  text-center ">
                  <h5 class="card-title">Joel-Robuchon</h5>
                 <span>Master Chef</span>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                  </div>
                </div>
              </div> 

             {/* Sarah card */}
              <div className="col-lg-4  col-md-6 ">
                <div className="card    ">
                  <img src={Sarah} alt="cheef" className=""  />
                  <div className="card-content p-5 text-center ">
                  <h5 class="card-title">Sarah-Jhonson</h5>
                 <span>Patissier</span>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                  </div>
                </div>
              </div> 


              {/* Alain Card */}
              <div className="col-lg-4  col-md-6 ">
                <div className="card ">
                  <img src={Alain} alt="cheef"  />
                  <div className="card-content p-5 text-center ">
                  <h5 class="card-title">Alain-Ducasse</h5>
                 <span>Gourmet chef</span>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
