function Random(props){

    let randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min);

    return(
        <div style={{ display: 'flex', width: '700px', padding: '5px', marginBottom: '10px', marginLeft: '10px', border: '1px solid black' }}>
            <h3>Random value between {props.min} and {props.max} {"=>"} {randomNumber} </h3>
        </div>
    );
}

export default Random;