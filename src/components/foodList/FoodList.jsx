import React from "react";


//css 
import './foodlist.css'



const FoodList = ({ ele ,addFood}) => {

  const {Mealname,Images,price} = ele; 

  return (
    
    <div className="text-center my-5 " > 
    <img  className="food-img img-fluid " src={Images} alt="food Imagess" />
    <h3  className="my-3" > {Mealname} </h3>
     <p className="price"> ${price}</p>
     <button className="btn-card btn-danger " onClick={ () => addFood(ele)} >
        Add  <i className=" icon fa-sharp fa-solid fa-cart-shopping"></i>
     </button> 
    </div>
  );
};

export default FoodList;
