
import React from 'react'

const CartListPrint = ({Cartfoods}) => {
 
    const {Mealname,price,totalAmount,quantity} = Cartfoods; 

    console.log('cart to print from cart list print',Mealname);
     
 
  return (
   
     
         <> 
          <td>{Mealname}</td>
          <td>{price}</td>
          <td>{totalAmount}</td>
          <td>{quantity}</td>
      </>
     
  )
}

export default CartListPrint