import "./BoxColor.css";

function BoxColor (props) {
    const {red, green, blue} = props;
    const color = `rgb(${red}, ${green}, ${blue})`;
    return (
        <>
        <div style = {{backgroundColor: color}}>
            <p>{`rgb(${red}, ${green}, ${blue})`}</p>
        </div>
        </>
    )
}

export default BoxColor;