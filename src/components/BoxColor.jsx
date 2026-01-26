export const BoxColor = (props) => {
    const { r, g, b } = props;

    const rgbString = `rgb(${r}, ${g}, ${b})`;

    const rgbToHex = (r, g, b) => {
        const toHex = (n) => n.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const hexColor = rgbToHex(r, g, b);

    const divStyle = {
        backgroundColor: rgbString,
        color: (r*0.299 + g*0.587 + b*0.114) > 186 ? 'black' : 'white', // optional: auto text color for readability
        padding: '1rem',
        textAlign: 'center',
    }
    
    return (
    <div style={divStyle} className="container other color">
        <p>{rgbString}</p>
        <p>{hexColor}</p>
    </div>
    );
  };