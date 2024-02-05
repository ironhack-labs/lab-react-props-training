import "./App.css";
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'

function App() {
  return (
    <div className="App">
      <h1> IdCArd</h1>

      <IdCard
        firstName={'John'}
        lastName={'Doe'}
        gender={'male'}
        height={'1,78m'}
        birth={new Date("1992-07-14")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />
      <IdCard
        firstName={'Obrien'}
        lastName={'Dolores'}
        gender={'female'}
        height={'1,72m'}
        birth={new Date("1988-05-11")}
        picture={"https://randomuser.me/api/portraits/women/44.jpg"}
      />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />


      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>


  )
}

export default App;
