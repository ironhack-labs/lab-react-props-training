function BoxColor(props) {
    let rgbCode = 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')';
    return(
        <div className="box" style={{backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')'}}>
            <p>{rgbCode}</p>
        </div>
    );
}

export default BoxColor;