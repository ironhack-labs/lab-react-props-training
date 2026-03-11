function BoxColor ({r, g, b}) {
    const toHex = (c) => c.toString(16).padStart(2, '0');

    return (
        <div className="box-color" style={{backgroundColor:`rgb(${r}, ${g}, ${b})`}}>
            <h3>rgb({r}, {g}, {b})</h3>
            <h3>#{toHex(r)}{toHex(g)}{toHex(b)}</h3>
        </div>
    )
}

export default BoxColor;