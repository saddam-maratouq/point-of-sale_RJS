import React from "react";

import home from "./home.css";

//components
import Hero from "./hero/Hero";
import Menu from "./Menu/Menu";
import FoodDescrptions from "./food Descrption/FoodDescrptions";
import Blogs from "./Blogs/Blogs";
import Testimonial from "./TestMonial/Testimonial";
import Chefs from "./chefs/Chefs";
import Contact from "./Contact us/Contact";

const Home = () => {
  return (
    // fix here width 100%
    <div className=" home  ">
      <Hero />
      <Menu />
      <FoodDescrptions />
      <Blogs />
      <Testimonial />
      <Chefs />
      <Contact />
    </div>
  );
};

export default Home;
