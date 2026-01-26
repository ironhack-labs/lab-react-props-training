function Random (props){

    const randomValue = Math.floor(Math.random() * props.max - props.min +1) + min;

    return(
     <div>
        Random value between {props.min} and {props.max} =  {randomValue}
     </div>
    )
}

export default Random;