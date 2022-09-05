import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";


import FoodList from "../../components/foodList/FoodList";


//css
import './Exploler.css'


const ExplolerFood = () => {
  
  const [foodResult, setfoodResult] = useState([]); 

  console.log("from food result", foodResult);




  // function use to fetch data from api
  let fetchData = async () => {
    const URL = "https://mocki.io/v1/f8865d8b-d457-4516-adb2-43f688bef580";
    const result = await axios.get(URL);
    let foodList = result.data.foods;
    setfoodResult(foodList);
    console.log( 'result from fetch function', result.data)
  };




  useEffect(() => {
    fetchData();
  }, []);


  
  return (
    <section className="pos">
      <div className="container">
      <div className="pos-content p-5" >
      <div className="row">
        
        {foodResult.map(ele => (
          <div className="col-md-6" key={ele.id}>
            <FoodList ele={ele} /> 
          </div>
        ))}
        
      </div>
      </div>
      </div>
    </section>
  );
};

export default ExplolerFood;
