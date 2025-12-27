
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from "./store/action-creator/counter";


function App() {
   const counter=useSelector((storeState)=>storeState.counter);
   const dispatch=useDispatch();

  return (
    <div className="App">
      <div>
         <p>initial value is {counter}</p>
         <button onClick={()=>dispatch(increment(5))}>Increse by 5</button>
         <button onClick={()=>dispatch(decrement(3))}>Decrement by 3</button>
      </div>
    </div>
  );
}

export default App;
