import React from "react";


//css 
import './foodlist.css'



const FoodList = ({ ele }) => {

  const {Mealname,Images,price} = ele;

  return (
    
    <div className="card my-3 " >
      <img src={Images} className="card-img-top food-img" alt="food Images" />
      <div className="card-body">
        <h5 className="card-title">{Mealname}</h5>
        <p className="my-3 pb-3" > {price}$ </p> 
        <a href="#" className=" btn-card btn-primary">
          Add to list   <i class=" icon fa-sharp fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </div>
  );
};

export default FoodList;
