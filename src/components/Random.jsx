function Random(props){
const cardStyles = {
  border: "black 2px solid",
  padding: "10px",
  margin: "10px",
}
    
 const randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
<h1 style = {cardStyles}>Random value between {props.min} and {props.max} = {randomNumber}</h1>

    )
}

export default Random