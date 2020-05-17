//should be a class based component or function based component

// Since we do not need to make any use of state inside of our chart 
// component we can get with functional component.
// it will just receive prop
//import _from "lodash"
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {

  const average = data.reduce(function (sum, value) {
    return sum + value;
  }, 0) / data.length;

  return average.toFixed(0);
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}