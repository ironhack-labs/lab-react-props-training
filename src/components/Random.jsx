function Random(props){

    let randomNum = Math.floor(Math.random()*props.max + props.min)
    
    return (
        <p>Random value between {props.min} and {props.max} =&gt; {randomNum}</p>
    )
}

export default Random