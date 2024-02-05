function Random(props) {
    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min);

    return <div class="box">Random value between {props.min} and {props.max} =&gt; {randomNum}</div>
}

export default Random;