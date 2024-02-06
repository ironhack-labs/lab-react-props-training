function Random (props) {
   let randomNumber = 0;
   randomNumber = Math.floor((Math.random() * props.max + props.min));
   const text = `Random value between between ${props.min} and ${props.max} => ${randomNumber}`

    return (
        <div>
            <p>{text}</p>
        </div>

    )
}

export default Random;