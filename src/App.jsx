import "./App.css";
import IdCard from "./components/Idcard/IdCard"; 
import Greetings from "./components/Greetings/Greetings";
import RandomNumber from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor"


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Obrien'
        firstName='Delores'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">bob</Greetings>
      <Greetings lang="es">francis</Greetings>

      <RandomNumber min={1} max={6}/>
      <RandomNumber min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />  
      <BoxColor r={128} g={255} b={0} />
    </div>
  
  
   
  );
}

export default App;
