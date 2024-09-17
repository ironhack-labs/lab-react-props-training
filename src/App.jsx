import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard/>
      <Greetings/>
      <Random/>
      <BoxColor/>
    </div>
  );
}

export default App;
