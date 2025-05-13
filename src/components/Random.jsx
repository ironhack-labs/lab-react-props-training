function Random(props){
    
    
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", display: "flex" }}>
      Random value between {props.min} and {props.max} =&gt; {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
    </div>
  );
}

export default Random;