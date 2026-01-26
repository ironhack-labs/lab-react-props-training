import "./App.css";
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <h1>ID Cards</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"



      />


      <Greetings lang="fr"> Ludwig</Greetings>
      <Greetings lang="fr"> François</Greetings>



      <h1>Random Number Generator</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <Random min={10} max={50} />
    </div>
  );
}
export default App;
