const Random = ({min, max}) => {

    const getRandomValue = () => {
        return Math.floor(Math.random(min) * max)
    }

    return (
        <div className="container">
            <p className="card"> Random value between {min} and {max} = {getRandomValue()} </p>
        </div>
    )
}

export default Random