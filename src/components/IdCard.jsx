



function IdCard(props){

const cardStyles = {
  border: "black 2px solid",
  padding: "10px",
  margin: "10px",
   display: "flex",
   
}

const dataStyles={
   
   flexDirection : "row"
}

const imgStyle = {
      alignContent : "center",
      justifyContent:"center",
   flexDirection : "row",
   gap: "20px",
   padding: "20px"
}


    return(
        <div style ={cardStyles}>
         <div style ={imgStyle}>
            <img src={props.picture} alt="profile" />
        </div>
        <div style = {dataStyles}>
            <p> First Name:<span>{ props.firstName }</span></p>
            <p> Last Name:<span>{ props.lastName }</span></p>
            <p> Gender:<span> { props.gender }</span></p>
            <p> Height:<span> { props.heigth } cm</span></p>
            <p> Birth: <span>{ props.birth }</span></p>
          </div>
        </div>

)
}

export default IdCard