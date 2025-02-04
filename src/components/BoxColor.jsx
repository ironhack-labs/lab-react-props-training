import './BoxColor.css';

function BoxColor({ r, g, b }) {
    return (
        <div className="box-color" 
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>rgb ({r}, {g}, {b}) 
        hex: #{r.toString(16)}{g.toString(16)}{b.toString(16)
        }</div>
    );
}

export default BoxColor;