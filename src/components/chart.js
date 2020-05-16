//should be a class based component or function based component

// Since we do not need to make any use of state inside of our chart 
// component we can get with functional component.
// it will just receive prop

import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}