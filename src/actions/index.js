import axios from "axios";

const API_KEY = "854cb0833fe4c89d20048eda89359bc9"
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER"

// ACTION CREATOR: fetches weather from API
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  const request = axios.get(url);


  //console.log("Request:", request)

  // REDUX - PROMISE : MIDDLEWARE that allows us to return a promise
  // on this payload property
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}