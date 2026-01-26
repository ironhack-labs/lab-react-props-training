

function Random(props) {
    const num1 = Math.floor(Math.random()* 6)
    
  return (
    <div>

<h3>Random value between 1 and 6 {props.min = num1}</h3>
<h3>Random value between 1 and 100 {props.max =  Math.floor(Math.random()* 100)}</h3>
    </div>
  )
}

export default Random