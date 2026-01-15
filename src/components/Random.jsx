
function Random(props) {
const randomNumber = Math.floor(Math.random() * (props.max - props.min))
return (
    <p style={{border:'1px solid white', padding:'5px'}}>Random value between {props.min} and {props.max} : {randomNumber}</p>
  )
}

export default Random