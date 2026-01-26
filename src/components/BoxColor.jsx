
function BoxColor (props) {

    const bgStyle = () =>{
        return "#" + ((1 << 24) | (props.r << 16) | (props.g << 8) | (props.b)).toString(16).slice(1);
    };

 return (

<>

{/* 2 curly braces -> 1 to indicate javascript , -> 2 to indicate style object  */}
<div className="box" style = {{ backgroundColor : `rgb(${props.r}, ${props.g}, ${props.b})`}}> 
<p> rgb({props.r}, {props.g}, {props.b}) </p>
<p> {bgStyle()} </p>
</div>

</>


 );
}
export default BoxColor;