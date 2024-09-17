import React from "react";
import "./styleGreetings.css";

export const Greetings = (props) => {
  return (
    <div className="containerGreetings">
      <p>
        {props.lang === "de"
          ? "Hallo "
          : props.lang === "en"
          ? "hello "
          : props.lang === "es"
          ? "Hola "
          : "Bonjour "}
        {props.children}
      </p>
    </div>
  );
};
