function Random (props) {
    const min = props.min;
    const max = props.max;
    return (
        <>
        <p>Random value between {min} and {max}  => {Math.floor(Math.random()*(max - min + 1)) + min}</p>
        </>
    )
}

export default Random;