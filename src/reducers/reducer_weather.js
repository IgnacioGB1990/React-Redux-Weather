import { FETCH_WEATHER } from "../actions/index";

// Weather Reducer: used to store all the information fetched
// from outside API.
export default function (state = [], action) {
  console.log("Action received (promise resolved)", action)
  switch (action.type) {
    case FETCH_WEATHER:

      //Returns new instance of state. 
      // We NEVER want to manipulate/mutate existing state.
      // We create a new array
      // So any time an action came that we cared about we made sure we
      // returned a completely new array rather than modifiying the existing
      // array that we had.
      //return state.concat([action.payload.data]); almost identical to:
      return [action.payload.data, ...state] //[city, city,city]
  }

  //console.log("Action received", action)
  return state;
}