export default function BoxColor(props){
    function rgb2H(x){
        const hex = x.toString(16);
        return hex.length==1 ? "0"+hex : hex;
    }
    const styles = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width:"40vw",
        border: "1px solid black",
        textAlign:"center"
    }
    const hex = `#${rgb2H(props.r)}${rgb2H(props.g)}${rgb2H(props.b)}`

    
    return(
        
        <div style={styles}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{hex}</p>
        </div>
    )
}