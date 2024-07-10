import "./App.css";
import IdCard from "./Components/IdCard.jsx";
import Greetings from "./Components/Greetings.jsx"
import Random from "./Component/Random.jsx"
function App() {
  return (
    <div className="App">
      <h1> LAB | React Trainin </h1>
      <IdCard lastName = "Doe" firstName = "Jhon" gender = "male" height = {178} birth = {new Date("1992-07-14")}  picture = "https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName = "Delores" firstName = "Obrien" gender = "female" height = {172} birth = {new Date("1988-05-11")}  picture = "https://randomuser.me/api/portraits/women/44.jpg"/>
   <Greetings lang = "de">Martin</Greetings>
   <Greetings lang = "fr">Felipe</Greetings>
   <Random min = {min}/>
   <Random max/>
    </div>
  );
}

export default App;
