import "./BoxColor.css";

function BoxColor({r, g, b}) {
    const bgColor = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="box-color" style={{backgroundColor: bgColor}}>
            <p className="rgb-value">rgb({r},{g},{b})</p>
            <p className="hex-value">#{r.toString(16)}{g.toString(16)}{b.toString(16)}</p>
        </div>
    );
}

export default BoxColor;