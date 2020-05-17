import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
  console.log("Action received (promise resolved)", action)
  switch (action.type) {
    case FETCH_WEATHER:

      //Returns new instance of state. 
      // We NEVER want to manipulate the state. WE create a new array Very important

      //return state.concat([action.payload.data]); almost identical to:
      return [action.payload.data, ...state] //[city, city,city]
  }

  //console.log("Action received", action)
  return state;
}