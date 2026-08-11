function Random(props) {
    const randomNum = 
        Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    
return(
        <p>{randomNum}</p>
)
}

export default Random