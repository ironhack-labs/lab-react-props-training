import "./App.css";
import IdCard from "./components/Idcard";
import Greetings from "./components/greetings"
import Random from "./components/random";
import BoxColor from "./components/boxcolor";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth="1992-07-14"
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth="1988-05-11"
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="de">Luidweg</Greetings>
<Greetings lang="en">Harry</Greetings>

<Random min={1} max={6}/>
<Random min={1} max={100}/>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

    </div>

  );
}

export default App;
