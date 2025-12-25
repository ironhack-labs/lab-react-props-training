function Random (props){
    return (
        <p> {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>
    )
}

export default Random