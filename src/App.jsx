import "./App.css";
import React from "react";
import IdCard from "./component/IdCard";
import Greeting from "./component/Greeting";

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <hr />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <div>
        <Greeting lang ="de">Ludwing</Greeting>
        <Greeting lang ="fr">FranÇois</Greeting>
        <Greeting lang ="es">Carlos</Greeting>
        <Greeting lang ="en">John</Greeting>
      </div>
    </div>
  );
}

export default App;
