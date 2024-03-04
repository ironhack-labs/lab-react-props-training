// App.jsx

import React from "react";
import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {/* Render IdCard components */}
      {/* ... (Previous components) ... */}

      {/* Render BoxColor components */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Render Greetings components */}
      <Greetings lang="de">"de"Ludwig</Greetings>
      <Greetings lang="fr">"fr"François</Greetings>

      {/* Render Random components */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
