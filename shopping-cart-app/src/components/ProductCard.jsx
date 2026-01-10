import React from "react"
import {useDispatch} from "react-redux";
import {addToCart} from "../store/action-creator/cart";
import '../App.css';

const ProductCard=({product})=>{
   const dispatch=useDispatch();

   return <div className="crd">
      <div>
         <figure>
            <img className="vimg" src={product.image} alt={product.title}/>
         </figure>
      </div>
      <div>
         <h3>{product.title}</h3>
      </div>
      <div>
         <p>
            <span>${product.price}</span>
         </p>
      </div>
      <div>
         <button
         onClick={()=>dispatch(addToCart(product))}
         >
            Add to Cart
         </button>
      </div>
   </div>
}

export default ProductCard;