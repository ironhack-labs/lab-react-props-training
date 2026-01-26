import "./App.css";
import IdCard from "../src/components/IdCard.jsx"
import Greetings from "../src/components/Greetings.jsx"
import Random from "../src/components/Random.jsx"
import BoxColor from "../src/components/BoxColor.jsx"


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
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<Random min={1} max={100} />
<Random min={50} max={60} />
<BoxColor r={255} g={0} b={0} />  {/* Red */}
      <BoxColor r={0} g={255} b={0} />  {/* Green */}
      <BoxColor r={0} g={0} b={255} />  {/* Blue */}
      <BoxColor r={128} g={0} b={128} />  {/* Purple */}
</div>



  );
}

export default App;
