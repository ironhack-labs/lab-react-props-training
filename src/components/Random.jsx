function Random(props) {
    const num = Math.floor(Math.random() * props.max + props.min);
    return(
        <div className="Random box">
            <p>Random value between {props.min} and {props.max} =&gt; {num}</p>
        </div>
    )
}

export default Random;