import "./App.css";
import IdCard from './components/IdCard';
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import "./index.css";
// const randomNumber = Math.floor(Math.random() * 256);

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      
<IdCard
firstName={"John"}
lastName = {"doe"}
   gender={"male"}
heigth = {178}
birth = {"1992-07-14"}
picture = {"https://randomuser.me/api/portraits/men/44.jpg"}
/>
     

<IdCard
  lastName={'Delores '}
  firstName={'Obrien'}
  gender={'female'}
  heigth={172}
  birth={"1988-05-11"}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>



<Greetings lang = "de" > ludwig</Greetings>
<Greetings lang = "fr" > Francois </Greetings>


<Random min={1} max={6}/>
<Random min={1} max={100}/>


<BoxColor r={Math.floor(Math.random() * 256)} g={Math.floor(Math.random() * 256)} b={Math.floor(Math.random() * 256)} />
<BoxColor r={Math.floor(Math.random() * 256)} g={Math.floor(Math.random() * 256)} b={Math.floor(Math.random() * 256)} />

    </div>
  );
}

export default App;
