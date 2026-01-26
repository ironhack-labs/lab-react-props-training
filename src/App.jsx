import "./App.css";
import IdCard from "./components/IdCard";"./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard user={{
      lastName:"Doe",
      firstName:"John",
      gender:'male',
      height:"178",
      birth:"1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
      }}/>

      <IdCard user={{
      lastName:'Delores',
      firstName:'Obrien',
      gender:'female',
      height:172,
      birth:"1988-05-11",
      picture:"https://randomuser.me/api/portraits/women/44.jpg",
      }}/>

  <Greetings lang="de">Ludwig</Greetings>,
  <Greetings lang="fr">François</Greetings>,
  <Greetings lang="es">François</Greetings>,
  <Greetings lang="en">François</Greetings>,


  <Random min={1} max={6}/>,
  <Random min={1} max={100}/>,
      
  </div>
  );

    

}

export default App;
