function Random(props){
    const randomValue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return (
        <p class="random">
            Random value between {props.min} and {props.max} is {randomValue}
        </p>
    )    
}

export default Random;