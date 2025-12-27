import {createStore, combineReducers} from "redux";

const counterReducer=(state=0, action)=>{
   switch(action.type){
      case "counter/increment":{
         return state+action.payload;
      }
      case "counter/decrement":{
         return state+action.payload;
      }
      default:{
         return state;
      }
   }
}

const initstate={
   bgColor: "yellow",
   fontColor:"black"
}

const themeReducer=(state=initstate, action)=>{
   switch(action.type){
      case "theme/bgColor":{
         return{
            ...state,
            bgColor:action.payload,
         }
      }
      case "theme/fontColor":{
         return{
            ...state,
            fontColor:action.payload,
         }
      }
      default:{
         return state;
      }
   }
}

const rootReducer=combineReducers({
   counter:counterReducer,
   theme:themeReducer,
})

export const store= createStore(rootReducer);