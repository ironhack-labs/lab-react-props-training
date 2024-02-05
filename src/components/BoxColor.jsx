function BoxColor (props) {

    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length == 1 ? `0` + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }

    const hex = rgbToHex(props.r, props.g, props.b)
    

    return (
        <div className="BoxColor box" style={{backgroundColor:hex}}> 
            <p>rgb&#40;{props.r},{props.g},{props.b}&#41;</p>
            <p>{hex}</p>
        </div>
    )
}

export default BoxColor;