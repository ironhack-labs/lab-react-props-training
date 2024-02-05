function Random(props) {
    let randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    const text = `Random value between ${props.min} and ${props.max} => ${randomNumber}`;
    return (
        <p>{text}</p>
    )
}

export default Random
