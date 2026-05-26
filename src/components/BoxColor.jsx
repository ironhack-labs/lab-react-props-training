export function BoxColor(props) {
    const r = props.r
    const g = props.g
    const b = props.b

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    };

    return (
        <div className="container color-box" style={divStyle}>
{/*             <style>
                {`.color-select{background-color: rgb(${props.r},${props.g},${props.b})}`}
            </style> */}
            <h2>rgb({`${props.r},${props.g},${props.b}`})</h2>
        </div>
    )
}