import "./App.css"
import Greetings from "./components/Greetings"

function App() {
  const birth = new Date("1990-01-01")
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <idCard firstName={"Calimero"} lastName={"Ruiz"} gender={"masculino"} height={60} birth={birth}/>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">John</Greetings>
      <Random min={1} max={6} />  
      <Random min={1} max={100} /> 
      <BoxColor r={255} g={0} b={0} /> 
      
    </div>
    
  );
}

export default App
