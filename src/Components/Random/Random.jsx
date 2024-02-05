const Random = (props) => {
    const min = props.min
    const max = props.max

    const RandomValue = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <p>Random value between {min} and {max} = {RandomValue} </p>
    )
}

export default Random