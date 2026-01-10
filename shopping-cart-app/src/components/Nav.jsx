import {Link} from "react-router-dom";

const Nav=()=>{
   return(
      <header>
         <div>
            <nav>
               <ul>
                  <li>
                     <Link to="/">Shop</Link>
                  </li>
                  <li>
                     <Link to="/cart">Cart</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}

export default Nav;