import React from 'react'

const CartList = ({Cartfood,deleteFood,quantityHandler}) => {

  console.log('cartFood is ... ',Cartfood);
    const {Mealname,price,totalAmount,quantity,id} = Cartfood; 


    return (
      <>
        <th scope='row'>{id}</th>
        <td>{Mealname}</td>
        <td>{price}</td>
        <td>{totalAmount}</td>
        <td>
          <div className='d-flex gap-2 align-items-center'>
            <button
              className='btn-warning text-white btn-sm fw-bolder'
              onClick={() => quantityHandler('', Cartfood)}
            >
              -
            </button>
            {quantity}
            <button
              className='btn-warning text-white btn-sm fw-bolder'
              onClick={() => quantityHandler('plus', Cartfood)}
            >
              +
            </button>
          </div>
        </td>
        <td>
          <button onClick={() => deleteFood(id)} className=' btn-danger btn-sm'>
            <i className=' fa-sharp fa-solid fa-circle-xmark'></i>
          </button>
        </td>
      </>
    );
}

export default CartList