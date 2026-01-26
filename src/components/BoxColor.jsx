export default function BoxColor({r, g, b}) {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`

    return (
        <div style={{width: '200px', height: '100px', backgroundColor: backgroundColor}}>
            <p style= {{color:'white'}}>rgb({r}, {g}, {b})</p>
        </div>
    )
}