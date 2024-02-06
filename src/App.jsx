import "./App.css";
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';
import Random from "./components/Random.jsx"
import BoxColor from "./components/BoxColor.jsx";



function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard person = {{firstName: "First Name: Doe", lastName: "Last Name: John", gender:"Gender: male", height:"Height: 1.78m", birth:"Birth: 1992-07-14"}}/>
      <img src={"https://wallpapers-clan.com/wp-content/uploads/2023/08/cute-pokemon-pikachu-sticker-preview.jpg"}/>
      <IdCard person = {{firstName: "First Name: Delores", lastName: "Last Name: Obrien", gender:"Gender: Female", height:"Height: 1.72m",birth:"Birth: 1988-05-11"}}/>
      <img src={"https://randomuser.me/api/portraits/women/44.jpg"} />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings> 

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
