import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
  lastName="Doe"
  firstName="John"
  gender="male"
  height={1.78}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<Random min={1} max={6}/>
<Random min={1} max={100}/>
   </div>
  );
}

export default App;
