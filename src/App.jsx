import "./App.css";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <Greetings lang="de">Ludwig</Greetings>
  <Greetings lang="fr">François</Greetings>
  <Greetings lang="en">John</Greetings>

  <Random min={1} max={6}/>
<Random min={1} max={100}/>


<BoxColor/>
    </div>
  );
}





export default App;

