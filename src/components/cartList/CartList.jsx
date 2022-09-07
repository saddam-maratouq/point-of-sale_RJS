import React from 'react'

const CartList = ({Cartfood,deleteFood}) => {

    const {Mealname,price,totalAmount,quantity,id} = Cartfood; 
  

  return (
    
   
    <>
       <th scope="row">{id}</th>
       <td>{Mealname}</td>
       <td>{price}</td>
       <td>{totalAmount}</td>
       <td>{quantity}</td> 
       <td>  
       <button  onClick={ () => deleteFood(id) } className=' btn-danger btn-sm' >
       <i class="  fa-sharp fa-solid fa-circle-xmark"></i>
       </button>
        </td> 
    </>

    
   
  )
}

export default CartList