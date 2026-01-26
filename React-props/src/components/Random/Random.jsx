import './Random.css'

const randomNumber = (props) => {
    const min = props.min
    const max = props.max

    const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const randomValue = getRandomInteger(min, max)

    return (
        <div className='random'>

            <p>Random Value:{randomValue}</p>


        </div>


    )






}

export default randomNumber