import "./App.css";

import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard 
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth = "Tue Jul 14 1992"
      picture="https://randomuser.me/api/portraits/men/44.jpg"/>

      <IdCard 
      lastName='Delores'
      firstName='Obrien'
      gender='female'
      height={172}
      birth = "Tue May 11 1993"
      picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <h1>Greetings</h1>
      <Greetings lang="de">
      Ludwig
      </Greetings>
      <Greetings 
      lang="fr">
      François
      </Greetings>
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />  
      <h1>CreditCard</h1>

      <h1>Rating</h1>

      <h1>DriverCard</h1>

      <h1>ClickablePicture</h1>

      <h1>Dice</h1>

      <h1>Carousel</h1>

      <h1>NumbersTable</h1>
    </div>
    
  );
}

export default App;
