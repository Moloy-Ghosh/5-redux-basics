import {useState} from "react";
import{useDispatch} from "react-redux";
import {modifyQuantityOfAnItem,removeProduct} from "../store/action-creator/cart";
import '../App.css';

const Cartitem=({item})=>{
   const [itemQuantity,setItemQuantity]=useState(item.quantity);
   const dispatch=useDispatch()
   return(
      <tr>
         <td>
            <div>
               <img className="vimg" src={item.image} alt={item.title}/>
            </div>
         </td>
         <td>
            <p>{item.title}</p>
         </td>
         <td>${item.price}</td>
         <td>
            <div>
               <button
                  onClick={()=>{
                     dispatch(modifyQuantityOfAnItem({
                        id:item.id,
                        quantity:itemQuantity-1,
                     }))
                     setItemQuantity(itemQuantity-1);
                  }}
               >
                  <figure>-</figure>
               </button>
               <input 
               type="number" 
               min={1}
               value={itemQuantity}
               onChange={(e)=>{
                  dispatch(modifyQuantityOfAnItem({
                     id:item.id,
                     quantity:Number(e.target.value),
                  }))
                  setItemQuantity(Number(e.target.value));
               }}
               />
               <button onClick={()=>{
                  dispatch(modifyQuantityOfAnItem({
                     id:item.id,
                     quantity:itemQuantity+1,
                  }))
                  setItemQuantity(itemQuantity+1);
               }}>
                  <figure>+</figure>
               </button>
            </div>
         </td>
         <td>${item.price*item.quantity}</td>
         <td>
            <button onClick={()=>
               dispatch(removeProduct(item.id))
            }>x</button>
         </td>
      </tr>
   )
}
export default Cartitem