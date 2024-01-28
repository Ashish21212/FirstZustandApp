import React from 'react';
import './Fruit.css'

const Fruit = (props) => {
    
  return (
    <>
      <div className="fruit">
                <img src={props.img} alt="mango" />
                <h2>{props.head}</h2>
                <button onClick={props.inc}>Increment</button><br></br>
                <button onClick={props.dec}>Decrement</button>
            </div>
    </>
  )
}

export default Fruit;