

function BoxColor(props) {

    const {r, g, b} = props;

    const comoponentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const hexColor = `#${comoponentToHex(r)}${comoponentToHex(g)}${comoponentToHex(b)}`;

    const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
    const textColor = brightness > 150 ? "black" : "white";
  return (
    <div className="box-color" style={{
        backgroundColor:`rgb(${r},${g},${b})`,
        color:textColor,
        border:"1px solid black",
        padding:"30px 10px",
        margin:"10px 0",
        fontFamily:"sans-serif",
        fontSize:"20px",
        textAlign:"center"
    }}>
        <div>rgb({r},{g},{b})</div>
        <div>{hexColor}</div>

    </div>
  )
}

export default BoxColor