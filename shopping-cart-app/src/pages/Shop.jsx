import {useState,useEffect} from "react";
import ProductCard from "../components/ProductCard";

const Shop =()=>{
   const [products,setProducts]=useState([]);
   useEffect(()=>{
      fetch(`http://localhost:4000/products`)
      .then((res)=>res.json())
      .then((data)=>setProducts(data));
   },[])
   return <div>
      <div>
         <div>
            <div>
               <h1>Our E-com site</h1>
            </div>
         </div>
      </div>
      <div>
         <div>
            <div>
               <div>
                  <h2>All Products</h2>
               </div>
            </div>
            <div>
               <div>
                  {products.map((product)=>(
                     <ProductCard key={product.id}
                     product={product}/>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </div>
}

export default Shop;