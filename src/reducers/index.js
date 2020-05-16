import { combineReducers } from 'redux';
import WeatherRecucer from "./reducer_weather"

const rootReducer = combineReducers({
  weather: WeatherRecucer
});

export default rootReducer;
