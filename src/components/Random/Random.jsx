import './../Random/Random.css'
const Random = (props) => {
    let min = Math.ceil(props.min)
    let max = Math.floor(props.max)

    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <p>Random value between {props.min} and {props.max} = {randomValue}</p>
    )

}
export default Random




