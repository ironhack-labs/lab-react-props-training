import "./App.css";
import React from "react";
import { IdCard } from "./components/IdCard";
import { Greetings } from "./components/Greetings";
import { BoxColor } from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> IdCard</h1>
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="en">Barry</Greetings>
      <h1>Random</h1>
      <h1>Box Colour</h1>
      <BoxColor r={35} g={200} b={59} />
    </div>
  );
}

export default App;
