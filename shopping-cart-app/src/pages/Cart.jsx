import {useEffect,useState} from "react";
import{useSelector, useDispatch} from "react-redux";
import Cartitem from '../components/Cartitem';
import {clearCart} from "../store/action-creator/cart";

const Cart =()=>{
   const cart=useSelector((storeState)=>storeState.cart);
   let totalSum=0;
   cart.forEach((item)=>(totalSum += item.price*item.quantity));
   const dispatch=useDispatch();

   return (
      <><div>
         <div>
            <h4>Product List in your Cart</h4>
         </div>
         <div>
            <table>
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Product Title</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Subtotal</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {cart.map(cartItem=>(
                     <Cartitem key={cartItem.id} item={cartItem}/>
                  ))}
               </tbody>
            </table>
         </div>
         <h2>
            Your total price is {totalSum}
         </h2>
         <div>
            <button onClick={()=>
               dispatch(clearCart())
            }>
               Clear Cart
            </button>
         </div>
      </div>
      </>
   )
}

export default Cart;