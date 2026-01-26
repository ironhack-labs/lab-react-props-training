function Random (props){
    let number= Math.Random() * (props.max - props.min) + props.min;
    return <p>{number}</p>
}

export default Random;