function BoxColor(props){

    const toHex = (c) => c.toString(16).padStart(2, '0');
    let colorHexa = `#${toHex(props.r)}${toHex(props.g)}${toHex(props.b)}`;

    return(
        <div style={{ backgroundColor: `rgb(${props.r} ${props.g} ${props.b})`, display: 'flex',flexDirection: 'column', alignItems: 'center' , width: '300px', padding: '15px', marginBottom: '10px', marginLeft: '10px', border: '1px solid black'  }}>
            <p className="no-margin">{`rgb(${props.r} ${props.g} ${props.b})`}</p>
            <p className="no-margin">{colorHexa}</p>
        </div>
    );
}

export default BoxColor;