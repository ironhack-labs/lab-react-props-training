function BoxColor(props){
    return <div style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: '200px',  
        height: '100px',  
        border: '1px solid black' 
    }}>
    </div>

}

export default BoxColor;