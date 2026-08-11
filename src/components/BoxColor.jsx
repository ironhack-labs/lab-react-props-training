const BoxColor = ({r,g,b}) => {

    const getHex = () => {
        return `#${getColor(r).toString(16).padStart(2,"0")}${getColor(g).toString(16).padStart(2,"0")}${getColor(b).toString(16).padStart(2,"0")}`
    }

    const getColor = (color) => {
        return color >= 0 && color <= 255 ? color : 0
    }

    return (
        <div className="box-container" style={{backgroundColor: `rgb(${r},${g},${b})` } }>
            <p> rgb({getColor(r)},{getColor(g)},{getColor(b)})</p>
            <p> {getHex()} </p>
        </div>
    )
}

export default BoxColor