function Random(props) {
    const random = Math.floor(Math.random() * 100) + 1;
    return (
        <div>
            Random value between {props.min} and {props.max} = {random}
        </div>
    )
}

export default Random;