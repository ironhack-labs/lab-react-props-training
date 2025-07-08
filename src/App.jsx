import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random  from "./components/Random";
import BoxColor from "./components/BoxColor";
import "./App.css";

function App() {

  let people = [
     {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  return (
    <section>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>

      <div>
        {people.map((person, index) => (
          <IdCard
          key={index}
          {...person}
          />
        ))}
      </div>

      <Greetings lang="de">Wolfgang</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Domingo</Greetings>
      <Greetings lang="en">Michael</Greetings>  
      
     <Random min={1} max={100} />
     <Random min={1} max={100} />

     <BoxColor r={215} g={32} b={129}/>
     <BoxColor r={24} g={196} b={179} />



    </section>




  );
}

export default App;
