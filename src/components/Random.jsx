function Random(props){
    
    const min= props.min;
    const max= props.max;
    const value = Math.floor(Math.random()* (max - min +1) + min);
    return(
        <>
        <h2>Random value between {min} and {max} = >  {value}</h2>
        </>
    )
}

export default Random;