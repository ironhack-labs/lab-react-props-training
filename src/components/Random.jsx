function Random (props) {

const styles = {border: "1px solid black"}
    let random1 = 0
   
         random1 = Math.floor(Math.random()*props.max +props.min)
   
return (<p style={styles}>Random value between {props.min} and {props.max} is {random1}</p>)
}

export default Random