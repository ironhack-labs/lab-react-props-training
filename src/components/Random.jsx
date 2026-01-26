export default function Random(props){
    const randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min)

  

    return (
        <div>Random value between {props.min} and {props.max} =&gt; {randomNumber}</div>
    )


}