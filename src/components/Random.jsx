function Random(props){
    // returns a random number between min and max values
    return <p className="random">Return value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>

}

export default Random;