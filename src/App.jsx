import React from 'react';
import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      < IdCard lastName="Swift" firstName="Taylor" gender="female" age={30} birth="31/02/1994" height={174} picture="link"/>
      < Greetings lang="fr">Taylor</Greetings>
      < Random min={1} max={5} />
      < BoxColor r={3} g={200} b={79} />
    </div>
  );
}

export default App;

