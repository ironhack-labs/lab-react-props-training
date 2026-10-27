function Random(props){

let min= props.min
let max= props.max

let randomNumber= Math.floor(Math.random()*(max-min+1))+min;

    return(

<p> Random value between {min} and{max}={randomNumber}</p>





    )
}

export default Random