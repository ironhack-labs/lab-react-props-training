function Random(props) {

    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const randomValue = getRandom(props.min, props.max);

    return <p>Random value between {props.min} and {props.max} = {randomValue}</p>
}

export default Random;