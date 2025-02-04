function Random(props) {
let randomResult = Math.floor(Math.random()*(props.max - props.min) + props.min)
    return( <p className = "greeting"> Random value betwen {props.min} and {props.max} => {randomResult}</p>
)
}

export default Random