function BoxColor (props){
    const {r, g, b} = props;

   const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    width : '10%',
    height: '100px',
   }

   return (
   <div style={divStyle}>
    </div>)

}

export {BoxColor};