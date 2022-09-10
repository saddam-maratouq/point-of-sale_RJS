import React from "react";
import CartListPrint from "../CartListPrint/CartListPrint";



export const ComponentToPrint = React.forwardRef((props,ref) => {
    
    const { Cart , Total} = props 
    console.log('Cart in print =>',Cart);
    // const {Mealname, price, totalAmount }  = Cart 
     
    console.log('price from print',Cart);

    return (
      <div ref={ref} className='p-5'>
        
        <table className='table  '>
                    <thead>
                      <tr> 
                       
                        <th scope='col'>Meal</th>
                        <th scope='col'>price</th>
                        <th scope='col'>total</th>
                        <th scope='col'>Qty</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {Cart.map((Cartfoods) => (
                        <tr key={Cartfoods.id}>
                          <CartListPrint
                            Cartfoods={Cartfoods}
                          />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h3 className='text-capitalize fw-bolder'>
                    total : ${Total} 
                  </h3>
      </div>
    );
  });