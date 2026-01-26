function BoxColor({r, g, b}) {

    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    let divStyle = {
        backgroundColor : `rgb(${r}, ${g}, ${b})` // "rgb(" + r + "," + g + "," + b + ")"
    };
    
    return (
        <>
        <div className="boxcolor" style={divStyle}>
            <div>rgb({r},{g},{b})</div>
            <div>#{hexR}{hexG}{hexB}</div>
        </div>
        </>
    )
}

export { BoxColor };