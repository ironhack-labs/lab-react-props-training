import React from "react";
const stylesList = { border: "2px solid black",
    margin: "5px",}
function Greetings(props) {
  return (
    <div style={stylesList}>
      {props.lang === "de"
        ? `Hallo ${props.children}`
        : props.lang === "fr"
        ? `Bonjour ${props.children}`
        : null}
    </div>
  );
}

export default Greetings;
