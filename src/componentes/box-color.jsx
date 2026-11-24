import "./box-color.css"
const toHex= (n)=> n.toString(16).padStart(2,"0")
function Boxcolor({r,g,b}) {
    const rgb = `rgb(${r},${g},${b})`
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`
    return <div className="Boxcolor" style={{backgroundColor:rgb}}>
        <p>{rgb}</p>
        <p>{hex}</p>
    </div>
}    

export default Boxcolor