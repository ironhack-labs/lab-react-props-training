import React from 'react';

function Random(props) {
    let randomNumber = Math.floor(Math.random() * (props.max - props.min +1) + props.min)
    let output = `Random value between {props.min} and {props.max} => ${randomNumber}`
    return output;
}


export default Random;