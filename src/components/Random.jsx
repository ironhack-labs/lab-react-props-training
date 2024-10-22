function Random (props){
    let randomNumber = Math.floor(Math.random()) * (props.max - props.min + 1) + props.min;

    return randomNumber
}


export default Random