function Greetings(props){
   const cardStyles = {
  border: "black 2px solid",
  padding: "10px",
  margin: "10px",
}
   
    return(
        
        <div style = {cardStyles}>
             {props.lang === "de"
        ? <h1> hallo {props.children}</h1> 
        : <h1> Bonjour {props.children} </h1>
  }

        </div>
      

    )
}

export default Greetings