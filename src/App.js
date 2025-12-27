import './App.css';
import {useSelector, useDispatch} from "react-redux";


function App() {
   const counter=useSelector((storeState)=>storeState.counter);
   const theme=useSelector((storeState)=>storeState.theme);
   const dispatch=useDispatch();
   console.log(counter);
   console.log(theme);
  return (
    <div style={{backgroundColor:theme.bgColor, color:theme.fontColor}} className="App">
      <div>
         <p>initial value is {counter}</p>
         <button onClick={()=>dispatch({type:"counter/increment", payload:5})}>Increse value by 5</button>
      </div>
      <div>
         <button onClick={()=>dispatch({type:"theme/bgColor",payload:'red'})}>Change bg to red</button>
      </div>
    </div>
  );
}

export default App;
