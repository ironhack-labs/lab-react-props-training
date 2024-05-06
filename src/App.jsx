import "./App.css";
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import Boxcolor from "./components/Boxcolor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard 
      lastName="Smith"
      firstName="John"
      gender="Male"
      height={179}
      date="08/10/1995"
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de" >Ludwig</Greetings>
      <Random min={1} max={100} />
      <Boxcolor r={255} g={100} b={100} />
    </div>
  );
}

export default App;
