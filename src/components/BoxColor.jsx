function BoxColor(props) {

    let rgbValue = `rgb(${props.r}, ${props.g}, ${props.b})`

    return(
         <div className="box-color-container" style={{backgroundColor: rgbValue}}>
            <div className="colored-box">
                <p>rgb({props.r}, {props.g}, {props.b})</p>
            </div>
         </div>
    )
}

export default BoxColor;