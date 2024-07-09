
function Random(props) {
  return (
    <div>
<span>Random value between {props.min} and  {props.max} = {Math.floor(Math.random(props.min>props.max)*10)}</span>


    </div>
  )
}

export default Random