import React from "react";


//css 
import './foodlist.css'



const FoodList = ({ ele ,addFood}) => {

  const {Mealname,Images,price} = ele ; 

  return (
    
    <div className="text-center mt-5 " > 
    <img  className="food-img img-fluid w-md-100" src={Images} alt="food Imagess" />
    <h3  className="my-3" > {Mealname} </h3>
     <p className="price"> ${price}</p>
     <button className="btn-card text-white " onClick={ () => addFood(ele)} >
        Add  <i className=" icon fa-sharp fa-solid fa-cart-shopping"></i>
     </button> 
     <div className="bordring">
      
     </div>
    </div>
  );
};

export default FoodList;
