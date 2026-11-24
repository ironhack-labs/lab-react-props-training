import "./box-color.css";

function BoxColor({r,g,b}){

    return (
        <div className="box-color-card" style = {{backgroundColor :`rgb(${r},${g},${b})`}}>
            <p className= "box-text">rgb({r},{g},{b})</p>
        </div>
    )
    
}

export default BoxColor