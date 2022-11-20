import React from "react";

import "./Menu.css";

//menu img

import pizaa from "../../../assets/Images/our Menu/category1.png";
import Sauces from "../../../assets/Images/our Menu/category2.png";
import compo from "../../../assets/Images/our Menu/category3.png";
import kidsFood from "../../../assets/Images/our Menu/category4.png";
import chicken from "../../../assets/Images/our Menu/category5.png";
import BOXMeals from "../../../assets/Images/our Menu/category6.png";

const Menu = () => {
  return (
    <section className="Menu py-5  ">
      <div className="container" data-aos="fade-down" data-aos-delay="1000">
        <h1 className="Menu-title text-center "> Our Menu </h1>

        <div className="row text-center ro-effect">
          <div className="col  co-effect">
            <img src={pizaa} alt="pizza" className="menu-img" />
            <p className="py-3 lead"> PIZZA </p>
          </div>

          <div className="col co-effect">
            <img src={Sauces} alt="saus" className="menu-img" />
            <p className="py-3 lead">SAUCES</p>
          </div>

          <div className="col co-effect">
            <img src={compo} alt="compo" className="menu-img" />
            <p className="py-3 lead"> COMPO </p>
          </div>

          <div className="col co-effect">
            <img src={kidsFood} alt="kidsFood" className="menu-img" />
            <p className="py-3 lead"> KIDDS FOOD </p>
          </div>

          <div className="col co-effect">
            <img className="Edit-img  menu-img" src={chicken} alt="chicken" />
            <p className="py-3 lead"> CHICKEN </p>
          </div>

          <div className="col co-effect">
            <img className="Edit-img  menu-img" src={BOXMeals} alt="BOXMeals" />
            <p className="py-3 lead"> BOX MEALS </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
