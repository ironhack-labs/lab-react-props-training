import "./App.css";
import IdCard from "./components/idCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

const App = () => {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
      lastName="John" 
      firstName= "Doe"
      gender="male"
      height="1.78"
      birth="03-31-1995"
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      
      <IdCard
      lastName="Delores" 
      firstName= "Obrie"
      gender="female"
      height="1.72"
      birth="03-31-1995"
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max ={6}></Random>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
