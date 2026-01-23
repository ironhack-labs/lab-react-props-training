function Random(props)
{
    let randomNum = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;


    return <h3>Random value between {props.min} and {props.max} = {randomNum}</h3>

}

export default Random;