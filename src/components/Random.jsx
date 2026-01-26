export default function Random(props){

    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);
    const randomNumber = Math.floor(Math.random()* (max - min + 1) +min);
   return(
    <>
<p>{props.min} {props.max} = {randomNumber}</p>

    </>
   )
}