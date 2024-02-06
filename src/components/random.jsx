function Random(props){
let randomNum = Math.floor(Math.random() *( props.max - props.min) + props.min)
    return(<><p>
        {randomNum}</p></>)
}

export default Random;