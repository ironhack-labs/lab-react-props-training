function BoxColor (props) {
    return  <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, margin: '1vh', padding:'1vw'}}>
                <p>rgb({props.r},{props.g},{props.b})</p>
            </div>
}

export default BoxColor