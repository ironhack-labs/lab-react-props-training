

function Random(props) {

    const randomvalue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;

  return (
    <div className="random-card" style={{
        border:"1px solid black",
        padding:"10px",
        margin:"10px",
        fontFamily:"sans-serif",
        fontSize:"20px",
        textAlign:"left"

    }}>
        Random value between {props.min} and {props.max} {"=>"} {randomvalue}
         </div>
  )
}

export default Random
