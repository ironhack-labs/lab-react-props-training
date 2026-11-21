function Random (props) {
    let randomValue = Math.floor(Math.random()* (props.max - props.min) + props.min)
    return <div className="random"> Random value between {props.min} and {props.max} = {randomValue} </div>
}

export default Random