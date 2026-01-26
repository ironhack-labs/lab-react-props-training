// I have to remenber to import....

import "./App.css";
import "./components/IdCard"
import IdCard from "./components/IdCard";

import "./components/Greetings"
import Greetings from "./components/Greetings";

import "./components/Random"
import Random from "./components/Random";

import BoxColor from "./components/BoxColor";

function App() {
  
  return (
    
    <div>
      <h1> LAB | React Training</h1>
      
      <h2>IdCard</h2>
      <IdCard person = {{
        lastName: 'Doe',
        firstName:'John',
        gender:'male',
        height: 178,
        birth: 1992-10-15,
        picture: "https://randomuser.me/api/portraits/men/44.jpg"
      }}/>

      <IdCard person = {{
        lastName:'Delores',
        firstName:'Obrien',
        gender:'female',
        height: 172,
        birth: 1988-15-11,
        picture: "https://randomuser.me/api/portraits/women/44.jpg"
      }}/>

      <h2>Greetings</h2>
      
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
