export function Random(props){
    return (
    <>
    {Math.random() * (props.max - props.min) + props.min}
    </>
    )
    
}