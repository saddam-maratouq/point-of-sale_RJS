import React from "react";

//css
import "./chefs.css";

// chef
import Joel from "../../../assets/Images/cheefs/chefs-1.jpg";

import Sarah from "../../../assets/Images/cheefs/chefs-2.jpg";

import Alain from "../../../assets/Images/cheefs/chefs-3.jpg";

const Chefs = () => {
  return (
    <section id="chefs">
      <div
        className="cheef-wrapper"
        // data-aos="fade-up"
      >
        <div
          className="container"
          data-aos-delay="1200"
          // data-aos-duration="1000"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="chef-title text-center "> Our chefs </h1>

          <div className="row pt-2 gx-md-5 gy-5  justify-content-between align-items-center ">
            {/* joel card  */}
            <div className="col-lg-4  col-md-4   text-center ">
              <div className="card chef-card ">
                <img
                  src={Joel}
                  alt="cheef"
                  className="img-fluid   card-img-top "
                />
                <div className="card-content  text-center ">
                  <h5 class="card-title">Joel-Robuchon</h5>
                  <span>Master Chef</span>
                </div>
              </div>
            </div>

            {/* Sarah card */}
            <div className="col-lg-4  col-md-4 ">
              <div className="card  chef-card   ">
                <img
                  src={Sarah}
                  alt="cheef"
                  className="img-fluid card-img-top "
                />
                <div className="card-content text-center ">
                  <h5 class="card-title">Sarah-Jhonson</h5>
                  <span>Patissier</span>
                </div>
              </div>
            </div>

            {/* Alain Card */}
            <div className="col-lg-4  col-md-4 ">
              <div className="card chef-card  ">
                <img
                  src={Alain}
                  alt="cheef"
                  className="img-fluid card-img-top "
                />
                <div className="card-content text-center ">
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
