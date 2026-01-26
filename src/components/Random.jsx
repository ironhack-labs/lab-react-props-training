
function Random (props) {
    return (
        <h3 style={{border: "2px solid black", padding: "10px", width: 450}}>Random value between {props.min} and {props.max} {"=>"} {Math.floor(Math.random() * (props.max - props.min +1) + props.min)}</h3>
    )
}

export default Random

// Best practice on writing code

/* 
function Random (props) {

    let randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)

    return (
        <h3>Random value between {props.min} and {props.max} {"=>"} {randomNum}</h3>
    )
}
*/