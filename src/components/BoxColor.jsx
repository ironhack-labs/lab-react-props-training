function BoxColor(probs) {

    const color = {
        background: `rgb(${probs.r + " " + probs.g + " " + probs.b})`
    }
    return (
        <div className="cards" style={color}>
            rgb({probs.r + " " + probs.g + " " + probs.b})
        </div>
    )
}

export default BoxColor;