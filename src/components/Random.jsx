function Random(props) {

    let randomNumber = Math.floor(Math.random() * (props.max - props.min+1)) + props.min
  
    return <p>Random value between {props.min} and {props.max} {"=>"} {randomNumber}</p>
  }
  
  export default Random;