function BoxColor({r, g, b}){

const boxStyle = {
  width: "200px",
  height: "100px",
  backgroundColor: `rgb(${r}, ${g}, ${b})`,
  border: "1px solid black",
  margin: "10px 0",
};


return(
  <div style = {boxStyle}></div>
)

}

export default BoxColor