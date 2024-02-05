export default function BoxColor(props){

    const {r,g,b} = props;

let bgColor = `rgb(${r}, ${g}, ${b})`
const divStyle = {
    backgroundColor: bgColor,
    width:"100%",
    height:"80px",
    border: "1px black solid",
    margin: "5px"
}

return(
    <>
    <div style={divStyle}>
    <h3>rgb({r}, {g}, {b})</h3>
    </div>
    </>
)    
}
