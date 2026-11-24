function BoxColor({ r, g, b }) {

    const color = `rgb(${r}, ${g}, ${b} )`
    const hexadecimal = "#" +
         r.toString(16).padStart(2, "0") +
         g.toString(16).padStart(2, "0") +
         b.toString(16).padStart(2, "0")

    return (
        <div
          
           className="box-color"
           style={{
            backgroundColor: color,
            border: "2px solid black",
            padding: "30px",
            margin: "15px 5px",
            textAlign: "center"
            }}
            >
                <p style={{margin: 0}}>{color}</p>
                <p style={{margin: 0}}>{hexadecimal}</p>
            </div>
    )
}

export default BoxColor