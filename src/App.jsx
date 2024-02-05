import "./App.css";
import IdCard from "./components/IdCard/IdCard"
import Greetings from "./components/Greetings/Greetings"
import Random from "./components/Random/Random"
import BoxColor from "./components/BoxColor/BoxColor"

function App() {

  return (

    <div className="App">

      <h1> LAB | React Training</h1>

      <IdCard
        lastName={'Delores '}
        firstName={'Obrien'}
        gender={'female'}
        height={172}
        birth={new Date("1988-05-11")}
        picture={"https://randomuser.me/api/portraits/women/44.jpg"}
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Antoine</Greetings>
      <Greetings lang="en">Kate</Greetings>

      <Random min={10} max={90} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  )
}

export default App
