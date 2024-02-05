function Random(props) {
    return(
        <div className="box">
            <p>Random value between {props.min} and {props.max} =&gt; {Math.floor((props.max - props.min) / 2 + props.min)}</p>
        </div>
    );
}

export default Random;