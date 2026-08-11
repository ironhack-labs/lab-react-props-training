function Random(props){
    const randomN = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return(
        <h1>random value between {props.min} and {props.max} {"=>"} {randomN} </h1>
    );
}
export default Random