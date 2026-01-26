
function Random(props) {
    let total = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  return (
    <div>Random value between {props.min} and {props.max} =&gt; {total}</div>
  )
}

export default Random