import "./App.css";
import { IdCard } from "./components/IdCard";
import img from "./assets/images/pics1.webp";
import { Greetings } from "./components/Greetings";
import { Random } from "./components/Random";
import { BoxColor } from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Onyebueke"
        firstName="Chinonye"
        gender="Female"
        height={157}
        birth="1995-08-10"
        picture={img}
      />
      <Greetings lang="fr" children="Ifeanyi"/>
      <Random min={1} max={100}/>
      
      <BoxColor r={255} g={0} b={0} />
      
      <BoxColor r={128} g={255} b={0} />
      
</div>
    
  );
}

export default App;
