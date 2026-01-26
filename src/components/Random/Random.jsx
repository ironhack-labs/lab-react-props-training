import './Random.css'

const Random = (props) => {

    const min = props.min
    const max = props.max

    const randomNum = Math.floor((Math.random() * (max - min + 1)) + min)

    return (
        <p className='randomNum'>Random value between {props.min} and {props.max} is {randomNum}</p>
    )



}

export default Random