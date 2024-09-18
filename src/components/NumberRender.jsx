function NumberRender(props) {
    console.log(props)

    const {min, max} = props

    const random = Math.floor(Math.random() * (max - min +1)) +min
    return(
        <div>
            <h1 className="random"> Random value between {props.min} and {props.max} = {random}</h1>
        </div>
    )
}

export default NumberRender