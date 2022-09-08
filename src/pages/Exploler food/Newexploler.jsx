import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

// components
import FoodList from "../../components/foodList/FoodList";
import CartList from "../../components/cartList/CartList";


//css
import './Exploler.css'





const ExplolerFood = () => {
  
  const [foodResult, setfoodResult] = useState([]); 

  const [Cart, setCart] = useState([]) // state for cart item 

  const [Loading, setLoading] = useState(false)


  const  [Total, setTotal] = useState(0)


  console.log("from food result", foodResult);

   console.log('added to cart', Cart)



  // function use to fetch data from api
  let fetchData = async () => {

    setLoading(true)
    setTimeout(() => {
    setLoading(false) 

    }, 1500);

    const URL = "https://mocki.io/v1/f8865d8b-d457-4516-adb2-43f688bef580";
    const result = await axios.get(URL);
    let foodList = result.data.foods;
    setfoodResult(foodList);
    console.log( 'result from fetch function', result.data)
   
  };

 
  useEffect(() => {
    fetchData();
  }, []);





  //function added  food  to  the tabel 

  let addFood =  (ele) => {
    console.log('cliked fire' , ele) 
    
    let findItem =  Cart.find(item => {
      
      console.log( 'id founded', item.id === ele.id)
      return item.id === ele.id // t or f 
       
    })

    if (findItem) {
        //
        let newcartfood = []
        let newItem; 
      
        Cart.forEach(cartItem => { 

          if (cartItem.id === ele.id) {
           
           
            newItem = {
                ...cartItem,
                quantity : cartItem.quantity + 1 ,
                totalAmount : cartItem.price * (cartItem.quantity + 1) 
            } 

            newcartfood.push(newItem)
          } 

          else {
            newcartfood.push(cartItem)

          }
           
        })

        setCart(newcartfood) 
    } 

    else {
      let addingFood = {
        ...ele,
        quantity : 1,
        totalAmount : ele.price  
      }

      setCart([...Cart,addingFood]) 
    }
   
  }


  console.log('item add to cart sucseesfuly', Cart ) 




  // Delete Item from tabel 

  let  deleteFood = async (clickedId) => {
    console.log('Delete function fire',Cart)
     const filterdedItem =  Cart.filter(itemDeleted => {
        return  itemDeleted.id !== clickedId 
      })
      
      // update state 
      setCart(filterdedItem)  ; 
    }

  
   // calc total 

   
     

     useEffect(() => {

           let totalAmount = 0;
       
          Cart.forEach(item => {
            totalAmount =  totalAmount + item.totalAmount
          })
        
          setTotal(totalAmount)
      
    }, [Cart]); 
  
  
  return (
    <section className="pos">
      <div className="container-fluid">
      <div className="pos-content p-5" >
      <div className="row">
        <div className="col-lg-8">    
        {  Loading ? <i class=" fa-2x fa-sharp fa-solid fa-hourglass-start"></i> : 
        <div className="row">
        {foodResult.map(ele => (
          <div className="col-lg-4 " key={ele.id}>
            <FoodList ele={ele}
            addFood={addFood} 
             /> 
          </div>
        ))}
        </div> 
        
        } 
        </div>
        
        {/* tabel  */} 

        <div className="col-lg-4">

        <div className=" table-responsive  bg-dark">

        <table class="table table-responsive  table-hover table-dark text-center   ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Meal</th>
                <th scope="col">price</th>
                <th scope="col">total</th>
                <th scope="col">Qty</th>
                <th scope="col">X</th>
              </tr>
            </thead>
            <tbody>
            { Cart ?  Cart.map(Cartfood => ( 
                <tr key={Cartfood.id}>

               
                <CartList 
                  Cartfood={Cartfood} 
                  deleteFood={deleteFood}
                /> 

                </tr>
                
            ))   : 'No item in cart' }


            </tbody> 
            <h3 className="px-2" > total : ${Total} </h3>
          </table>

        </div>

        </div>

      </div>
      </div>
      </div>
    </section>
  );
};

export default ExplolerFood;
