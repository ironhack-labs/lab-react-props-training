
//

 const cardStyle = {
   border: "lightgrey solid px",
   backgroundColor: "white",
   padding: "8px",
   display: "flex",
 };


function Greeting({lang, children}) {

 const greetings = {
   de: "Hallo",
   en: "Hello",
   es: "Halo",
   fr: "Bonjour"
 };
//  console.log(lang, children)


  return (
    <div style={cardStyle}>
      { greetings[lang]}{children} </div>
  );
  
}

export default Greeting;
