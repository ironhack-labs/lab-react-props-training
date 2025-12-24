
function Random(props) {

  // let randonNum = Math.floor(Math.random() * props.max + 1 )
  let randonNum = Math.floor(Math.random() * (props.max - props.min +1)) + props.min
  return (
    <div className="card">Random value between {props.min} and {props.max} = {randonNum} </div>
  )
}

export default Random