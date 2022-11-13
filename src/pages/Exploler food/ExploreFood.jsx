import React,{ useRef } from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';

// components
import FoodList from '../../components/foodList/FoodList';
import CartList from '../../components/cartList/CartList';

//css
import './Exploler.css';

// react tostify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ComponentToPrint } from '../../components/printReact/Componentprint';


// react to print 
import { useReactToPrint } from 'react-to-print';



const ExploreFood = () => {
  const [foodResult, setfoodResult] = useState([]);

  const [Cart, setCart] = useState([]); // state for cart item

  const [Loading, setLoading] = useState(false);

  const [Total, setTotal] = useState(0);





  // function use to fetch data from api
  let fetchData = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const URL = 'https://mocki.io/v1/f8865d8b-d457-4516-adb2-43f688bef580';
    const result = await axios.get(URL);
    let foodList = result.data.foods;
    setfoodResult(foodList);
  };

  useEffect(() => {
    fetchData();
  }, []);


  //function added  food  to  the tabel

  let addFood = (ele) => {
    let findItem = Cart.find((item) => {
      return item.id === ele.id;
    });

    if (findItem) {
      //
      let newcartfood = [];
      let newItem;

      Cart.forEach((cartItem) => {
        if (cartItem.id === ele.id) {
          newItem = { ...cartItem };
          newcartfood.push(newItem);
     
        } else {
          newcartfood.push(cartItem);
         
        }
      });
      setCart(newcartfood);
      
    

    } else {
      let addingFood = {
        ...ele,
        quantity: 1,
        totalAmount: ele.price,
      };

      setCart([...Cart, addingFood]);

      toast.success(`${addingFood.Mealname} Added  `,{
        autoClose: 2000,
        pauseOnHover: false,
      } );
    }

  
  };

  // Delete Item from tabel

  let deleteFood =  (clickedId) => {
    const filterdedItem = Cart.filter((itemDeleted) => {
      return itemDeleted.id !== clickedId;
    });
   
   
    // update state
    setCart(filterdedItem); 
  };


  // calc total

  useEffect(() => {
    let totalAmount = 0;

    Cart.forEach((item) => {
      totalAmount = totalAmount + item.totalAmount;
    });

    setTotal(totalAmount);
  }, [Cart]);

  //

  const quantityHandler = (type, cartItem) => {
    const result = Cart.find((c) => c.id === cartItem.id);

    if (type === 'plus') {
      result.quantity += 1;
      result.totalAmount = cartItem.price * (cartItem.quantity + 1);
      setCart([...Cart]);
    } else if (result.quantity <= 1) {
      const newCarts = Cart.filter((c) => c.id !== cartItem.id);
      setCart(newCarts);
    } else {
      result.quantity -= 1;
      result.totalAmount = cartItem.price * (cartItem.quantity - 1);
      setCart([...Cart]);
    }
  };

  
  const componentRef = useRef(); 
   
  const handleReactPrint = useReactToPrint({
    content: () => componentRef.current,
  });



  let handelPrint = () => handleReactPrint(); 
  

  return (
    <section className="pos">
      <div className="container">
        <div className="pos-content p-5">
          <div className="row">
            <div className="col-lg-8  ">
              {Loading ? (
                <i className=" fa-2x fa-sharp fa-solid fa-hourglass-start"></i>
              ) : (
                <div className="row">
                  {foodResult.map((ele) => (
                    <div className="col-lg-4 col-md-12" key={ele.id}>
                      <FoodList ele={ele} addFood={addFood} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* tabel  */}

            <div className="col-lg-4 col-md-12">
              {/* for print bell */}
              <div style={{ display: "none" }}>
                <ComponentToPrint
                  Cart={Cart}
                  Total={Total}
                  ref={componentRef}
                />
              </div>
              {Cart.length > 0 ? (
                <div className=" table-responsive ">
                  <table className="table table-responsive  table-hover table-dark text-center w-100   mt-5 ms-auto">
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
                      {Cart.map((Cartfood) => (
                        <tr key={Cartfood.id}>
                          <CartList
                            Cartfood={Cartfood}
                            deleteFood={deleteFood}
                            quantityHandler={quantityHandler}
                          />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h3 className="text-capitalize fw-bolder">
                    total : ${Total}
                  </h3>
                </div>
              ) : (
                <h3 className="fw-bolder text-muted">
                  Your shopping cart is empty
                </h3>
              )}
              {Total !== 0 ? (
                <div className="mt-3">
                  <button
                    className="btn btn-warning text-dark btn-lg "
                    onClick={handelPrint}
                  >
                    pay now
                  </button>
                </div>
              ) : (
                ""
              )}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreFood;
